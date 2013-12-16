<?php

class erLhcoreClassXMP {

	public static function sendTestXMP($userData) {		
		$data = (array) erLhcoreClassModelChatConfig::fetch('xmp_data')->data;				
		$conn = new XMPPHP_XMPP($data['host'], $data['port'], $data['username'], $data['password'], $data['resource'], $data['server'], $printlog = false, $loglevel = XMPPHP_Log::LEVEL_INFO);
		try {
			$conn->connect();
			$conn->processUntil('session_start');
			
			if (isset($data['test_group_recipients']) && $data['test_group_recipients'] != '') {
				
				$recipientsGroup = explode(',',$data['test_group_recipients']);
				
				foreach ($recipientsGroup as $groupRecipient) {
					$conn->presence(NULL, "available", $groupRecipient);
				}
				
				foreach ($recipientsGroup as $groupRecipient) {
					list($groupName) = explode('/',$groupRecipient);
					$conn->message($groupName, $data['xmp_message'], "groupchat");
				}			
				
				foreach ($recipientsGroup as $groupRecipient) {
					$conn->presence(NULL, "unavailable", $groupRecipient);
				}				
			}
			
			if (isset($data['test_recipients']) && $data['test_recipients'] != '') {
				$recipientsUsers = explode(',',$data['test_recipients']);
				$conn->presence();
				
				foreach ($recipientsUsers as $recipientsUser) {					
					$conn->message($recipientsUser, $data['xmp_message']);
				}
			}
		
			$conn->disconnect();
			return true;
		} catch (Exception $e) {
			throw $e;
		}
	}

	public static function getAccessToken() {
		$xmpData = erLhcoreClassModelChatConfig::fetch('xmp_data');
		$data = (array)$xmpData->data;

		if (isset($data['gtalk_client_token']) && $data['gtalk_client_token'] != '') {		
			
			try {
				require_once 'lib/core/lhxmp/google/Google_Client.php';
				
				$client = new Google_Client();
				$client->setApplicationName('Live Helper Chat');
				$client->setScopes(array("https://www.googleapis.com/auth/googletalk","https://www.googleapis.com/auth/userinfo.email"));
				$client->setClientId($data['gtalk_client_id']);
				$client->setClientSecret($data['gtalk_client_secret']);
				$client->setApprovalPrompt('force');
				$client->setAccessType('offline');
				$token = $data['gtalk_client_token'];
				$client->setAccessToken($data['gtalk_client_token']);
				
				// Refresh token if it's
				if ( $client->isAccessTokenExpired() ) {
					$tokenData = json_decode($token);
					$client->refreshToken($tokenData->refresh_token);
					$accessToken = $client->getAccessToken();
				
					$data['gtalk_client_token'] = $accessToken;
					$xmpData->value = serialize($data);
					$xmpData->saveThis();
				}
				
				if (($accessToken = $client->getAccessToken())) {				
					$tokenData = json_decode($accessToken);
					return $tokenData->access_token;
				}
			} catch (Exception $e) {
				return false;				
			}
		}

		return false;
	}
	
	public static function revokeAccessToken() {
		$xmpData = erLhcoreClassModelChatConfig::fetch('xmp_data');
		$data = (array)$xmpData->data;
		
		try {
			if (isset($data['gtalk_client_token']) && $data['gtalk_client_token'] != '') {
												
				require_once 'lib/core/lhxmp/google/Google_Client.php';				
				$client = new Google_Client();
				$client->setApplicationName('Live Helper Chat');
				$client->setScopes(array("https://www.googleapis.com/auth/googletalk","https://www.googleapis.com/auth/userinfo.email"));
				$client->setClientId($data['gtalk_client_id']);
				$client->setClientSecret($data['gtalk_client_secret']);
				$client->setAccessType('offline');
				$client->setApprovalPrompt('force');
				$token = $data['gtalk_client_token'];
				$client->setAccessToken($data['gtalk_client_token']);
	
				// Refresh token if it's
				if ( $client->isAccessTokenExpired() ) {
					$tokenData = json_decode($token);
					$client->refreshToken($tokenData->refresh_token);
					$accessToken = $client->getAccessToken();				
				}
	
				if (($accessToken = $client->getAccessToken())) {
					$client->revokeToken();
				}
				
				unset($data['gtalk_client_token']);
				$xmpData->value = serialize($data);
				$xmpData->saveThis();
			}
			
			return true;
			
		} catch (Exception $e) {
			throw $e;
		}
	}
	
	public static function get_dns_srv($domain) {
		$rec = dns_get_record("_xmpp-client._tcp.".$domain, DNS_SRV);
		if(is_array($rec)) {
			if(sizeof($rec) == 0) return array($domain, 5222);
			if(sizeof($rec) > 0) return array($rec[0]['target'], $rec[0]['port']);
		}
	}
			
	public static function sendTestXMPGTalk($userData) {	
								
		$xmpData = erLhcoreClassModelChatConfig::fetch('xmp_data');
		$data = (array)$xmpData->data;

		if (($accessToken = self::getAccessToken()) !== false) {	
											
			$dataLogin = self::get_dns_srv('gmail.com');
		
			$conn = new XMPPHP_XMPP($dataLogin[0], $dataLogin[1], $data['email_gtalk'], $accessToken, 'xmpphp', $dataLogin[0], $printlog = false, $loglevel = XMPPHP_Log::LEVEL_INFO, true);
			try {
				$conn->connect();
				$conn->processUntil('session_start');
				$conn->presence();
				$conn->message($userData->email, $data['xmp_message']);
				$conn->disconnect();
				return true;
			} catch (Exception $e) {
				throw $e;
			}			
		} else {
			throw new Exception('Invalid access token');
		}	
	}
	
	public static function getBaseHost(){
		return (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') ? 'https://' : 'http://';
	}
	
	public static function sendXMPMessage($chat) {
		
		$data = (array) erLhcoreClassModelChatConfig::fetch('xmp_data')->data;
		
		if (isset($data['use_xmp']) && $data['use_xmp'] == 1) {	
				
			if  ( (isset($data['use_standard_xmp']) && $data['use_standard_xmp'] == '0') || !isset($data['use_standard_xmp']) ) { 			
				$conn = new XMPPHP_XMPP($data['host'], $data['port'], $data['username'], $data['password'], $data['resource'], $data['server'], $printlog = false, $loglevel = XMPPHP_Log::LEVEL_INFO);
				try {
					$conn->connect();
					$conn->processUntil('session_start');
					
					$emailRecipient = array();	// Email messages
					$groupRecipients = array(); // Group messages
					
					if ($chat->department !== false && $chat->department->xmpp_recipients != '') { // Perhaps department has assigned email
						$emailRecipient = explode(',',$chat->department->xmpp_recipients);
					} elseif (isset($data['recipients']) && $data['recipients'] != '') {
						$emailRecipient = explode(',', $data['recipients']);
					}
								
					if ($chat->department !== false && $chat->department->xmpp_group_recipients != '') {
						$groupRecipients = explode(',',$chat->department->xmpp_group_recipients);
					}

					// change status
					foreach($groupRecipients as $recipient){						
							$conn->presence(NULL,'available', $recipient);					
					}

					if (!empty($emailRecipient)) {
						$conn->presence();
					}
	
					$messages = array_reverse(erLhcoreClassModelmsg::getList(array('limit' => 5,'sort' => 'id DESC','filter' => array('chat_id' => $chat->id))));
					$messagesContent = '';
					 
					foreach ($messages as $msg ) {
						if ($msg->user_id == -1) {
							$messagesContent .= date('Y-m-d H:i:s',$msg->time).' '. erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmin','System assistant').': '.htmlspecialchars($msg->msg)."\n";
						} else {
							$messagesContent .= date('Y-m-d H:i:s',$msg->time).' '. ($msg->user_id == 0 ? htmlspecialchars($chat->nick) : htmlspecialchars($msg->name_support)).': '.htmlspecialchars($msg->msg)."\n";
						}
					}

					$cfgSite = erConfigClassLhConfig::getInstance();
					$secretHash = $cfgSite->getSetting( 'site', 'secrethash' );

					foreach ($emailRecipient as $email) {			
						$veryfyEmail = 	sha1(sha1($email.$secretHash).$secretHash);
						$messagesParsed = str_replace(array('{messages}','{url_accept}'), array($messagesContent,self::getBaseHost() . $_SERVER['HTTP_HOST'] . erLhcoreClassDesign::baseurl('chat/accept').'/'.erLhcoreClassModelChatAccept::generateAcceptLink($chat).'/'.$veryfyEmail.'/'.$email),$data['xmp_message']);
						$conn->message($email,$messagesParsed);
					}
					
					foreach ($groupRecipients as $email) {
						list($emailGroup) = explode('/',$email);
						$veryfyEmail = 	sha1(sha1($emailGroup.$secretHash).$secretHash);
						$messagesParsed = str_replace(array('{messages}','{url_accept}'), array($messagesContent,self::getBaseHost() . $_SERVER['HTTP_HOST'] . erLhcoreClassDesign::baseurl('chat/accept').'/'.erLhcoreClassModelChatAccept::generateAcceptLink($chat).'/'.$veryfyEmail.'/'.$emailGroup),$data['xmp_message']);
						$conn->message($emailGroup,$messagesParsed,'groupchat');						
					}

					foreach($groupRecipients as $recipient) {					
						$conn->presence(NULL,'unavailable',$recipient);
					}

					$conn->disconnect();
					return true;
				} catch (Exception $e) {
					throw $e;
				}
			} else {
				if (($accessToken = self::getAccessToken()) !== false) {
					
					$dataLogin = self::get_dns_srv('gmail.com');
					
					$conn = new XMPPHP_XMPP($dataLogin[0], $dataLogin[1], $data['email_gtalk'], $accessToken, 'xmpphp', $dataLogin[0], $printlog = false, $loglevel = XMPPHP_Log::LEVEL_INFO, true);
					try {
						$conn->connect();
						$conn->processUntil('session_start');
						$conn->presence();
						
						$emailRecipient = array();
						if ($chat->department !== false && $chat->department->xmpp_recipients != '') { // Perhaps department has assigned email
							$emailRecipient = explode(',',$chat->department->xmpp_recipients);
						} elseif (isset($data['recipients']) && $data['recipients'] != '') {
							$emailRecipient = explode(',', $data['recipients']);
						}
						
						$messages = array_reverse(erLhcoreClassModelmsg::getList(array('limit' => 5,'sort' => 'id DESC','filter' => array('chat_id' => $chat->id))));
						$messagesContent = '';
							
						foreach ($messages as $msg ) {
							if ($msg->user_id == -1) {
								$messagesContent .= date('Y-m-d H:i:s',$msg->time).' '. erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmin','System assistant').': '.htmlspecialchars($msg->msg)."\n";
							} else {
								$messagesContent .= date('Y-m-d H:i:s',$msg->time).' '. ($msg->user_id == 0 ? htmlspecialchars($chat->nick) : htmlspecialchars($msg->name_support)).': '.htmlspecialchars($msg->msg)."\n";
							}
						}
						
						$cfgSite = erConfigClassLhConfig::getInstance();
						$secretHash = $cfgSite->getSetting( 'site', 'secrethash' );
						
						foreach ($emailRecipient as $email) {
							$veryfyEmail = 	sha1(sha1($email.$secretHash).$secretHash);
							$conn->message($email,str_replace(array('{messages}','{url_accept}'), array($messagesContent,self::getBaseHost() . $_SERVER['HTTP_HOST'] . erLhcoreClassDesign::baseurl('chat/accept').'/'.erLhcoreClassModelChatAccept::generateAcceptLink($chat).'/'.$veryfyEmail.'/'.$email),$data['xmp_message']));
						}

						$conn->disconnect();
						return true;
					} catch (Exception $e) {
						throw $e;
					}
					
				} else {
					throw new Exception('Invalid access token');
				}
			}			
		}		
	}

}

?>