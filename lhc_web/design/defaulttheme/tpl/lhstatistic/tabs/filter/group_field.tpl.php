<option value="nick" <?php $input->group_field == '' || $input->group_field == 'nick' ? print 'selected="selected"' : '' ?>>Nick</option>
<option value="uagent" <?php $input->group_field == 'uagent' ? print 'selected="selected"' : '' ?>>User Agent</option>
<option value="device_type" <?php $input->group_field == 'device_type' ? print 'selected="selected"' : '' ?>>Device type</option>
<option value="department" <?php $input->group_field == 'department' ? print 'selected="selected"' : '' ?>>Department</option>
<option value="user_id" <?php $input->group_field == 'user_id' ? print 'selected="selected"' : '' ?>>Operator</option>