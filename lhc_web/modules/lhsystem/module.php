<?php

$Module = array( "name" => "System configuration");

$ViewList = array();

$ViewList['htmlcode'] = array(
    'script' => 'htmlcode.php',
    'params' => array(),
    'functions' => array( 'generatejs' )
);

$ViewList['embedcode'] = array(
    'script' => 'embedcode.php',
    'params' => array(),
    'functions' => array( 'generatejs' )
);

$ViewList['configuration'] = array(
    'script' => 'configuration.php',
    'params' => array(),
    'functions' => array( 'use' )
);

$ViewList['expirecache'] = array(
    'script' => 'expirecache.php',
    'params' => array(),
    'functions' => array( 'expirecache' )
);

$ViewList['smtp'] = array(
    'script' => 'smtp.php',
    'params' => array(),
    'functions' => array( 'configuresmtp' )
);

$FunctionList['use'] = array('explain' => 'Allow user to see configuration links');
$FunctionList['expirecache'] = array('explain' => 'Allow user to clear cache');
$FunctionList['generatejs'] = array('explain' => 'Allow user to access HTML generation');
$FunctionList['configuresmtp'] = array('explain' => 'Allow user to configure SMTP');

?>