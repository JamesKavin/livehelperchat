<?php

// For IE to support headers if chat is installed on different domain
header('P3P:CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"');

$tpl = erLhcoreClassTemplate::getInstance( 'lhchat/chat.tpl.php');

$embedMode = false;
$modeAppend = '';
if ((string)$Params['user_parameters_unordered']['mode'] == 'embed') {
	$embedMode = true;
	$modeAppend = '/(mode)/embed';
}

try {

    $chat = erLhcoreClassChat::getSession()->load( 'erLhcoreClassModelChat', $Params['user_parameters']['chat_id']);

    if ($chat->hash == $Params['user_parameters']['hash'])
    {
        $tpl->set('chat_id',$Params['user_parameters']['chat_id']);
        $tpl->set('hash',$Params['user_parameters']['hash']);
        $tpl->set('chat',$chat);
        $tpl->set('chat_widget_mode',true);
        $tpl->set('chat_embed_mode',$embedMode);

        $Result['chat'] = $chat;

        // User online
        if ($chat->user_status != 0) {

        	$db = ezcDbInstance::get();
        	$db->beginTransaction();

	        	$chat->user_status = 0;
	        	$chat->support_informed = 1;
	        	$chat->user_typing = time()-5;// Show for shorter period these status messages
	        	$chat->is_user_typing = 1;
	        	$chat->user_typing_txt = htmlspecialchars_decode(erTranslationClassLhTranslation::getInstance()->getTranslation('chat/userjoined','User has joined the chat!'),ENT_QUOTES);

	        	erLhcoreClassChat::getSession()->update($chat);

        	$db->commit();
        };

    } else {
        $tpl->setFile( 'lhchat/errors/chatnotexists.tpl.php');
    }

} catch(Exception $e) {
   $tpl->setFile('lhchat/errors/chatnotexists.tpl.php');

   // This is called then user closes chat widget
   // We mark session variable as user closed the chat
   CSCacheAPC::getMem()->setSession('chat_hash_widget',false);
}



$Result['content'] = $tpl->fetch();
$Result['pagelayout'] = 'widget';
$Result['pagelayout_css_append'] = 'widget-chat';
$Result['dynamic_height'] = true;
$Result['dynamic_height_message'] = 'lhc_sizing_chat';
$Result['path'] = array(array('title' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/chat','Chat started')));

if ($embedMode == true) {
	$Result['dynamic_height_message'] = 'lhc_sizing_chat_page';
	$Result['pagelayout_css_append'] = 'embed-widget';
}

?>