<h1 class="attr-header"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','Mail conversations options')?></h1>

<form action="" method="post" ng-non-bindable>

    <?php include(erLhcoreClassDesign::designtpl('lhkernel/csfr_token.tpl.php'));?>

    <?php if (isset($updated) && $updated == 'done') : $msg = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Settings updated'); ?>
        <?php include(erLhcoreClassDesign::designtpl('lhkernel/alert_success.tpl.php'));?>
    <?php endif; ?>

    <div class="form-group">
        <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','MCE Plugins')?> <button id="mce_plugins_default" type="button" class="btn btn-xs btn-secondary"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','Set default')?></button></label>
        <textarea rows="10" class="form-control" id="mce_plugins_value" name="mce_plugins"><?php isset($mc_options['mce_plugins']) ? print htmlspecialchars($mc_options['mce_plugins']) : ''?></textarea>
    </div>

    <div class="form-group">
        <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','MCE Toolbar')?> <button id="mce_toolbar_default" type="button" class="btn btn-xs btn-secondary"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','Set default')?></button></label>
        <textarea rows="10" class="form-control" id="mce_toolbar_value" name="mce_toolbar"><?php isset($mc_options['mce_toolbar']) ? print htmlspecialchars($mc_options['mce_toolbar']) : ''?></textarea>
    </div>

    <div class="form-group">
        <label>
            <input type="checkbox" name="disable_auto_owner" value="on" <?php if (isset($mc_options['disable_auto_owner']) && ($mc_options['disable_auto_owner'] == true)) : ?>checked="checked"<?php endif;?> />
            <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','Disable becoming owner automatically on conversation open event')?>
        <p class="mb-0"><small><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','Operator will become an owner if he clicks reply button.')?></small></p>
    </div>
    
    <div class="form-group">
        <label>
            <input type="checkbox" name="skip_images" value="on" <?php if (isset($mc_options['skip_images']) && ($mc_options['skip_images'] == true)) : ?>checked="checked"<?php endif;?> />
            <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','Skip directly included images while replying to e-mail')?>
        <p class="mb-0"><small><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','Image will be replaced with Image skipped text')?></small></p>
    </div>

    <div class="form-group">
        <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','Skipped image replacement text. You can use emoji also e.g')?> &#128444;&#65039;&nbsp;<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvfile','Copy')?>&nbsp;<span class="badge badge-secondary"><?php echo htmlspecialchars('&#128444;&#65039;')?></span></label>
        <input type="text" class="form-control form-control-sm" name="image_skipped_text" value="<?php isset($mc_options['image_skipped_text']) ? print htmlspecialchars($mc_options['image_skipped_text']) : ''?>" placeholder="[img]"/>
    </div>

    <input type="submit" class="btn btn-secondary" name="StoreOptions" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Save'); ?>" />

    <script>
        $(document).ready(function() {
            $('#mce_plugins_default').click(function(){
                $('#mce_plugins_value').val("[\"advlist autolink lists link image charmap print preview anchor image lhfiles\",\n\"searchreplace visualblocks code fullscreen\",\n\"media table paste help\",\n\"print preview importcss searchreplace autolink save autosave directionality visualblocks visualchars fullscreen media codesample charmap pagebreak nonbreaking anchor toc advlist lists wordcount textpattern noneditable help charmap emoticons\"]");
            });
            $('#mce_toolbar_default').click(function(){
                $('#mce_toolbar_value').val("undo redo | fontselect formatselect fontsizeselect | table | paste pastetext | subscript superscript | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | lhtemplates lhfiles insertfile image pageembed template link anchor codesample | bullist numlist outdent indent | removeformat permanentpen | charmap emoticons | fullscreen print preview paste code | help");
            });
        });
    </script>

</form>
