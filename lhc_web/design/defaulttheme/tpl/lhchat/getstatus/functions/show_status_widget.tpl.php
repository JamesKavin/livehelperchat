showStatusWidget : function() {
<?php if ($position == 'original' || $position == '') :
// You can style bottom HTML whatever you want. ?>
<?php include(erLhcoreClassDesign::designtpl('lhchat/getstatus/native_placement.tpl.php')); ?>

<?php elseif (in_array($position, array_keys($positionArgument))) : ?>
	this.removeById('lhc_status_container');	
	
    var statusTEXT = '<a id="'+(this.isOnline == true ? 'online-icon' : 'offline-icon')+'" class="status-icon" href="#" onclick="return lh_inst.lh_openchatWindow()" ><span class="lhc-text-status">'+(this.isOnline ? <?php if ($theme !== false && $theme->online_text !== '') : print json_encode($theme->online_text); else : ?><?php echo json_encode(htmlspecialchars_decode(erTranslationClassLhTranslation::getInstance()->getTranslation('chat/getstatus','Live help is online...'),ENT_QUOTES))?><?php endif?> : <?php if ($theme !== false && $theme->offline_text != '') : print json_encode($theme->offline_text); else : ?><?php echo json_encode(htmlspecialchars_decode(erTranslationClassLhTranslation::getInstance()->getTranslation('chat/getstatus','Live help is offline...'),ENT_QUOTES))?><?php endif?>)+'</span></a>';

    if (!this.cssStatusWasAdded) {
      	this.cssStatusWasAdded = true;
      	<?php 
      	$iconsStatuses = array(
      	    'online_image_url' => ($theme !== false && $theme->online_image_url !== false && strpos($theme->online_image_url, 'http') !== false),
      	    'offline_image_url' => ($theme !== false && $theme->offline_image_url !== false && strpos($theme->offline_image_url, 'http') !== false)
      	);          	          	
      	?>
    	var raw_css = "#lhc_status_container.hide-status{display:none!important;}#lhc_status_container * {direction:<?php (erConfigClassLhConfig::getInstance()->getOverrideValue('site','dir_language') == 'ltr' || erConfigClassLhConfig::getInstance()->getOverrideValue('site','dir_language') == '') ? print 'ltr;text-align:left;' : print 'rtl;text-align:right;'; ?>;font-family:arial;font-size:12px;box-sizing: content-box;zoom:1;margin:0;padding:0}\n#lhc_status_container .status-icon{text-decoration:none;font-size:12px;font-weight:bold;color:<?php $theme !== false ? print '#'.$theme->text_color : print '#000' ?>;display:block;padding:<?php echo $currentPosition['padding_text']?>;background:url('<?php if ($iconsStatuses['online_image_url'] == false) : ?><?php echo erLhcoreClassModelChatConfig::fetch('explicit_http_mode')->current_value?>//<?php echo $_SERVER['HTTP_HOST']?><?php endif; ?><?php if ($theme !== false && $theme->online_image_url !== false) : print $theme->online_image_url; else : ?><?php echo erLhcoreClassDesign::design('images/icons/user_green_chat.png');?><?php endif;?>') no-repeat <?php echo $currentPosition['background_position']?> center}\n#lhc_status_container:hover{<?php echo $currentPosition['widget_hover']?>}\n#lhc_status_container #offline-icon{background-image:url('<?php if ($iconsStatuses['offline_image_url'] == false) : ?><?php echo erLhcoreClassModelChatConfig::fetch('explicit_http_mode')->current_value?>//<?php echo $_SERVER['HTTP_HOST']?><?php endif; ?><?php if ($theme !== false && $theme->offline_image_url !== false) : print $theme->offline_image_url; else : ?><?php echo erLhcoreClassDesign::design('images/icons/user_gray_chat.png');?><?php endif;?>')}\n#lhc_status_container{box-sizing: content-box;<?php echo $currentPosition['widget_radius']?>-webkit-box-shadow: <?php echo $currentPosition['shadow']?> rgba(50, 50, 50, 0.17);<?php echo $currentPosition['border_widget']?>;-moz-box-shadow:<?php echo $currentPosition['shadow']?> rgba(50, 50, 50, 0.17);box-shadow: <?php echo $currentPosition['shadow']?> rgba(50, 50, 50, 0.17);padding:5px 0px 0px 5px;width:190px;font-family:arial;font-size:12px;transition: 1s;position:fixed;<?php echo $currentPosition['position']?>;background-color:#<?php $theme !== false ? print $theme->onl_bcolor : print 'f6f6f6' ?>;z-index:9989;}@media only screen and (max-width : 640px) {#lhc_need_help_container{display:none;}#lhc_status_container .status-icon{padding:32px 15px 9px 31px;background-position:center center;}#lhc_status_container .lhc-text-status{display:none} #lhc_status_container{width:auto;padding:0;border-radius:0px;bottom:50px;right:5px;left:auto;top:auto;}}\n";
    	this.addCss(raw_css<?php ($theme !== false && $theme->custom_status_css !== '') ? print '+\''.str_replace(array("\n","\r"), '', $theme->custom_status_css).'\'' : '' ?>);
	};

	<?php include(erLhcoreClassDesign::designtpl('lhchat/getstatus/we_here.tpl.php')); ?>	
    
    var htmlStatus = '<div id="lhc_status_container">'+subStatus+statusTEXT+'</div>';

    var fragment = this.appendHTML(htmlStatus);
    
    document.body.insertBefore(fragment, document.body.childNodes[0]);        
<?php endif; ?>
	if (typeof <?php echo $chatOptionsVariable?> != 'undefined' && typeof <?php echo $chatOptionsVariable?>.callback != 'undefined' && typeof <?php echo $chatOptionsVariable?>.callback.show_widget_cb != 'undefined') {
		<?php echo $chatOptionsVariable?>.callback.show_widget_cb(this);    		
	};
},