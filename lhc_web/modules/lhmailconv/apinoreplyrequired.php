<?php

header ( 'content-type: application/json; charset=utf-8' );

try {

    $db = ezcDbInstance::get();
    $db->beginTransaction();

    $message = erLhcoreClassModelMailconvMessage::fetchAndLock($Params['user_parameters']['id']);

    $conv = $message->conversation;

    if ($conv instanceof erLhcoreClassModelMailconvConversation && erLhcoreClassChat::hasAccessToRead($conv) )
    {

        if ($message->status != erLhcoreClassModelMailconvMessage::STATUS_RESPONDED) {
            $message->lr_time = time();
            $message->response_type = erLhcoreClassModelMailconvMessage::RESPONSE_NOT_REQUIRED;
            $message->response_time = $message->lr_time - $message->accept_time;
            $message->status = erLhcoreClassModelMailconvMessage::STATUS_RESPONDED;
            $message->updateThis();
        }

        $returnAttributes = [];

        // There are no more unresponded messages in this conversation.
        if (erLhcoreClassModelMailconvMessage::getCount(['filternot' => ['status' => erLhcoreClassModelMailconvMessage::STATUS_RESPONDED],'filter' => ['conversation_id' => $conv->id]]) == 0) {

            erLhcoreClassMailconvWorkflow::closeConversation(['conv' => & $conv, 'user_id' => $currentUser->getUserID()]);

            erLhcoreClassChat::prefillGetAttributesObject($conv, array(
                'plain_user_name',
                'can_delete',
                'udate_front',
                'department_name',
                'accept_time_front',
                'cls_time_front',
                'wait_time_pending',
                'wait_time_response',
                'lr_time_front',
                'conv_duration_front',
                'interaction_time_duration',
                'mailbox_front',
            ), array('department','user','mailbox'));

            $message->refreshThis();

            $returnAttributes['conv'] = $conv;
        }

        erLhcoreClassChat::prefillGetAttributesObject($message, array(
            'udate_front',
            'udate_ago',
            'body_front',
            'plain_user_name',
            'accept_time_front',
            'lr_time_front',
            'wait_time_pending',
            'wait_time_response',
            'interaction_time_duration',
            'cls_time_front',
            'delivery_status_keyed',
            'to_data_front',
            'reply_to_data_front',
            'cc_data_front',
            'attachments',
            'bcc_data_front',
            'conv_duration_front',
            'subjects'
        ), array('user', 'conversation', 'files', 'delivery_status'));

        $returnAttributes['message'] = $message;

        $db->commit();

        echo json_encode($returnAttributes);

    } else {
        throw new Exception(erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconv','No permission to read conversation.'));
    }

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(array(
        'error' => $e->getMessage()
    ));
}


exit;

?>