<?php include(erLhcoreClassDesign::designtpl('lhchat/onlineusers/section_online_users_pre.tpl.php')); ?>
<?php if ($chat_onlineusers_section_online_users_enabled == true && $currentUser->hasAccessTo('lhchat', 'use_onlineusers') == true) : ?>
<div class="row">
	<div class="col-sm-2 form-group col-6">
		<label id="online-users-count" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','online users');?>"></label>
		
		<div class="float-end">
        <?php include(erLhcoreClassDesign::designtpl('lhchat/onlineusers/online_settings.tpl.php')); ?>
            <li class="li-icon list-inline-item">
                <a href="#" onclick="ee.emitEvent('svelteOnlineUserSetting',['showConnected'])">
                    <i class="material-icons" id="svelte-showConnected" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Show only connected');?>"></i>
                </a>
            </li>
            <li class="li-icon list-inline-item">
                <a href="#" onclick="return lhc.revealModal({'url':WWW_DIR_JAVASCRIPT +'chat/sendmassmessage'})">
                    <i class="material-icons" >send</i>
                </a>
            </li>
	    </div>

	</div>
	<div class="col-2 pe-0">
		<input class="form-control form-control-sm" onkeyup="ee.emitEvent('svelteOnlineUserSetting',['setQuery',this.value])" <?php if (isset($_GET['search'])) :?>ng-init='query=<?php echo json_encode(strip_tags($_GET['search']),JSON_HEX_APOS);?>'<?php endif?> ng-model="query" type="text" value="" placeholder="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/lists/search_panel','Type to search')?>">
	</div>
	<div class="col-1 pe-0">
		<select class="form-control form-control-sm" id="svelte-groupByField" onchange="ee.emitEvent('svelteOnlineUserSetting',['groupBy',this.value])" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Group list by');?>">
		    	<option value="none"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Group by');?></option>
		    	<option value="user_country_name"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','User country');?></option>
		    	<option value="current_page"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Page');?></option>
		    	<option value="page_title"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Page title');?></option>
		    	<option value="referrer"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Referrer');?></option>
		    	<option value="identifier"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Identifier');?></option>
		    	<option value="dep_id"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Department');?></option>
		</select>
	</div>
	<div class="col-2 pe-0">
        <?php $dwFilters = json_decode(erLhcoreClassModelUserSetting::getSetting('dw_filters', '{}', false, false, true),true); ?>
        <?php echo erLhcoreClassRenderHelper::renderMultiDropdown( array (
            'input_name'     => 'department_ids[]',
            'optional_field' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/lists/search_panel','Choose department'),
            'selected_id'    => (isset($dwFilters['department_online']) ? explode('/',$dwFilters['department_online']) : []),
            'wrapper_class'  => 'online-department-filter',
            'ajax'           => 'deps',
            'css_class'      => 'form-control',
            'display_name'   => 'name',
            'list_function_params' => array_merge(['sort' => '`name` ASC', 'limit' => 50],erLhcoreClassUserDep::conditionalDepartmentFilter()),
            'list_function'  => 'erLhcoreClassModelDepartament::getList'
        )); ?>
	</div>

    <?php $columnCountrySize = 1?>
    <?php include(erLhcoreClassDesign::designtpl('lhchat/onlineusers/country_filter.tpl.php')); ?>

    <?php
        $columnCountrySize = 1;
        $prSet = ' pe-0';
    ?>
    <?php include(erLhcoreClassDesign::designtpl('lhchat/onlineusers/time_on_site_filter.tpl.php')); ?>

	<div class="col-1 pe-0">
		<select class="form-control form-control-sm" id="svelte-updateTimeoutFilter" onchange="ee.emitEvent('svelteOnlineUserSetting',['updateTimeoutFilter',this.value])" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Refresh list every');?>">
		    	<option value="1">1 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','second');?></option>		    	
		    	<option value="3">3 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','seconds');?></option>		    	
		    	<option value="5">5 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','seconds');?></option>		    	
		    	<option value="10">10 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','seconds');?></option>		    	
		</select>
	</div>
	<div class="col-1 pe-0">
		<select class="form-control form-control-sm" id="svelte-userTimeoutFilter" onchange="ee.emitEvent('svelteOnlineUserSetting',['userTimeoutFilter',this.value])" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Show visitors who visited site in the past');?>">
		    	<option value="30">30 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','seconds');?></option>
		    	<option value="60">1 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','minute');?></option>
		    	<option value="120">2 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','minutes');?></option>
		    	<option value="300">5 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','minutes');?></option>
		    	<option value="600">10 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','minutes');?></option>
		    	<option value="1200">20 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','minutes');?></option>
		    	<option value="1800">30 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','minutes');?></option>
		    	<option value="3600">1 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','hour');?></option>
		    	<option value="28800">8 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','hour');?></option>
		    	<option value="43200">12 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','hour');?></option>
		    	<option value="86400">1 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','day');?></option>
		    	<option value="604800">7 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','days');?></option>
		    	<option value="2678400">31 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','day');?></option>
		</select>
	</div>
	<div class="col-1">
		<select class="form-control form-control-sm" id="svelte-maxrowsFilter" onchange="ee.emitEvent('svelteOnlineUserSetting',['maxrowsFilter',this.value])" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Max records to return');?>">
		    	<option value="10">10</option>
		    	<option value="50">50</option>
		    	<option value="100">100</option>
		    	<option value="150">150</option>		   
		    	<option value="200">200</option>		   
		    	<option value="250">250</option>
		    	<option value="300">300</option>		  
		    	<option value="500">500</option>
		    	<option value="1000">1000</option>
		</select>
	</div>
    <?php include(erLhcoreClassDesign::designtpl('lhchat/onlineusers/online_attr_filter.tpl.php'));?>
</div>

<script>
    $(function() {
        $('.online-department-filter').makeDropdown({
            'on_select' : function(item){
                ee.emitEvent('svelteOnlineUserSetting',['departments']);
            },
            'on_delete' : function(item){
                ee.emitEvent('svelteOnlineUserSetting',['departments']);
            }
        });
    });
</script>

<?php /*
    ng-init='groupByField = <?php echo json_encode($ogroupBy, JSON_HEX_APOS)?>;online.department_dpgroups = <?php echo json_encode($onlineDepartmentGroups,JSON_HEX_APOS)?>;online.department=<?php echo json_encode($onlineDepartment,JSON_HEX_APOS)?>;online.country=<?php echo json_encode($oCountry,JSON_HEX_APOS)?>;online.soundEnabled=<?php echo $soundUserNotification == 1 ? 'true' : 'false'?>;online.notificationEnabled=<?php echo $browserNotification == 1 ? 'true' : 'false'?>;online.initController();'>
*/ ?>

<?php $onlineCheck_timeout = (int)erLhcoreClassModelChatConfig::fetch('checkstatus_timeout')->current_value; ?>
<lhc-online-visitors groupByField=<?php echo json_encode($ogroupBy, JSON_HEX_APOS)?> <?php if ($onlineCheck_timeout > 0) : ?>online_check="<?php echo $onlineCheck_timeout?>"<?php endif; ?> soundEnabled="<?php echo $soundUserNotification == 1 ? 'true' : 'false'?>" notificationEnabled="<?php echo $browserNotification == 1 ? 'true' : 'false'?>" country=<?php echo json_encode($oCountry,JSON_HEX_APOS)?> online_connected="<?php echo $onlineVisitorOnly == 1 ? 'true' : 'false' ?>" timeout="<?php echo (int)$ouserTimeout?>" time_on_site=<?php echo json_encode($oTimeOnSite,JSON_HEX_APOS)?> max_rows="<?php echo (int)$omaxRows?>" updateTimeout="<?php echo (int)$oupdTimeout?>" <?php if (erLhcoreClassModelChatConfig::fetch('track_is_online')->current_value == 1) : ?>track_is_online="true"<?php endif; ?> www_dir_flags="<?php echo erLhcoreClassDesign::design('images/flags');?>"></lhc-online-visitors>

<?php /*
<table ng-cloak class="table table-sm online-users-table" ng-class="{'filter-online-active' : online.online_connected}" cellpadding="0" cellspacing="0" ng-init='trans = <?php echo json_encode(array('third' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','User has not seen a message from the operator, or the message window is still open.'),'msg_seen' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Seen'),'msg_not_seen' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Unseen'),'second' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','User has seen the message from the operator.'),'first' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','User does not have any messages from the operator')),JSON_HEX_APOS)?>'>
<thead>
<tr>
    <th width="50%" colspan="2"><a class="material-icons" ng-click="online.predicate = 'last_visit'; online.reverse=!online.reverse" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Last activity');?>" >access_time</a><a class="material-icons" ng-click="online.predicate = 'time_on_site'; online.reverse=!online.reverse" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Time on site');?>">access_time</a><a class="material-icons" ng-click="online.predicate = 'visitor_tz_time'; online.reverse=!online.reverse" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Visitor local time');?>">access_time</a><?php if (erLhcoreClassModelChatConfig::fetch('track_is_online')->current_value == 1) : ?><a class="material-icons" ng-click="online.predicate = 'last_check_time'; online.reverse=!online.reverse" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','By user status on site');?>">access_time</a><?php endif;?><a href="" ng-click="online.predicate = 'current_page'; online.reverse=!online.reverse" /><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Page');?></a> | <a href="" ng-click="online.predicate = 'referrer'; online.reverse=!online.reverse" /><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Came from');?></a></th>
    <?php include(erLhcoreClassDesign::designtpl('lhchat/lists/additional_column_header_online.tpl.php'));?>
    <th width="1%"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Action');?></th>
</tr>
</thead>
<tbody ng-repeat="group in onlineusersGrouped track by group.id">
	<tr ng-show="group.label != ''">
		<td colspan="6"><h5 class="group-by-{{groupByField}}">{{group.label}} ({{group.ou.length}})</h5></td>
	</tr>


	<?php include(erLhcoreClassDesign::designtpl('lhchat/onlineusers/section_online_users_row.tpl.php')); ?>
		
</tbody>
</table>*/ ?>

<?php endif;?>
