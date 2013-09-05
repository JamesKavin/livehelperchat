<?php

$Module = array( "name" => "Chatbox");

$ViewList = array();

$ViewList['list'] = array(
    'script' => 'list.php',
    'params' => array(),
	'functions' => array( 'manage_chatbox' )
);

$ViewList['delete'] = array(
		'script' => 'delete.php',
		'params' => array('id'),
		'functions' => array( 'manage_chatbox' )
);

$ViewList['syncuser'] = array(
		'script' => 'syncuser.php',
		'params' => array('chat_id','message_id','hash'),
		'uparams' => array('mode')
);

$ViewList['addmsguser'] = array(
		'script' => 'addmsguser.php',
		'params' => array('chat_id','hash'),
		'uparams' => array('mode'),
);

$ViewList['view'] = array(
		'script' => 'view.php',
		'params' => array('id'),
		'functions' => array( 'manage_chatbox' )
);

$ViewList['new'] = array(
		'script' => 'new.php',
		'params' => array('id'),
		'functions' => array( 'manage_chatbox' )
);

$ViewList['chatwidget'] = array(
		'script' => 'chatwidget.php',
		'params' => array(),
		'uparams' => array('mode','identifier','chat_height','hashchatbox'),
);

$ViewList['getstatus'] = array(
		'script' => 'getstatus.php',
		'params' => array(),
		'functions' => array(),
		'uparams' => array('position','top','units','width','height','chat_height')
);

$ViewList['embed'] = array(
		'script' => 'embed.php',
		'params' => array(),
		'uparams' => array('chat_height'),
		'functions' => array()
);

$ViewList['embedcode'] = array(
		'script' => 'embedcode.php',
		'params' => array(),
		'functions' => array('manage_chatbox')
);

$ViewList['edit'] = array(
		'script' => 'edit.php',
		'params' => array('id'),
		'functions' => array('manage_chatbox')
);

$ViewList['delete'] = array(
		'params' => array('id'),
		'uparams' => array('csfr'),
		'functions' => array('manage_chatbox')
);

$ViewList['generalsettings'] = array(
		'params' => array('id'),
		'functions' => array('manage_chatbox')
);

$ViewList['new'] = array(
		'params' => array('id'),
		'functions' => array('manage_chatbox')
);

$ViewList['htmlcode'] = array(
		'script' => 'htmlcode.php',
		'params' => array(),
		'functions' => array( 'manage_chatbox' )
);

$ViewList['chatwidgetclosed'] = array(
		'script' => 'chatwidgetclosed.php',
		'params' => array()
);

$ViewList['configuration'] = array(
		'script' => 'configuration.php',
		'params' => array()
);

$FunctionList = array();
$FunctionList['manage_chatbox'] = array('explain' => 'Allow user to manage Chatbox module');

?>