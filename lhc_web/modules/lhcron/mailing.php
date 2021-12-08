<?php
/**
 * php cron.php -s site_admin -c cron/mailing
 *
 * Run every 1 minute or so.
 *
 * */

// Pending campaigns to start
$campaignValid = erLhcoreClassModelMailconvMailingCampaign::getList(['filternot' => ['status' => erLhcoreClassModelMailconvMailingCampaign::STATUS_FINISHED], 'filterlt' => ['starts_at' => time()], 'filter' => ['enabled' => 1]]);

$cfg = erConfigClassLhConfig::getInstance();
$worker = $cfg->getSetting( 'webhooks', 'worker' );

foreach ($campaignValid as $campaign) {
    if ($worker == 'resque' && class_exists('erLhcoreClassExtensionLhcphpresque')) {
        erLhcoreClassModule::getExtensionInstance('erLhcoreClassExtensionLhcphpresque')->enqueue('lhc_mailing', 'erLhcoreClassMailConvMailingWorker', array('campaign_id' => $campaign->id));
    } else {
        $worker = (new erLhcoreClassMailConvMailingWorker());
        $worker->args['campaign_id'] = $campaign->id;
        $worker->perform();
    }
}

?>