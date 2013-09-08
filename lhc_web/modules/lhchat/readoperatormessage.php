<?php

header('P3P:CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"');

$tpl = erLhcoreClassTemplate::getInstance( 'lhchat/readoperatormessage.tpl.php');
$tpl->set('referer','');

$userInstance = erLhcoreClassModelChatOnlineUser::handleRequest();
$tpl->set('visitor',$userInstance);

$inputData = new stdClass();
$inputData->username = '';
$inputData->question = '';
$inputData->email = '';
$inputData->departament_id = 0;
$inputData->validate_start_chat = false;

$chat = new erLhcoreClassModelChat();

if (isset($_POST['askQuestion']))
{
    $validationFields = array();
    $validationFields['Question'] =  new ezcInputFormDefinitionElement( ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw' );

    $form = new ezcInputForm( INPUT_POST, $validationFields );
    $Errors = array();

    if ( !$form->hasValidData( 'Question' ) || trim($form->Question) == '' ) {
        $Errors[] = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Please enter your message');
    } elseif ($form->hasValidData( 'Question' )) {
        $inputData->question = $form->Question;
    }

    if ($form->hasValidData( 'Question' ) && $form->Question != '' && strlen($form->Question) > 500)
    {
        $Errors[] = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Maximum 500 characters for a message');
    }

    if (count($Errors) == 0)
    {
       $chat->time = time();
       $chat->status = 0;
       $chat->setIP();
       $chat->hash = erLhcoreClassChat::generateHash();
       $chat->referrer = isset($_POST['URLRefer']) ? $_POST['URLRefer'] : '';
       $chat->session_referrer = isset($_SESSION['lhc_site_referrer']) ? $_SESSION['lhc_site_referrer'] : '';

       $chat->nick = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Visitor');

       erLhcoreClassModelChat::detectLocation($chat);

       // Assign default department
       $departments = erLhcoreClassModelDepartament::getList();
       $ids = array_keys($departments);
       $id = array_shift($ids);
       $chat->dep_id = $id;
       $chat->priority = is_numeric($Params['user_parameters_unordered']['priority']) ? (int)$Params['user_parameters_unordered']['priority'] : $departments[$chat->dep_id]->priority;
       $chat->chat_initiator = erLhcoreClassModelChat::CHAT_INITIATOR_PROACTIVE;

       // Store chat
       erLhcoreClassChat::getSession()->save($chat);

       // Mark as user has read message from operator.
       $userInstance->message_seen = 1;
       $userInstance->chat_id = $chat->id;
       $userInstance->saveThis();

       // Store Message from operator
       $msg = new erLhcoreClassModelmsg();
       $msg->msg = trim($userInstance->operator_message);
       $msg->chat_id = $chat->id;
       $msg->name_support = $userInstance->operator_user !== false ? trim($userInstance->operator_user->name.' '.$userInstance->operator_user->surname) : (!empty($userInstance->operator_user_proactive) ? $userInstance->operator_user_proactive : erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Live Support'));
       $msg->user_id = $userInstance->operator_user_id > 0 ? $userInstance->operator_user_id : 1;
       $msg->time = time();

       erLhcoreClassChat::getSession()->save($msg);

       // Store User Message
       $msg = new erLhcoreClassModelmsg();
       $msg->msg = trim($inputData->question);
       $msg->chat_id = $chat->id;
       $msg->user_id = 0;
       $msg->time = time();
       erLhcoreClassChat::getSession()->save($msg);

       // Store hash if user reloads page etc, we show widget
       CSCacheAPC::getMem()->setSession('chat_hash_widget',$chat->id.'_'.$chat->hash);

       // Store hash for user previous chat, so user after main chat close can reopen old chat
       CSCacheAPC::getMem()->setSession('chat_hash_widget_resume',$chat->id.'_'.$chat->hash);

       // Redirect user
       erLhcoreClassModule::redirect('chat/chatwidgetchat/' . $chat->id . '/' . $chat->hash);
       exit;

    } else {
        $tpl->set('errors',$Errors);
    }
}

$tpl->set('input_data',$inputData);

if (isset($_GET['URLReferer']))
{
    $tpl->set('referer',$_GET['URLReferer']);
}

if (isset($_POST['URLRefer']))
{
    $tpl->set('referer',$_POST['URLRefer']);
}

$Result['content'] = $tpl->fetch();
$Result['pagelayout'] = 'widget';
$Result['dynamic_height'] = true;
$Result['dynamic_height_message'] = 'lhc_sizing_chat';
$Result['pagelayout_css_append'] = 'widget-chat';
