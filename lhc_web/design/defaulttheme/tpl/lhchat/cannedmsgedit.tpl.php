<?php include(erLhcoreClassDesign::designtpl('lhchat/lists_titles/cannedmsgedit.tpl.php'));?>

<?php if (isset($errors)) : ?>
	<?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
<?php endif; ?>

<?php if (isset($updated)) : $msg = erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Updated'); ?>
	<?php include(erLhcoreClassDesign::designtpl('lhkernel/alert_success.tpl.php'));?>
<?php endif; ?>

<script>
    function confirmSave(){
        if (parseInt($('#id_DepartmentID').val()) > 0 || confirm("<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/cannedmsg','This change will be applied to all departments that use this canned message');?>")){
            return true;
        } else {
            return false;
        }
    }
</script>

<form action="<?php echo erLhcoreClassDesign::baseurl('chat/cannedmsgedit')?>/<?php echo $canned_message->id?>" method="post" onsubmit="return confirmSave()">

    <?php include(erLhcoreClassDesign::designtpl('lhchat/cannedmsgform.tpl.php'));?>
    
    <div class="btn-group" role="group" aria-label="...">
	  <input type="submit" class="btn btn-default" name="Save_action" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Save');?>"/>
      <input type="submit" class="btn btn-default" name="Update_action" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Update');?>"/>
      <input type="submit" class="btn btn-default" name="Cancel_action" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Cancel');?>"/>
	</div>

</form>
