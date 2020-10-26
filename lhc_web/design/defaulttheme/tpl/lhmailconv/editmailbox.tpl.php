<h1><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Edit');?></h1>

<?php if (isset($updated)) : $msg = erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Updated'); ?>
    <?php include(erLhcoreClassDesign::designtpl('lhkernel/alert_success.tpl.php'));?>
<?php endif; ?>

<?php if (isset($errors)) : ?>
    <?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
<?php endif; ?>

<form action="<?php echo erLhcoreClassDesign::baseurl('mailconv/editmailbox')?>/<?php echo $item->id?>" method="post">

    <ul class="nav nav-tabs mb-3" role="tablist">
        <li role="presentation" class="nav-item"><a href="#settings" class="nav-link<?php if ($tab == '') : ?> active<?php endif;?>" aria-controls="settings" role="tab" data-toggle="tab"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Settings');?></a></li>
        <li role="presentation" class="nav-item"><a class="nav-link<?php if ($tab == 'tab_mailbox') : ?> active<?php endif;?>" href="#mailbox" aria-controls="mailbox" role="tab" data-toggle="tab" ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Mailbox');?></a></li>
        <li role="presentation" class="nav-item"><a class="nav-link<?php if ($tab == 'tab_signature') : ?> active<?php endif;?>" href="#signature" aria-controls="signature" role="tab" data-toggle="tab" ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Signature');?></a></li>
        <li role="presentation" class="nav-item"><a class="nav-link<?php if ($tab == 'tab_utilities') : ?> active<?php endif;?>" href="#utilities" aria-controls="utilities" role="tab" data-toggle="tab" ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Utilities');?></a></li>
    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane <?php if ($tab == '') : ?>active<?php endif;?>" id="settings">
            <?php include(erLhcoreClassDesign::designtpl('lhmailconv/parts/form.tpl.php'));?>

            <div class="btn-group" role="group" aria-label="...">
                <input type="submit" class="btn btn-secondary" name="Save_page" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Save');?>"/>
                <input type="submit" class="btn btn-secondary" name="Update_page" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Update');?>"/>
                <input type="submit" class="btn btn-secondary" name="Cancel_page" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Cancel');?>"/>
            </div>
        </div>

        <div role="tabpanel" class="tab-pane <?php if ($tab == 'tab_mailbox') : ?>active<?php endif;?>" id="mailbox">
            <a class="btn btn-secondary btn-sm" title="Mailboxes" href="<?php echo erLhcoreClassDesign::baseurl('mailconv/editmailbox')?>/<?php echo $item->id?>/(action)/mailbox?r=<?php echo time()?>#!#mailbox" ><i class="material-icons">sync</i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Get mailbox to sync');?></a>

            <hr>

            <div class="row">
                <div class="col-4">
                    <h5><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('mailconv/mailconvmb','Choose what mailbox you want to sync');?></h5>
                </div>
                <div class="col-4">
                    <h5><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('mailconv/mailconvmb','Choose where deleted e-mails should be moved');?></h5>
                </div>
                <div class="col-4">
                    <h5><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('mailconv/mailconvmb','Choose a send folder');?></h5>
                </div>
            </div>
            <?php foreach ($item->mailbox_sync_array as $mailbox) : ?>
            <div class="row">
                <div class="col-4">
                    <div class="form-group">
                        <label><input type="checkbox" value="<?php echo htmlspecialchars($mailbox['path'])?>" <?php if ($mailbox['sync'] == true) : ?>checked="checked"<?php endif; ?> name="Mailbox[]"> <?php echo htmlspecialchars($mailbox['path'])?></label>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label><input type="radio" value="<?php echo htmlspecialchars($mailbox['path'])?>" <?php if (isset($mailbox['sync_deleted']) && $mailbox['sync_deleted'] == true) : ?>checked="checked"<?php endif; ?> name="MailboxDeleted"> <?php echo htmlspecialchars($mailbox['path'])?></label>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label><input type="radio" value="<?php echo htmlspecialchars($mailbox['path'])?>" <?php if (isset($mailbox['send_folder']) && $mailbox['send_folder'] == true) : ?>checked="checked"<?php endif; ?> name="MailboxSend"> <?php echo htmlspecialchars($mailbox['path'])?></label>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>

            <div class="btn-group" role="group" aria-label="...">
                <input type="submit" class="btn btn-secondary" name="Save_mailbox" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Update');?>"/>
            </div>

        </div>

        <div role="tabpanel" class="tab-pane <?php if ($tab == 'tab_utilities') : ?>active<?php endif;?>" id="utilities">
            <a class="btn btn-secondary btn-sm" title="Sync messages" href="<?php echo erLhcoreClassDesign::baseurl('mailconv/editmailbox')?>/<?php echo $item->id?>/(action)/sync?r=<?php echo time()?>#!#utilities" ><i class="material-icons">sync</i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Check for a new messages');?></a>

            <ul>
                <li><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Last sync finished');?> - <?php echo $item->last_sync_time_ago?> <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','ago');?>.</li>
                <li><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Last sync started');?> - <?php echo $item->sync_started_ago?> <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','ago');?>.</li>
            </ul>


            <h5 class="mt-4"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Sync log');?></h5>
            <pre><?php echo htmlspecialchars(print_r($item->last_sync_log_array,true))?></pre>

        </div>

        <div role="tabpanel" class="tab-pane <?php if ($tab == 'tab_signature') : ?>active<?php endif;?>" id="signature">

            <div class="form-group">
                <label><input type="checkbox" name="signature_under" value="on" <?php $item->signature_under == 1 ? print ' checked="checked" ' : ''?> > <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Put signature directly under reply');?></label>
            </div>
            
            <div class="form-group">
                <textarea name="signature" id="signature-editor" rows="10" class="form-control form-control-sm"><?php echo htmlspecialchars($item->signature)?></textarea>
                <script>
                    $(document).ready(function(){
                        tinymce.init({
                            selector: '#signature-editor',
                            height: 320,
                            automatic_uploads: true,
                            file_picker_types: 'image',
                            images_upload_url: '<?php echo erLhcoreClassDesign::baseurl('mailconv/uploadimage')?>',
                            paste_data_images: true,
                            relative_urls : false,
                            browser_spellcheck: true,
                            paste_as_text: true,
                            contextmenu: false,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor image lhfiles',
                                'searchreplace visualblocks code fullscreen',
                                'media table paste help',
                                'print preview importcss searchreplace autolink save autosave directionality visualblocks visualchars fullscreen media template codesample charmap pagebreak nonbreaking anchor toc advlist lists wordcount textpattern noneditable help charmap emoticons'
                            ],
                            toolbar_mode: 'wrap',
                            toolbar:
                                'undo redo | fontselect formatselect fontsizeselect | table | paste pastetext | subscript superscript | bold italic underline strikethrough | forecolor backcolor | \
                                alignleft aligncenter alignright alignjustify | lhfiles insertfile image pageembed template link anchor codesample | \
                                bullist numlist outdent indent | removeformat permanentpen | charmap emoticons | fullscreen print preview paste code | help'
                        });
                    });
                </script>
                <p><small><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Supported replaceable variable.');?> {operator}, {department}</small></p>
            </div>

            <div class="btn-group" role="group" aria-label="...">
                <input type="submit" class="btn btn-secondary" name="Save_page" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Save');?>"/>
                <input type="submit" class="btn btn-secondary" name="UpdateSignature_page" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Update');?>"/>
                <input type="submit" class="btn btn-secondary" name="Cancel_page" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/buttons','Cancel');?>"/>
            </div>

        </div>

    </div>

</form>