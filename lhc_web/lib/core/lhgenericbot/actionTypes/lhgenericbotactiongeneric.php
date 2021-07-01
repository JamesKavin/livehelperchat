<?php

class erLhcoreClassGenericBotActionGeneric {

    public static function process($chat, $action, $trigger, $params)
    {
        $msg = new erLhcoreClassModelmsg();

        $metaMessage = array();

        if (isset($action['content']['list']) && !empty($action['content']['list'])) {
            $metaMessage['content']['generic']['items'] = $action['content']['list'];
        }

        if (isset($action['content']['list_options']['hide_text_area']) && $action['content']['list_options']['hide_text_area'] == true) {
            $metaMessage['content']['attr_options']['hide_text_area'] = true;
        }
        
        $msg->msg = '';
        $msg->meta_msg = !empty($metaMessage) ? json_encode($metaMessage) : '';
        
        if ($msg->meta_msg != '') {
            $msg->meta_msg = erLhcoreClassGenericBotWorkflow::translateMessage($msg->meta_msg, array('chat' => $chat, 'args' => $params));
        }

        $msg->chat_id = $chat->id;
        if (isset($params['override_nick']) && !empty($params['override_nick'])) {
            $msg->name_support = (string)$params['override_nick'];
        } else {
            $msg->name_support = erLhcoreClassGenericBotWorkflow::getDefaultNick($chat);
        }
        $msg->user_id = isset($params['override_user_id']) && $params['override_user_id'] > 0 ? (int)$params['override_user_id'] : -2;
        $msg->time = time() + 1;

        if (!isset($params['do_not_save']) || $params['do_not_save'] == false) {
            erLhcoreClassChat::getSession()->save($msg);
        }

        return $msg;
    }
}

?>