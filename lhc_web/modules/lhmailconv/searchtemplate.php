<?php

$keyword = rawurldecode($_GET['q']);

$session = erLhcoreClassMailconv::getSession();
$q = $session->createFindQuery('erLhcoreClassModelMailconvResponseTemplate');

$filter = array();
$items = array();

// No chosen department means all
// Or the one
$filter[] = $q->expr->lOr(
     $q->expr->eq('dep_id', $q->bindValue(0)),
    'id IN (SELECT template_id FROM lhc_mailconv_response_template_dep WHERE dep_id = ' . (int) $Params['user_parameters']['id'] . ')'
);

if ($keyword != '') {
    $filter[] = $q->expr->lOr(
        $q->expr->like('name', $q->bindValue('%' . $keyword . '%')),
        $q->expr->like('template_plain', $q->bindValue('%' . $keyword . '%'))
    );
}

$q->where($filter);

$q->limit(10, 0);
$q->orderBy('name ASC');
$items = $session->find($q);

$tpl = erLhcoreClassTemplate::getInstance('lhmailconv/searchtemplate.tpl.php');
$tpl->set('items', $items);

echo $tpl->fetch();
exit;

?>