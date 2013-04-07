<?php

try {
    $chat = erLhcoreClassChat::getSession()->load( 'erLhcoreClassModelChat', $Params['user_parameters']['chat_id']);
} catch (Exception $e) {
    $chat = false;
}

$content = 'false';
$status = 'true';
$blocked = 'false';
$is_operator_typing = 'false';
$LastMessageID = 0;
$userOwner = 'true';

if (is_object($chat) && $chat->hash == $Params['user_parameters']['hash'])
{
	// Check for new messages only if chat last message id is greater than user last message id
	if ((int)$Params['user_parameters']['message_id'] < $chat->last_msg_id) {
	    $Messages = erLhcoreClassChat::getPendingMessages((int)$Params['user_parameters']['chat_id'],(int)$Params['user_parameters']['message_id']);
	    if (count($Messages) > 0)
	    {
	        $tpl = erLhcoreClassTemplate::getInstance( 'lhchat/syncuser.tpl.php');
	        $tpl->set('messages',$Messages);
	        $tpl->set('chat',$chat);
	        $tpl->set('sync_mode',isset($Params['user_parameters_unordered']['mode']) ? $Params['user_parameters_unordered']['mode'] : '');
	        $content = $tpl->fetch();

	        foreach ($Messages as $msg) {
	        	if ($msg['user_id'] > 0) {
	        		$userOwner = 'false';
	        		break;
	        	}
	        }

	        $LastMessageIDs = array_pop($Messages);
	        $LastMessageID = $LastMessageIDs['id'];

	    }
	}

    if ( $chat->is_operator_typing == true ) {
        $is_operator_typing = 'true';
    }

    // Closed
    if ($chat->status == 2) $status = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncuser','Support closed chat window, but You can leave messages, administrator will read them later.');

} else {
    $content = 'false';
    $status = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncuser','You do not have permission to view this chat, or chat was deleted');
    $blocked = 'true';
}

echo json_encode(array('error' => 'false', 'uw' => $userOwner, 'is_typing' => $is_operator_typing, 'message_id' => $LastMessageID, 'result' => trim($content) == '' ? 'false' : trim($content), 'status' => $status, 'blocked' => $blocked ));
exit;

?>