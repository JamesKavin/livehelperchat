<?php

$tpl = erLhcoreClassTemplate::getInstance( 'lhuser/new.tpl.php');

$UserData = new erLhcoreClassModelUser();
$UserDepartaments = isset($_POST['UserDepartament']) ? $_POST['UserDepartament'] : array();

if (isset($_POST['Update_account']))
{
   $definition = array(
        'Password' => new ezcInputFormDefinitionElement(
            ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
        ),
        'Password1' => new ezcInputFormDefinitionElement(
            ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
        ),
        'Email' => new ezcInputFormDefinitionElement(
            ezcInputFormDefinitionElement::OPTIONAL, 'validate_email'
        ),
        'Name' => new ezcInputFormDefinitionElement(
            ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
        ),
        'Surname' => new ezcInputFormDefinitionElement(
            ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
        ),
        'Username' => new ezcInputFormDefinitionElement(
            ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
        ),
		'UserDisabled' => new ezcInputFormDefinitionElement(
				ezcInputFormDefinitionElement::OPTIONAL, 'boolean'
		),
		'HideMyStatus' => new ezcInputFormDefinitionElement(
				ezcInputFormDefinitionElement::OPTIONAL, 'boolean'
		),
		'DefaultGroup' => new ezcInputFormDefinitionElement(
				ezcInputFormDefinitionElement::OPTIONAL, 'int',
				null,
				FILTER_REQUIRE_ARRAY
		)
    );

    if (!isset($_POST['csfr_token']) || !$currentUser->validateCSFRToken($_POST['csfr_token'])) {
   		erLhcoreClassModule::redirect('user/new');
   		exit;
    }

    $form = new ezcInputForm( INPUT_POST, $definition );
    $Errors = array();

    if ( !$form->hasValidData( 'Email' ) )
    {
        $Errors[] =  erTranslationClassLhTranslation::getInstance()->getTranslation('user/new','Wrong email address');
    }

    if ( !$form->hasValidData( 'Name' ) || $form->Name == '' )
    {
        $Errors[] =  erTranslationClassLhTranslation::getInstance()->getTranslation('user/new','Please enter a name');
    }

	if ( $form->hasValidData( 'Surname' ) && $form->Surname != '')
    {
        $UserData->surname = $form->Surname;
    } else {
    	$UserData->surname = '';
    }

    if ( !$form->hasValidData( 'Username' ) || $form->Username == '')
    {
        $Errors[] =  erTranslationClassLhTranslation::getInstance()->getTranslation('user/new','Please enter a username');
    }

    if ( $form->hasValidData( 'Username' ) && $form->Username != '' && erLhcoreClassModelUser::userExists($form->Username) === true )
    {
        $Errors[] =  erTranslationClassLhTranslation::getInstance()->getTranslation('user/new','User exists');
    }

    if ( !$form->hasValidData( 'Password' ) || !$form->hasValidData( 'Password1' ) || $form->Password == '' || $form->Password1 == '' || $form->Password != $form->Password1    ) // check for optional field
    {
        $Errors[] =  erTranslationClassLhTranslation::getInstance()->getTranslation('user/new','Passwords mismatch');
    }

    if ( $form->hasValidData( 'DefaultGroup' ) ) {
    	$UserData->user_groups_id = $form->DefaultGroup;
    } else {
    	$Errors[] =  erTranslationClassLhTranslation::getInstance()->getTranslation('user/new','Please choose a default user group');
    }

    if ( $form->hasValidData( 'UserDisabled' ) && $form->UserDisabled == true )
    {
    	$UserData->disabled = 1;
    } else {
    	$UserData->disabled = 0;
    }

    if ( $form->hasValidData( 'HideMyStatus' ) && $form->HideMyStatus == true )
    {
    	$UserData->hide_online = 1;
    } else {
    	$UserData->hide_online = 0;
    }

    if (count($Errors) == 0)
    {
        $UserData->setPassword($form->Password);
        $UserData->email   = $form->Email;
        $UserData->name    = $form->Name;
        $UserData->username = $form->Username;

        $globalDepartament = array();
        if (isset($_POST['all_departments']) && $_POST['all_departments'] == 'on') {
           $UserData->all_departments = 1;
           $globalDepartament[] = 0;
        } else {
           $UserData->all_departments = 0;
        }

        erLhcoreClassUser::getSession()->save($UserData);

        if (isset($_POST['UserDepartament']) && count($_POST['UserDepartament']) > 0)
        {
           $globalDepartament = array_merge($_POST['UserDepartament'],$globalDepartament);
        }

        if (count($globalDepartament) > 0)
        {
           erLhcoreClassUserDep::addUserDepartaments($globalDepartament,$UserData->id,$UserData);
        }

        erLhcoreClassModelGroupUser::removeUserFromGroups($UserData->id);

        foreach ($UserData->user_groups_id as $group_id) {
        	$groupUser = new erLhcoreClassModelGroupUser();
        	$groupUser->group_id = $group_id;
        	$groupUser->user_id = $UserData->id;
        	$groupUser->saveThis();
        }

        erLhcoreClassModule::redirect('user/userlist');
        exit;

    }  else {

        if ( $form->hasValidData( 'Email' ) )
        {
            $UserData->email = $form->Email;
        }

        $UserData->name = $form->Name;
        $UserData->surname = $form->Surname;
        $UserData->username = $form->Username;

        $tpl->set('errors',$Errors);
    }
}


$tpl->set('user',$UserData);
$tpl->set('userdepartaments',$UserDepartaments);

$Result['content'] = $tpl->fetch();

$Result['path'] = array(
array('url' => erLhcoreClassDesign::baseurl('system/configuration'),'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('user/new','System configuration')),

array('url' => erLhcoreClassDesign::baseurl('user/userlist'),'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('user/new','Users')),

array('title' => erTranslationClassLhTranslation::getInstance()->getTranslation('user/new','New user'))

)

?>