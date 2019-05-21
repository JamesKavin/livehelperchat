<?php

class erLhcoreClassModelGenericBotRepeatRestrict {

    use erLhcoreClassDBTrait;

    public static $dbTable = 'lh_generic_bot_repeat_restrict';

    public static $dbTableId = 'id';

    public static $dbSessionHandler = 'erLhcoreClassGenericBot::getSession';

    public static $dbSortOrder = 'DESC';

    public function getState()
    {
        $stateArray = array (
            'id' => $this->id,
            'chat_id' => $this->chat_id,
            'trigger_id' => $this->trigger_id,
            'counter' => $this->counter
        );

        return $stateArray;
    }

    public $id = null;
    public $chat_id = null;
    public $trigger_id = null;
    public $counter = 0;
}
