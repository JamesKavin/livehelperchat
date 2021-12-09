<form action="" method="post" enctype="multipart/form-data">

    <?php if (isset($errors)) : ?>
        <?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
    <?php endif; ?>

    <?php if (isset($update)) : ?>
        <div role="alert" class="alert alert-success alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <ul>
                <li><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('canned/import','Updated');?> - <?php echo $update['updated']?></li>
                <li><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('canned/import','Imported');?> - <?php echo $update['imported']?></li>
                <li><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('canned/import','Removed');?> - <?php echo $update['removed']?></li>
            </ul>
        </div>
    <?php endif; ?>

    <?php if (isset($update)) : ?>
        <script>
            setTimeout(function(){
                window.parent.location.reload();
            },1500);
        </script>
    <?php endif;?>

    <div class="form-group">
        <label>CSV</label>
        <input type="file" name="files" />
    </div>

    <p><small><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('canned/import','First row in CSV is skipped. Columns order');?> - </small><span class="badge badge-secondary mr-2">email</span><span class="badge badge-secondary mr-2">name</span><span class="badge badge-secondary mr-2">attr_str_1</span><span class="mr-2 badge badge-secondary">attr_str_2</span><span class="badge badge-secondary">attr_str_3</span></p>

    <div class="form-group">
        <label><input type="checkbox" name="remove_old" value="on" <?php if (isset($remove_old) && $remove_old == true) : ?>checked="checked"<?php endif;?> > <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('canned/import','Remove old records');?></label>
        <br/><small><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('canned/import','If you do not check we will try to update existing records without removing all records.');?></small>
    </div>

    <hr>

    <div class="form-group">
        <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','This recipient is a member of these mailing lists');?></label>
        <div class="row" style="max-height: 500px; overflow: auto">
            <?php
            $params = array (
                'input_name'     => 'ml[]',
                'display_name'   => 'name',
                'css_class'      => 'form-control',
                'multiple'       => true,
                'wrap_prepend'   => '<div class="col-4">',
                'wrap_append'    => '</div>',
                'selected_id'    => $item->ml_ids_front,
                'list_function'  => 'erLhcoreClassModelMailconvMailingList::getList',
                'list_function_params'  => array('sort' => 'name ASC, id ASC', 'limit' => false)
            );
            echo erLhcoreClassRenderHelper::renderCheckbox( $params );
            ?>
        </div>
    </div>

    <input type="submit" class="btn btn-sm btn-secondary" name="UploadFileAction" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('canned/import','Import');?>" />
</form>