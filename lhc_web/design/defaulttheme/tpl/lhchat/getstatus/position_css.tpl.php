<?php

$positionArgument = array (
		'bottom_left' => array (
				'radius' => 'right',
				'position' => 'bottom:0;left:0;',
				'posv' => 'b',
				'pos' => 'l',
				'position_body' => 'bottom:0;left:0;',
				'shadow' => '1px -1px 5px',
				'moz_radius' => 'topright',
				'widget_hover' => '',
				'padding_text' => '10px 10px 10px 35px',
				'chrome_radius' => 'top-right',
				'border_widget' => 'border:1px solid #'.($theme !== false ? $theme->bor_bcolor : 'e3e3e3').';border-left:0;border-bottom:0;',
				'background_position' => '0',
				'widget_radius' => '-webkit-border-top-right-radius: 20px;-moz-border-radius-topright: 20px;border-top-right-radius: 20px;',
				'nh_hor_pos' => 'margin-left:10px;',
				'nh_tr_pos' => 'left:15px;'
		),
		'bottom_right' => array (
				'pos' => 'r',
				'posv' => 'b',
				'radius' => 'left',
				'position' => 'bottom:0;right:0;',
				'position_body' => 'bottom:0;right:0;',
				'shadow' => '-1px -1px 5px',
				'moz_radius' => 'topleft',
				'widget_hover' => '',
				'padding_text' => '10px 10px 10px 35px',
				'background_position' => 'left',
				'chrome_radius' => 'top-left',
				'border_widget' => 'border:1px solid #'.($theme !== false ? $theme->bor_bcolor : 'e3e3e3').';border-right:0;border-bottom:0;',
				'widget_radius' => '-webkit-border-top-left-radius: 20px;-moz-border-radius-topleft: 20px;border-top-left-radius: 20px;',
				'nh_hor_pos' => 'margin-left:-80px;',
				'nh_tr_pos' => 'right:15px;'
		),
		'middle_right' => array (
				'pos' => 'r',
				'posv' => 't',
				'radius' => 'left',
				'position' => "top:{$top_pos}{$units};right:-155px;",
				'position_body' => "top:{$top_pos}{$units};right:0px;",
				'shadow' => '1px -1px 5px',
				'border_widget' => 'border:1px solid #'.($theme !== false ? $theme->bor_bcolor : 'e3e3e3').';border-right:0;',
				'widget_hover' => 'right:0;transition: 1s;',
				'moz_radius' => 'topleft',
				'padding_text' => '10px 10px 10px 35px',
				'background_position' => '0',
				'chrome_radius' => 'top-left',
				'widget_radius' => '-webkit-border-top-left-radius: 20px;-moz-border-radius-topleft: 20px;border-top-left-radius: 20px;      -webkit-border-bottom-left-radius: 20px;-moz-border-radius-bottomleft: 20px;border-bottom-left-radius: 20px;',
				'nh_hor_pos' => 'margin-left:-230px;',
				'nh_tr_pos' => 'right:15px;'
		),
		'middle_left' => array (
				'radius' => 'left',
				'position' => "top:{$top_pos}{$units};left:-155px;",
				'position_body' => "top:{$top_pos}{$units};left:0px;",
				'shadow' => '1px -1px 5px',
				'border_widget' => 'border:1px solid #'.($theme !== false ? $theme->bor_bcolor : 'e3e3e3').';border-left:0;',
				'padding_text' => '10px 35px 10px 9px',
				'widget_hover' => 'left:0;transition: 1s;',
				'moz_radius' => 'topright',
				'posv' => 't',
				'pos' => 'l',
				'background_position' => '95%',
				'chrome_radius' => 'top-right',
				'widget_radius' => '-webkit-border-top-right-radius: 20px;-moz-border-radius-topright: 20px;border-top-right-radius: 20px;      -webkit-border-bottom-right-radius: 20px;-moz-border-radius-bottomright: 20px;border-bottom-right-radius: 20px;',
				'nh_hor_pos' => 'margin-left:160px;',
				'nh_tr_pos' => ''
		),
		'full_height_right' => array (
			'full_height' => true,
			'pos' => 'r',
			'posv' => 'b',
			'radius' => 'left',
			'position' => 'bottom:0;right:0;',
			'position_body' => 'bottom:0;right:0;',
			'shadow' => '-1px -1px 5px',
			'moz_radius' => 'topleft',
			'widget_hover' => '',
			'padding_text' => '10px 10px 10px 35px',
			'background_position' => 'left',
			'chrome_radius' => 'top-left',
			'border_widget' => 'border:1px solid #'.($theme !== false ? $theme->bor_bcolor : 'e3e3e3').';border-right:0;border-bottom:0;',
			'widget_radius' => '-webkit-border-top-left-radius: 20px;-moz-border-radius-topleft: 20px;border-top-left-radius: 20px;',
			'nh_hor_pos' => 'margin-left:-80px;',
			'nh_tr_pos' => 'right:15px;'
		),
		'full_height_left' => array (
			'full_height' => true,
			'radius' => 'right',
			'position' => 'bottom:0;left:0;',
			'posv' => 'b',
			'pos' => 'l',
			'position_body' => 'bottom:0;left:0;',
			'shadow' => '1px -1px 5px',
			'moz_radius' => 'topright',
			'widget_hover' => '',
			'padding_text' => '10px 10px 10px 35px',
			'chrome_radius' => 'top-right',
			'border_widget' => 'border:1px solid #'.($theme !== false ? $theme->bor_bcolor : 'e3e3e3').';border-left:0;border-bottom:0;',
			'background_position' => '0',
			'widget_radius' => '-webkit-border-top-right-radius: 20px;-moz-border-radius-topright: 20px;border-top-right-radius: 20px;',
			'nh_hor_pos' => 'margin-left:10px;',
			'nh_tr_pos' => 'left:15px;'
		),
);

if (key_exists($position, $positionArgument)){
	$currentPosition = $positionArgument[$position];
} else {
	$currentPosition = $positionArgument['bottom_right'];
}

?>