<?php $departments = erLhcoreClassDepartament::getDepartaments();
// Show only if there are more than 1 department
if (count($departments) > 1) : ?>
<label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Department');?></label>
<select name="DepartamentID">
    <?php foreach (erLhcoreClassDepartament::getDepartaments() as $departament) : ?>
        <option value="<?php echo $departament['id']?>"><?php echo $departament['name']?></option>
    <?php endforeach; ?>
</select>
<?php endif; ?> 