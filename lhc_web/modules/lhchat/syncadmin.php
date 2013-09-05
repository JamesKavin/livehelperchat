<?php

$content = 'false';
$content_status = 'false';
$userOwner = 'true';

if (isset($_POST['chats']) && is_array($_POST['chats']) && count($_POST['chats']) > 0)
{
    $ReturnMessages = array();
    $ReturnStatuses = array();

    $tpl = erLhcoreClassTemplate::getInstance( 'lhchat/syncadmin.tpl.php');
    $currentUser = erLhcoreClassUser::instance();

    if (!isset($_SERVER['HTTP_X_CSRFTOKEN']) || !$currentUser->validateCSFRToken($_SERVER['HTTP_X_CSRFTOKEN'])) {
    	echo json_encode(array('error' => 'true', 'result' => 'Invalid CSFR Token' ));
    	exit;
    }

    foreach ($_POST['chats'] as $chat_id_list)
    {
        list($chat_id,$MessageID) = explode(',',$chat_id_list);

        $Chat = erLhcoreClassModelChat::fetch($chat_id);

        if ( erLhcoreClassChat::hasAccessToRead($Chat) )
        {
            if ( ($Chat->last_msg_id > (int)$MessageID) && count($Messages = erLhcoreClassChat::getPendingMessages($chat_id,$MessageID)) > 0)
            {
            	// If chat had flag that it contains unread messages set to 0
            	if ( $Chat->has_unread_messages == 1 ) {
            		 $Chat->has_unread_messages = 0;
            		 $Chat->saveThis();
            	}

            	$newMessagesNumber = count($Messages);

                $tpl->set('messages',$Messages);
                $tpl->set('chat',$Chat);

                if ($userOwner == 'true') {
                	foreach ($Messages as $msg) {
                		if ($msg['user_id'] != $currentUser->getUserID()) {
                			$userOwner = 'false';
                			break;
                		}
                	}
                }

                $LastMessageIDs = array_pop($Messages);

                $templateResult = $tpl->fetch();

                $ReturnMessages[] = array('chat_id' => $chat_id, 'mn' => $newMessagesNumber, 'content' => $templateResult, 'message_id' => $LastMessageIDs['id']);
            } else {
                // User left chat
                if ($Chat->support_informed == 0 && $Chat->user_status == 1)
                {
                    $Chat->support_informed = 1;
                    erLhcoreClassChat::getSession()->update($Chat);
                    $ReturnMessages[] = array('chat_id' => $chat_id, 'content' => $tpl->fetch( 'lhchat/userleftchat.tpl.php'), 'message_id' => $MessageID);
                } elseif ($Chat->support_informed == 0 && $Chat->user_status == 0) {
                    $Chat->support_informed = 1;
                    erLhcoreClassChat::getSession()->update($Chat);
                    $ReturnMessages[] = array('chat_id' => $chat_id, 'content' => $tpl->fetch( 'lhchat/userjoined.tpl.php'), 'message_id' => $MessageID);
                }
            }

            if ($Chat->is_user_typing) {
                $ReturnStatuses[] = array('chat_id' => $chat_id,'tp' => 'true','tx' => htmlspecialchars($Chat->user_typing_txt));
            } else {
                $ReturnStatuses[] = array('chat_id' => $chat_id,'tp' => 'false');
            }
        }

    }

    if (count($ReturnMessages) > 0) $content = $ReturnMessages;

    if (count($ReturnStatuses) > 0) $content_status = $ReturnStatuses;
}



echo json_encode(array('error' => 'false', 'uw' => $userOwner, 'result_status' => $content_status, 'result' => $content ));
exit;
?>