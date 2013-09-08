<?php

header('P3P:CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"');
header("Content-type: text/javascript");

$tpl = erLhcoreClassTemplate::getInstance('lhchat/getstatus.tpl.php');

if ( erLhcoreClassModelChatConfig::fetch('track_online_visitors')->current_value == 1 ) {
    // To track online users
    $visitor = erLhcoreClassModelChatOnlineUser::handleRequest(array('pages_count' => true, 'pro_active_limitation' => erLhcoreClassModelChatConfig::fetch('pro_active_limitation')->current_value, 'pro_active_invite' => erLhcoreClassModelChatConfig::fetch('pro_active_invite')->current_value, 'identifier' => (string)$Params['user_parameters_unordered']['identifier']));

    if ( erLhcoreClassModelChatConfig::fetch('track_footprint')->current_value == 1 && isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER'])) {
    	erLhcoreClassModelChatOnlineUserFootprint::addPageView($visitor);
    }

    $tpl->set('visitor',$visitor);
}

if ( !isset($_SESSION['lhc_site_referrer']) ) {
	$_SESSION['lhc_site_referrer'] = urldecode($_GET['r']);
}

$validUnits = array('pixels' => 'px','percents' => '%');

$tpl->set('click',$Params['user_parameters_unordered']['click']);
$tpl->set('position',$Params['user_parameters_unordered']['position']);
$tpl->set('leaveamessage',(string)$Params['user_parameters_unordered']['leaveamessage'] == 'true');
$tpl->set('hide_offline',$Params['user_parameters_unordered']['hide_offline']);
$tpl->set('department',(int)$Params['user_parameters_unordered']['department'] > 0 ? (int)$Params['user_parameters_unordered']['department'] : false);
$tpl->set('check_operator_messages',$Params['user_parameters_unordered']['check_operator_messages']);
$tpl->set('top_pos',(!is_null($Params['user_parameters_unordered']['top']) && (int)$Params['user_parameters_unordered']['top'] >= 0) ? (int)$Params['user_parameters_unordered']['top'] : 350);
$tpl->set('units',key_exists((string)$Params['user_parameters_unordered']['units'], $validUnits) ? $validUnits[(string)$Params['user_parameters_unordered']['units']] : 'px');
$tpl->set('disable_pro_active',(string)$Params['user_parameters_unordered']['disable_pro_active'] == 'true');
$tpl->set('priority',is_numeric($Params['user_parameters_unordered']['priority']) ? (int)$Params['user_parameters_unordered']['priority'] : false);

echo $tpl->fetch();
exit;