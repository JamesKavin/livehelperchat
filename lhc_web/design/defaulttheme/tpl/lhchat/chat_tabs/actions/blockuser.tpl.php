<?php include(erLhcoreClassDesign::designtpl('lhchat/chat_tabs/actions/blockuser_pre.tpl.php'));?>	
<?php if ($chat_chat_tabs_actions_blockuser_enabled == true) : ?>
<a class="material-icons mr-0" onclick="lhc.revealModal({'url':WWW_DIR_JAVASCRIPT +'chat/blockuser/<?php echo $chat->id?>'})" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Block visitor')?>">block</a>
<?php endif;?>