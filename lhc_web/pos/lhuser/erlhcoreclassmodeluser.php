<?php

$def = new ezcPersistentObjectDefinition();
$def->table = "lh_users";
$def->class = "erLhcoreClassModelUser";

$def->idProperty = new ezcPersistentObjectIdProperty();
$def->idProperty->columnName = 'id';
$def->idProperty->propertyName = 'id';
$def->idProperty->generator = new ezcPersistentGeneratorDefinition(  'ezcPersistentNativeGenerator' );

$def->properties['username'] = new ezcPersistentObjectProperty();
$def->properties['username']->columnName   = 'username';
$def->properties['username']->propertyName = 'username';
$def->properties['username']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['password'] = new ezcPersistentObjectProperty();
$def->properties['password']->columnName   = 'password';
$def->properties['password']->propertyName = 'password';
$def->properties['password']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['email'] = new ezcPersistentObjectProperty();
$def->properties['email']->columnName   = 'email';
$def->properties['email']->propertyName = 'email';
$def->properties['email']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['name'] = new ezcPersistentObjectProperty();
$def->properties['name']->columnName   = 'name';
$def->properties['name']->propertyName = 'name';
$def->properties['name']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['skype'] = new ezcPersistentObjectProperty();
$def->properties['skype']->columnName   = 'skype';
$def->properties['skype']->propertyName = 'skype';
$def->properties['skype']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['xmpp_username'] = new ezcPersistentObjectProperty();
$def->properties['xmpp_username']->columnName   = 'xmpp_username';
$def->properties['xmpp_username']->propertyName = 'xmpp_username';
$def->properties['xmpp_username']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['surname'] = new ezcPersistentObjectProperty();
$def->properties['surname']->columnName   = 'surname';
$def->properties['surname']->propertyName = 'surname';
$def->properties['surname']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['job_title'] = new ezcPersistentObjectProperty();
$def->properties['job_title']->columnName   = 'job_title';
$def->properties['job_title']->propertyName = 'job_title';
$def->properties['job_title']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['disabled'] = new ezcPersistentObjectProperty();
$def->properties['disabled']->columnName   = 'disabled';
$def->properties['disabled']->propertyName = 'disabled';
$def->properties['disabled']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['hide_online'] = new ezcPersistentObjectProperty();
$def->properties['hide_online']->columnName   = 'hide_online';
$def->properties['hide_online']->propertyName = 'hide_online';
$def->properties['hide_online']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_INT;

$def->properties['all_departments'] = new ezcPersistentObjectProperty();
$def->properties['all_departments']->columnName   = 'all_departments';
$def->properties['all_departments']->propertyName = 'all_departments';
$def->properties['all_departments']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_INT;

$def->properties['invisible_mode'] = new ezcPersistentObjectProperty();
$def->properties['invisible_mode']->columnName   = 'invisible_mode';
$def->properties['invisible_mode']->propertyName = 'invisible_mode';
$def->properties['invisible_mode']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_INT;

/**
 * Receive permission request from other users/operators
 * */
$def->properties['rec_per_req'] = new ezcPersistentObjectProperty();
$def->properties['rec_per_req']->columnName   = 'rec_per_req';
$def->properties['rec_per_req']->propertyName = 'rec_per_req';
$def->properties['rec_per_req']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_INT;

$def->properties['filepath'] = new ezcPersistentObjectProperty();
$def->properties['filepath']->columnName   = 'filepath';
$def->properties['filepath']->propertyName = 'filepath';
$def->properties['filepath']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['filename'] = new ezcPersistentObjectProperty();
$def->properties['filename']->columnName   = 'filename';
$def->properties['filename']->propertyName = 'filename';
$def->properties['filename']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

$def->properties['time_zone'] = new ezcPersistentObjectProperty();
$def->properties['time_zone']->columnName   = 'time_zone';
$def->properties['time_zone']->propertyName = 'time_zone';
$def->properties['time_zone']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_STRING;

return $def;

?>