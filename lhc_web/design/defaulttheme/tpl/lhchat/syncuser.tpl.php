<?php /*foreach ($messages as $msg ) : ?>
<div class="message-row response"><div class="msg-date"><?php

if (date('Ymd') == date('Ymd',$msg['time'])) {
	echo  date('H:i:s',$msg['time']);
} else {
	echo date('Y-m-d H:i:s',$msg['time']);
}

?></div><span class="usr-tit"><?php if ($sync_mode == 'widget') : ?><img src="<?php echo erLhcoreClassDesign::design('images/icons/user_suit.png');?>" title="<?php echo htmlspecialchars($msg['name_support'])?>" alt="<?php echo htmlspecialchars($msg['name_support'])?>" /><?php else : ?><?php echo htmlspecialchars($msg['name_support'])?>:<?php endif;?>&nbsp;</span><?php echo erLhcoreClassBBCode::make_clickable(htmlspecialchars($msg['msg']))?></div>
<?php endforeach; */?>


<?php foreach ($messages as $msg) : ?>
            <?php if ($msg['user_id'] == 0) { ?>
            	<div class="message-row"><div class="msg-date"><?php if (date('Ymd') == date('Ymd',$msg['time'])) {	echo  date('H:i:s',$msg['time']);} else { echo date('Y-m-d H:i:s',$msg['time']);}; ?></div><span class="usr-tit"><?php if (isset($sync_mode) && $sync_mode == 'widget') : ?><img src="<?php echo erLhcoreClassDesign::design('images/icons/user_green.png');?>" title="<?php echo htmlspecialchars($chat->nick)?>" alt="<?php echo htmlspecialchars($chat->nick)?>" /><?php else : ?><?php echo htmlspecialchars($chat->nick)?>:<?php endif;?>&nbsp;</span><?php echo erLhcoreClassBBCode::make_clickable(htmlspecialchars($msg['msg']))?></div>
            <?php } else { ?>
                <div class="message-row response"><div class="msg-date"><?php if (date('Ymd') == date('Ymd',$msg['time'])) { echo  date('H:i:s',$msg['time']);} else {	echo date('Y-m-d H:i:s',$msg['time']);}; ?></div><span class="usr-tit"><?php if (isset($sync_mode) && $sync_mode == 'widget') : ?><img src="<?php echo erLhcoreClassDesign::design('images/icons/user_suit.png');?>" title="<?php echo htmlspecialchars($msg['name_support'])?>" alt="<?php echo htmlspecialchars($msg['name_support'])?>" /><?php else : ?><?php echo htmlspecialchars($msg['name_support'])?>:<?php endif;?>&nbsp;</span><?php echo erLhcoreClassBBCode::make_clickable(htmlspecialchars($msg['msg']))?></div>
            <?php } ?>
<?php endforeach; ?>
