<!DOCTYPE html>

<html lang="<?php echo erConfigClassLhConfig::getInstance()->getDirLanguage('content_language')?>" dir="<?php echo erConfigClassLhConfig::getInstance()->getDirLanguage('dir_language')?>" ng-app="lhcApp">
<head>
<?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/page_head.tpl.php'));?>
</head>
<body ng-controller="LiveHelperChatCtrl as lhc">

<div class="row">
    <div class="columns large-12 pt10">
        <?php echo $Result['content']; ?>
    </div>
</div>


<script type="text/javascript" language="javascript" src="<?php echo erLhcoreClassDesign::designJS('js/app.js');?>"></script>
<?php if (!isset($Result['disable_angular'])) : ?>
<script type="text/javascript" language="javascript" src="<?php echo erLhcoreClassDesign::designJS('js/angular.min.js;js/angular.lhc.js');?>"></script>
<?php endif;?>

<?php if (erConfigClassLhConfig::getInstance()->getSetting( 'site', 'debug_output' ) == true) {
		$debug = ezcDebug::getInstance();
		echo $debug->generateOutput();
} ?>

</body>
</html>