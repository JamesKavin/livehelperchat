<?php

$tpl = erLhcoreClassTemplate::getInstance( 'lhchat/lists.tpl.php');

if ( isset($_POST['doDelete']) ) {
	if (!isset($_POST['csfr_token']) || !$currentUser->validateCSFRToken($_POST['csfr_token'])) {
		erLhcoreClassModule::redirect('chat/list');
		exit;
	}

	$definition = array(
		'ChatID' => new ezcInputFormDefinitionElement(
				ezcInputFormDefinitionElement::OPTIONAL, 'int', null, FILTER_REQUIRE_ARRAY
		),
	);

	$form = new ezcInputForm( INPUT_POST, $definition );
	$Errors = array();

	if ( $form->hasValidData( 'ChatID' ) && !empty($form->ChatID) ) {
		$chats = erLhcoreClassChat::getList(array('filterin' => array('id' => $form->ChatID)));
		foreach ($chats as $chatToDelete) {
			if (erLhcoreClassChat::hasAccessToWrite($chatToDelete) && ($currentUser->hasAccessTo('lhchat','deleteglobalchat') || ($currentUser->hasAccessTo('lhchat','deletechat') && $chatToDelete->user_id == $currentUser->getUserID())))
			{
				$chatToDelete->removeThis();
			}
		}
	}
}

if ( isset($_POST['doClose']) ) {
	if (!isset($_POST['csfr_token']) || !$currentUser->validateCSFRToken($_POST['csfr_token'])) {
		erLhcoreClassModule::redirect('chat/list');
		exit;
	}

	$definition = array(
		'ChatID' => new ezcInputFormDefinitionElement(
				ezcInputFormDefinitionElement::OPTIONAL, 'int', null, FILTER_REQUIRE_ARRAY
		),
	);

	$form = new ezcInputForm( INPUT_POST, $definition );
	$Errors = array();

	if ( $form->hasValidData( 'ChatID' ) && !empty($form->ChatID) ) {
		$chats = erLhcoreClassChat::getList(array('filterin' => array('id' => $form->ChatID)));
        $userData = $currentUser->getUserData(true);

		foreach ($chats as $chatToClose) {
            if (($chatToClose->user_id == $currentUser->getUserID() || $currentUser->hasAccessTo('lhchat','allowcloseremote')) && erLhcoreClassChat::hasAccessToWrite($chatToClose))
            {
                erLhcoreClassChatHelper::closeChat(array(
                    'user' => $userData,
                    'chat' => $chatToClose,
                ));
            }
		}
	}
}

if (isset($_GET['doSearch'])) {
	$filterParams = erLhcoreClassSearchHandler::getParams(array('module' => 'chat','module_file' => 'chat_search','format_filter' => true, 'use_override' => true, 'uparams' => $Params['user_parameters_unordered']));
	$filterParams['is_search'] = true;
} else {
	$filterParams = erLhcoreClassSearchHandler::getParams(array('module' => 'chat','module_file' => 'chat_search','format_filter' => true, 'uparams' => $Params['user_parameters_unordered']));
	$filterParams['is_search'] = false;
}

erLhcoreClassChatStatistic::formatUserFilter($filterParams);

if ($filterParams['input_form']->subject_id > 0){
    $filterParams['filter']['innerjoin']['lh_abstract_subject_chat'] = array('`lh_abstract_subject_chat`.`chat_id`','`lh_chat` . `id`');
    $filterParams['filter']['filter']['`lh_abstract_subject_chat`.`subject_id`'] = $filterParams['input_form']->subject_id;
}


/**
 * Departments filter
 * */
$limitation = erLhcoreClassChat::getDepartmentLimitation();

if ($limitation !== false) {
    if ($limitation !== true) {
        $filterParams['filter']['customfilter'][] = $limitation;
    }
}

erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_filter',array('filter' => & $filterParams, 'uparams' => $Params['user_parameters_unordered']));

if ($Params['user_parameters_unordered']['print'] == 1) {
	$tpl = erLhcoreClassTemplate::getInstance('lhchat/printchats.tpl.php');
	$items = erLhcoreClassChat::getList(array_merge($filterParams['filter'],array('limit' => 100000,'offset' => 0)));
	$tpl->set('items',$items);
	$Result['content'] = $tpl->fetch();
	$Result['pagelayout'] = 'popup';
	return;
}

if (isset($Params['user_parameters_unordered']['export']) && $Params['user_parameters_unordered']['export'] == 1) {
    if (ezcInputForm::hasPostData()) {
        session_write_close();
        $ignoreFields = (new erLhcoreClassModelChat)->getState();
        unset($ignoreFields['id']);
        $ignoreFields = array_keys($ignoreFields);
        erLhcoreClassChatExport::chatListExportXLS(erLhcoreClassModelChat::getList(array_merge($filterParams['filter'], array('limit' => 100000, 'offset' => 0, 'ignore_fields' => $ignoreFields))), array('csv' => isset($_POST['CSV']), 'type' => (isset($_POST['exportOptions']) ? $_POST['exportOptions'] : [])));
        exit;
    } else {
        $tpl = erLhcoreClassTemplate::getInstance('lhchat/export_config.tpl.php');
        $tpl->set('action_url', erLhcoreClassDesign::baseurl('chat/list') . erLhcoreClassSearchHandler::getURLAppendFromInput($filterParams['input_form']));
        echo $tpl->fetch();
        exit;
    }
}

if (isset($Params['user_parameters_unordered']['export']) && $Params['user_parameters_unordered']['export'] == 2) {

    $savedSearch = new erLhAbstractModelSavedSearch();

    if ($Params['user_parameters_unordered']['view'] > 0) {
        $savedSearchPresent = erLhAbstractModelSavedSearch::fetch($Params['user_parameters_unordered']['view']);
        if ($savedSearchPresent->user_id == $currentUser->getUserID()) {
            $savedSearch = $savedSearchPresent;
        }
    }

    $tpl = erLhcoreClassTemplate::getInstance('lhviews/save_chat_view.tpl.php');
    $tpl->set('action_url', erLhcoreClassDesign::baseurl('chat/list') . erLhcoreClassSearchHandler::getURLAppendFromInput($filterParams['input_form']));
    if (ezcInputForm::hasPostData()) {

        $Errors = erLhcoreClassAdminChatValidatorHelper::validateSavedSearch($savedSearch, array('filter' => $filterParams['filter'], 'input_form' => $filterParams['input_form']));

        if (!isset($_SERVER['HTTP_X_CSRFTOKEN']) || !$currentUser->validateCSFRToken($_SERVER['HTTP_X_CSRFTOKEN'])) {
            $Errors[] = 'Invalid CSRF token!';
        }

        if (empty($Errors)) {
            $savedSearch->user_id = $currentUser->getUserID();
            $savedSearch->scope = 'chat';
            $savedSearch->saveThis();
            $tpl->set('updated', true);
        } else {
            $tpl->set('errors', $Errors);
        }
    }
    $tpl->set('item', $savedSearch);
    echo $tpl->fetch();
    exit;
}

$append = erLhcoreClassSearchHandler::getURLAppendFromInput($filterParams['input_form']);

$rowsNumber = null;

if (empty($filterParams['filter'])) {
    $rowsNumber = ($rowsNumber = erLhcoreClassModelChat::estimateRows()) && $rowsNumber > 10000 ? $rowsNumber : null;
}

$pages = new lhPaginator();
$pages->items_total = is_numeric($rowsNumber) ? $rowsNumber : erLhcoreClassModelChat::getCount($filterParams['filter']);
$pages->translationContext = 'chat/pendingchats';
$pages->serverURL = erLhcoreClassDesign::baseurl('chat/list').$append;
$pages->paginate();
$tpl->set('pages',$pages);

if ($pages->items_total > 0) {
	$items = erLhcoreClassModelChat::getList(array_merge($filterParams['filter'],array('limit' => $pages->items_per_page,'offset' => $pages->low)));
    erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_items',array('filter' => & $items, 'uparams' => $Params['user_parameters_unordered']));
	$tpl->set('items',$items);
}

$filterParams['input_form']->form_action = erLhcoreClassDesign::baseurl('chat/list');
$tpl->set('input',$filterParams['input_form']);
$tpl->set('inputAppend',$append);
$tpl->set('can_delete_global',$currentUser->hasAccessTo('lhchat','deleteglobalchat'));
$tpl->set('can_delete_general',$currentUser->hasAccessTo('lhchat','deletechat'));
$tpl->set('can_close_global',$currentUser->hasAccessTo('lhchat','allowcloseremote'));
$tpl->set('current_user_id',$currentUser->getUserID());

$Result['content'] = $tpl->fetch();
$Result['body_class'] = 'h-100 dashboard-height';

/*$Result['path'] = array(
array('url' =>erLhcoreClassDesign::baseurl('chat/list'), 'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Chats list'))
);*/

erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.list_path',array('result' => & $Result));
?>
