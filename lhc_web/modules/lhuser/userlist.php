<?php

$tpl = erLhcoreClassTemplate::getInstance( 'lhuser/userlist.tpl.php');

if (isset($_GET['doSearch'])) {
    $filterParams = erLhcoreClassSearchHandler::getParams(array('module' => 'user','module_file' => 'user_list','format_filter' => true, 'use_override' => true, 'uparams' => $Params['user_parameters_unordered']));
    $filterParams['is_search'] = true;
} else {
    $filterParams = erLhcoreClassSearchHandler::getParams(array('module' => 'user','module_file' => 'user_list','format_filter' => true, 'uparams' => $Params['user_parameters_unordered']));
    $filterParams['is_search'] = false;
}

$append = erLhcoreClassSearchHandler::getURLAppendFromInput($filterParams['input_form']);

erLhcoreClassChatStatistic::formatUserFilter($filterParams, 'lh_users', 'id');

if (isset($filterParams['filter']['filtergte']['`p1`.`ctime`']) || isset($filterParams['filter']['filterlte']['`p1`.`ctime`'])) {
    $filterParams['filter']['innerjoin'] = array('lh_users_login as p1' => array('`p1`.`user_id`', '`lh_users`.`id`'));
    $filterParams['filter']['leftouterjoin'] = array('lh_users_login as p2' => '(`p2`.`user_id` = `lh_users`.`id` AND p1.id < p2.id)');
    $filterParams['filter']['customfilter'][] = 'p2.id IS NULL';
}

if ($Params['user_parameters_unordered']['export'] == 1) {
    erLhcoreClassChatExport::exportUsers(erLhcoreClassModelUser::getUserList(array_merge($filterParams['filter'],array('limit' => false,'sort' => 'id DESC'))));
}

$pages = new lhPaginator();
$pages->serverURL = erLhcoreClassDesign::baseurl('user/userlist') . $append;
$pages->items_total = erLhcoreClassModelUser::getUserCount($filterParams['filter']);
$pages->setItemsPerPage(20);
$pages->paginate();

$userlist = erLhcoreClassModelUser::getUserList(array_merge($filterParams['filter'],array('offset' => $pages->low, 'limit' => $pages->items_per_page,'sort' => 'id DESC')));

$tpl->set('userlist',$userlist);
$tpl->set('pages',$pages);
$tpl->set('currentUser',$currentUser);

$filterParams['input_form']->form_action = erLhcoreClassDesign::baseurl('user/userlist');
$tpl->set('input',$filterParams['input_form']);

$Result['content'] = $tpl->fetch();

$Result['path'] = array(
array('url' => erLhcoreClassDesign::baseurl('system/configuration'),'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('user/userlist','System configuration')),
array('title' => erTranslationClassLhTranslation::getInstance()->getTranslation('user/userlist','Users')));

erLhcoreClassChatEventDispatcher::getInstance()->dispatch('user.userlist_path',array('result' => & $Result));

?>