<?php

$tpl = erLhcoreClassTemplate::getInstance('lhchat/startchatwithoperator.tpl.php');

$user = erLhcoreClassModelUser::fetch((int)$Params['user_parameters']['user_id']);
$currentUser = erLhcoreClassUser::instance();

$msg = new erLhcoreClassModelmsg();

$tpl->set('user',$user);

if ( isset($_POST['SendMessage']) ) {

    $validationFields = array();
    $validationFields['Message'] =  new ezcInputFormDefinitionElement( ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw' );

    $form = new ezcInputForm( INPUT_POST, $validationFields );
    $Errors = array();

    if ( !$form->hasValidData( 'Message' ) || $form->Message == '' ) {
        $Errors[] = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Please enter your message');
    } elseif ($form->hasValidData( 'Message' )) {
        $msg->msg = $form->Message;
    }

    if ($form->hasValidData( 'Message' ) && $form->Message != '' && strlen($form->Message) > 500) {
        $Errors[] = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Maximum 500 characters for message');
    }

    if (count($Errors) == 0) {

    	$currentUserData = $currentUser->getUserData();

    	$chat = new erLhcoreClassModelChat();
    	$chat->time = time();
    	$chat->status = erLhcoreClassModelChat::STATUS_OPERATORS_CHAT;
    	$chat->setIP();
    	$chat->hash = erLhcoreClassChat::generateHash();
    	$chat->referrer = '';
    	$chat->session_referrer = isset($_SESSION['lhc_site_referrer']) ? $_SESSION['lhc_site_referrer'] : '';
    	$chat->nick = $currentUserData->name.' '.$currentUserData->surname;
    	$chat->user_id = $user->id; // Assign chat to receiver operator, this way he will get permission to open chat
    	$chat->dep_id = erLhcoreClassUserDep::getDefaultUserDepartment(); // Set default department to chat creator, this way current user will get permission to open it

    	// Store chat
    	erLhcoreClassChat::getSession()->save($chat);

    	// Store User Message
    	$msg->chat_id = $chat->id;
    	$msg->user_id = $currentUser->getUserID();
    	$msg->time = time();
    	$msg->name_support = $currentUserData->name.' '.$currentUserData->surname;
    	erLhcoreClassChat::getSession()->save($msg);

    	$transfer = new erLhcoreClassModelTransfer();
    	$transfer->chat_id = $chat->id;

    	$transfer->from_dep_id = $chat->dep_id;

    	// User which is transfering
    	$transfer->transfer_user_id = $currentUser->getUserID();

    	// To what user
    	$transfer->transfer_to_user_id = $user->id;

    	erLhcoreClassTransfer::getSession()->save($transfer);

    	// Redirect user
    	erLhcoreClassModule::redirect('chat/single/' . $chat->id);
    	exit;

    } else {
        $tpl->set('errors',$Errors);
    }
}

$Result['content'] = $tpl->fetch();
$Result['pagelayout'] = 'popup';
?>