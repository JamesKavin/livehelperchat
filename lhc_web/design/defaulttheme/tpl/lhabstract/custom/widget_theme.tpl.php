<div class="row">
	<div class="columns small-6">
		<?php include(erLhcoreClassDesign::designtpl('lhabstract/abstract_form.tpl.php'));?>
	</div>
	<div class="columns small-6">
	<br/>
		<style type="text/css">
		#lhc_status_container * {direction:ltr;text-align:left;;font-family:arial;font-size:12px;box-sizing: content-box;zoom:1;margin:0;padding:0}
		#lhc_status_container .status-icon{text-decoration:none;font-size:12px;font-weight:bold;color:#{{bactract_bg_color_text_color}};display:block;padding:10px 10px 10px 35px;background:url('//demo.livehelperchat.com/design/defaulttheme/images/icons/user_green_chat.png') no-repeat left center}
		#lhc_status_container:hover{}
		#lhc_status_container #offline-icon{background-image:url('//demo.livehelperchat.com/design/defaulttheme/images/icons/user_gray_chat.png')}
		#lhc_status_container{box-sizing: content-box;-webkit-border-top-left-radius: 20px;-moz-border-radius-topleft: 20px;border-top-left-radius: 20px;-webkit-box-shadow: -1px -1px 5px rgba(50, 50, 50, 0.17);border:1px solid #e3e3e3;border-right:0;border-bottom:0;;-moz-box-shadow:-1px -1px 5px rgba(50, 50, 50, 0.17);box-shadow: -1px -1px 5px rgba(50, 50, 50, 0.17);padding:5px 0px 0px 5px;width:190px;font-family:arial;font-size:12px;transition: 1s;background-color:#{{bactract_bg_color_onl_bcolor}};z-index:9989;}
		@media only screen and (max-width : 640px) {#lhc_status_container{position:relative;top:0;right:0;bottom:0;left:0;width:auto;border-radius:2px;box-shadow:none;border:1px solid #e3e3e3;margin-bottom:5px;}}
		</style>
		
		<div id="lhc_status_container"><a id="online-icon" class="status-icon" href="#">Live help is online...</a></div>
		
		<br/>
		<br/>
		<br/>
		<style type="text/css">
		.lhc-no-transition{ -webkit-transition: none !important; -moz-transition: none !important;-o-transition: none !important;-ms-transition: none !important;transition: none !important;}
		.lhc-min{height:35px !important}
		#lhc_container * {direction:ltr;text-align:left;;font-family:arial;font-size:12px;line-height:100%;box-sizing: content-box;-moz-box-sizing:content-box;padding:0;margin:0;}
		#lhc_container img {border:0;}		
		#lhc_title{float:left;}
		#lhc_header{position:relative;z-index:9990;height:15px;overflow:hidden;background-color:#{{bactract_bg_color_header_background}};text-align:right;clear:both;padding:5px;}
		#lhc_remote_window,#lhc_min,#lhc_close{padding:2px;float:right;}#lhc_close:hover,#lhc_min:hover,#lhc_remote_window:hover{opacity: 0.4;}
		#lhc_container {height:200px; -moz-user-select:none; -khtml-user-drag:element;cursor: move;cursor: -moz-grab;cursor: -webkit-grab;overflow: hidden;transition-property: height;transition-duration: 0.4s;-webkit-transition: height 0.4s ease-in-out;transition: height 0.4s;z-index:9990;border-radius: 5px; }
		#lhc_container iframe{transition-property: height;transition-duration: 0.4s;-webkit-transition: height 0.4s ease-in-out;transition: height 0.4s;}
		#lhc_container iframe.lhc-loading{background: #FFF url(//demo.livehelperchat.com/design/defaulttheme/images/general/loading.gif) no-repeat center center; }@media only screen and (max-width : 640px) {#lhc_container{margin-bottom:5px;position:relative;right:0 !important;bottom:0 !important;top:0 !important}#lhc_container iframe{width:100% !important}}
		</style>
		
		<div id="lhc_container" class="" style="height: 207px;" draggable="false"><div id="lhc_header"><span id="lhc_title"><a title="Powered by Live Helper Chat" href="http://livehelperchat.com" target="_blank"><img src="//demo.livehelperchat.com/design/defaulttheme/images/general/logo_grey.png" alt="Live Helper Chat"></a></span><a href="#" title="Close" id="lhc_close"><img src="//demo.livehelperchat.com/design/defaulttheme/images/icons/cancel.png" title="Close" alt="Close"></a>&nbsp;<a href="#" title="Open in a new window" id="lhc_remote_window"><img src="//demo.livehelperchat.com/design/defaulttheme/images/icons/application_double.png" alt="Open in a new window" title="Open in a new window"></a><a href="#" id="lhc_min" title="Minimize/Restore"><img src="//demo.livehelperchat.com/design/defaulttheme/images/icons/min.png"></a></div><div id="lhc_iframe_container"><iframe id="lhc_iframe" allowtransparency="true" scrolling="no" class="lhc-loading" frameborder="0" src="//demo.livehelperchat.com/chat/chatwidget/(vid)/ji6q8mbo61hekxgy68qn?URLReferer=%2F%2Flivehelperchat.com%2F&amp;r=%2F%2Flivehelperchat.com%2F&amp;dt=Live%20helper%20chat%2C%20open%20source%20live%20support." width="300" height="181" style="width: 99.9%; height: 181px;"></iframe></div></div>
		
		
		<br/>
		<br/>
<style type="text/css">
#lhc_need_help_container{width:235px;border-radius:20px;background:#{{bactract_bg_color_offl_bcolor}};color:#Fff;padding:10px;border:1px solid #dbe257;}#lhc_need_help_container:hover{background-color:#84A52E}#lhc_need_help_container:hover #lhc_need_help_triangle{border-top-color:#84A52E}
#lhc_need_help_triangle{width: 0;height: 0;border-left: 20px solid transparent;border-right: 10px solid transparent;border-top: 15px solid #{{bactract_bg_color_offl_bcolor}};position:absolute;bottom:-14px;}
#lhc_need_help_close{float:right;border-radius:10px;background:#435A05;padding:0px 6px;color:#FFF;right:10px;font-size:16px;font-weight:bold;text-decoration:none;margin-top:0px;line-height:20px}#lhc_need_help_close:hover{background-color:#74990F;}
#lhc_need_help_image{padding-right:10px;float:left;cursor:pointer;}#lhc_need_help_image img{border-radius:30px;border:1px solid #d0d0d0}#lhc_need_help_main_title{font-size:16px;font-weight:bold;cursor:pointer;line-height:1.5}#lhc_need_help_sub_title{cursor:pointer;line-height:1.5}
</style>
		
		<div id="lhc_need_help_container"><a id="lhc_need_help_close" title="Close" onclick="return lh_inst.lhc_need_help_hide();" href="#">×</a><div onclick="return lh_inst.lhc_need_help_click();" id="lhc_need_help_image"><img width="60" height="60" src="//demo.livehelperchat.com/design/defaulttheme/images/general/operator.png"></div><div onclick="return lh_inst.lhc_need_help_click();" id="lhc_need_help_main_title">Need help?</div><span onclick="return lh_inst.lhc_need_help_click();" id="lhc_need_help_sub_title">Our staff is always ready to help</span></div>
		
		
		
		
		
	</div>
</div>