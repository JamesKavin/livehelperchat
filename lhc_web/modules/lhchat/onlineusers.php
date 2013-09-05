<?php

$tpl = erLhcoreClassTemplate::getInstance( 'lhchat/onlineusers.tpl.php');

if (is_numeric($Params['user_parameters_unordered']['clear_list']) && $Params['user_parameters_unordered']['clear_list'] == 1) {

	if (!$currentUser->validateCSFRToken($Params['user_parameters_unordered']['csfr'])) {
		die('Invalid CSFR Token');
		exit;
	}

    erLhcoreClassModelChatOnlineUser::cleanAllRecords();

    erLhcoreClassModule::redirect('chat/onlineusers');
    exit;
}

if (is_numeric($Params['user_parameters_unordered']['deletevisitor']) && $Params['user_parameters_unordered']['deletevisitor'] > 0) {

	try {
		$visitor = erLhcoreClassModelChatOnlineUser::fetch($Params['user_parameters_unordered']['deletevisitor']);
		$visitor->removeThis();
	} catch (Exception $e) {

	}

    erLhcoreClassModule::redirect('chat/onlineusers');
    exit;
}

$is_ajax = isset($Params['user_parameters_unordered']['method']) && $Params['user_parameters_unordered']['method'] == 'ajax';
$timeout = isset($Params['user_parameters_unordered']['timeout']) && is_numeric($Params['user_parameters_unordered']['timeout']) ? (int)$Params['user_parameters_unordered']['timeout'] : 30;

$items = erLhcoreClassModelChatOnlineUser::getList(array('offset' => 0, 'limit' => 50, 'sort' => 'last_visit DESC','filtergt' => array('last_visit' => (time()-$timeout))));
$tpl->set('items',$items);
$tpl->set('is_ajax',$is_ajax);
$tpl->set('tracking_enabled',erLhcoreClassModelChatConfig::fetch('track_online_visitors')->current_value == 1);

if ($is_ajax == false){
    $Result['content'] = $tpl->fetch();
    $Result['path'] = array(
    array('title' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Online visitors')));
} else {
    echo json_encode(array('result' => $tpl->fetch()));
    exit;
}

?>