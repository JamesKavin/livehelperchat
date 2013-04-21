<?php $currentUser = erLhcoreClassUser::instance(); if ($is_ajax == false) : ?>

<ul class="button-group radius geo-settings">
      <?php if ($currentUser->hasAccessTo('lhchat','administrateconfig')) : ?>
      <li><a href="<?php echo erLhcoreClassDesign::baseurl('chat/geoconfiguration')?>" class="round button small"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','GEO detection configuration');?></a></li>
      <?php endif; ?>

      <?php if ($currentUser->hasAccessTo('lhchat','allowclearonlinelist')) : ?>
      <li><a class="round small button alert" onclick="return confirm('<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Are you sure?');?>')" href="<?php echo erLhcoreClassDesign::baseurl('chat/onlineusers')?>/(clear_list)/1"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Clear list');?></a></li>
      <?php endif; ?>

</ul>

<h1><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Online users');?></h1>

<?php if($tracking_enabled == false) : ?>
<p><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','User tracking is disabled, enable it at');?>&nbsp;-&nbsp;<a href="<?php echo erLhcoreClassDesign::baseurl('chat/editchatconfig')?>/track_online_visitors"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Chat configuration');?></a></p>
<?php endif; ?>

<div id="online-users">
<?php endif; ?>

<?php if (!empty($items)) : ?>
<table class="twelve online-users-table" cellpadding="0" cellspacing="0">
<thead>
<tr>
    <th width="1%">ID</th>
    <th width="17%" nowrap><img src="<?php echo erLhcoreClassDesign::design('images/icons/clock.png');?>" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Last activity');?>" /></th>
    <th width="80%"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Page');?></th>
    <th width="1%" nowrap><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Status');?></th>
    <th width="1%"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Action');?></th>

</tr>
</thead>
<?php foreach ($items as $departament) : ?>
    <tr>
        <td><?php echo $departament->id?></td>
        <td nowrap><?php echo htmlspecialchars($departament->lastactivity_ago)?> ago</td>
        <td><div class="page-url"><span><?php echo htmlspecialchars($departament->current_page)?></span></div></td>
        <td>
        <div style="width:230px">
        <?php if ( !empty($departament->user_country_code) ) : ?>
        <img src="<?php echo erLhcoreClassDesign::design('images/flags');?>/<?php echo $departament->user_country_code?>.png" alt="<?php echo htmlspecialchars($departament->user_country_name)?>" title="<?php echo htmlspecialchars($departament->user_country_name)?>" />
        <?php endif; ?>

        <img src="<?php if ($departament->operator_message == '') : ?><?php echo erLhcoreClassDesign::design('images/icons/user_inactive.png');?><?php elseif ($departament->message_seen == 1 && $departament->operator_message != '') : ?><?php echo erLhcoreClassDesign::design('images/icons/user_green_32.png');?><?php else : ?><?php echo erLhcoreClassDesign::design('images/icons/user.png');?><?php endif;?>" title="<?php if ($departament->message_seen == 0) : ?><?php if ($departament->operator_message == '') : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','User does not have any message from operator');?><?php else : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','User have not seen message from operator, or message window still open.');?><?php endif; ?><?php else : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','User has seen message from operator.');?><?php endif; ?>" />

        <img src="<?php echo erLhcoreClassDesign::design('images/icons/browsers.png');?>" title="<?php echo htmlspecialchars($departament->user_agent)?>" />

        <?php if ($departament->chat_id > 0) : ?>
        <img <?php if ($departament->can_view_chat == true) : ?>class="action-image" onclick="$.colorbox({'iframe':true,height:'500px',width:'500px', href:'<?php echo erLhcoreClassDesign::baseurl('chat/previewchat')?>/<?php echo $departament->chat_id?>'});"<?php endif;?> src="<?php echo erLhcoreClassDesign::design('images/icons/user_comment.png');?>" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','User is chatting');?>" />
        <?php else : ?>
        <img src="<?php echo erLhcoreClassDesign::design('images/icons/user_comment_inactive.png');?>" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','User is not having any chat right now');?>" /><?php endif; ?>

        <?php if ( ($operator_user = $departament->operator_user) !== false ) : ?>
        <img src="<?php echo erLhcoreClassDesign::design('images/icons/user_suit_32.png');?>" title="<?php echo htmlspecialchars($operator_user); ?> <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','has send message to user');?>" />
        <?php else : ?>
        <img src="<?php echo erLhcoreClassDesign::design('images/icons/user_suit_32_inactive.png');?>" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','No one has send any message to user yet');?>" />
        <?php endif; ?>

        <img src="<?php echo erLhcoreClassDesign::design('images/icons/ip.png');?>" title="<?php echo $departament->ip?>" />

        <img src="<?php echo erLhcoreClassDesign::design('images/icons/information.png');?>" title="<?php echo $departament->first_visit_front?> - <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','first visit');?><?php echo "\n";?><?php echo $departament->last_visit_front?> - <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','last visit');?><?php echo "\n"?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Pageviews');?> - <?php echo $departament->pages_count?>" />



        </div>

        </td>

        <td nowrap><input type="button" class="small button radius" onclick="$.colorbox({'iframe':true,height:'500px',width:'500px', href:'<?php echo erLhcoreClassDesign::baseurl('chat/sendnotice')?>/<?php echo $departament->id?>'});" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Send message');?>"/></td>
    </tr>
<?php endforeach; ?>
</table>
<?php else : ?>
<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/onlineusers','Empty...');?>
<?php endif; ?>

<?php if ($is_ajax == false) : ?>
</div>
<script>startOnlineSync();</script>
<?php endif; ?>