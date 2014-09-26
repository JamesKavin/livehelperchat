<h1 class="attr-header"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Pending chats list');?></h1>

<?php include(erLhcoreClassDesign::designtpl('lhchat/lists/search_panel.tpl.php')); ?>

<?php if ($pages->items_total > 0) { ?>

<form action="<?php echo $input->form_action,$inputAppend?>" method="post">

<?php include(erLhcoreClassDesign::designtpl('lhkernel/csfr_token.tpl.php'));?>

<table class="lentele" cellpadding="0" cellspacing="0" width="100%">
    <thead>
        <tr>
        	<th width="1%"><input class="mb0" type="checkbox" ng-model="check_all_items" /></th>
            <th width="1%">ID</th>
            <th><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Information');?></th>
        </tr>
    </thead>
    <?php foreach ($items as $chat) : ?>
    <tr>
    	<td><input ng-checked="check_all_items" class="mb0" type="checkbox" name="ChatID[]" value="<?php echo $chat->id?>" /></td>
        <td><?php echo $chat->id?></td>
        <td>
          <?php if ( !empty($chat->country_code) ) : ?><img src="<?php echo erLhcoreClassDesign::design('images/flags');?>/<?php echo $chat->country_code?>.png" alt="<?php echo htmlspecialchars($chat->country_name)?>" title="<?php echo htmlspecialchars($chat->country_name)?>" />&nbsp;<?php endif; ?>
          <a class="action-image icon-popup" data-title="<?php echo htmlspecialchars($chat->nick,ENT_QUOTES);?>" onclick="lhinst.startChatNewWindow('<?php echo $chat->id;?>',$(this).attr('data-title'))" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Open in a new window');?>"></a>
	      <a class="csfr-required icon-cancel-squared" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Reject chat');?>" href="<?php echo erLhcoreClassDesign::baseurl('chat/delete')?>/<?php echo $chat->id?>"></a>
	      <?php echo $chat->id;?>. <?php echo htmlspecialchars($chat->nick);?> (<?php echo date(erLhcoreClassModule::$dateDateHourFormat,$chat->time);?>) (<?php echo $chat->department;?>)
        </td>
    </tr>
    <?php endforeach; ?>
</table>

<?php include(erLhcoreClassDesign::designtpl('lhkernel/secure_links.tpl.php')); ?>

<?php if (isset($pages)) : ?>
    <?php include(erLhcoreClassDesign::designtpl('lhkernel/paginator.tpl.php')); ?>
<?php endif;?>

<input type="submit" name="doDelete" class="button small radius" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/lists/search_panel','Delete selected');?>" />

</form>

<?php } else { ?>
<p><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Empty...');?></p>
<?php } ?>
