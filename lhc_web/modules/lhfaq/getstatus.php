<?php

header('P3P: CP="NOI ADM DEV COM NAV OUR STP"');
header("Content-type: text/javascript");

$validUnits = array('pixels' => 'px','percents' => '%');

$tpl = erLhcoreClassTemplate::getInstance('lhfaq/getstatus.tpl.php');
$tpl->set('position',$Params['user_parameters_unordered']['position']);
$tpl->set('top_pos',(!is_null($Params['user_parameters_unordered']['top']) && (int)$Params['user_parameters_unordered']['top'] >= 0) ? (int)$Params['user_parameters_unordered']['top'] : 450);
$tpl->set('units',key_exists((string)$Params['user_parameters_unordered']['units'], $validUnits) ? $validUnits[(string)$Params['user_parameters_unordered']['units']] : 'px');

echo $tpl->fetch();
exit;