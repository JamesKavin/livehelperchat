<?php

class erLhcoreClassChatStatistic {


    /**
     * Gets pending chats
     */
    public static function getTopTodaysOperators($limit = 100, $offset = 0)
    {
    	$time = (time()-(24*3600));

    	$SQL = 'SELECT lh_chat.user_id,count(lh_chat.id) as assigned_chats FROM lh_chat WHERE time > :time AND user_id > 0 GROUP BY user_id';

    	$db = ezcDbInstance::get();
    	$stmt = $db->prepare($SQL);
    	$stmt->bindValue( ':time',$time,PDO::PARAM_INT);
    	$stmt->setFetchMode(PDO::FETCH_ASSOC);
    	$stmt->execute();
    	$rows = $stmt->fetchAll();

    	$usersID = array();
    	foreach ($rows as $item) {
    		$usersID[] = $item['user_id'];
    	}

    	if ( !empty($usersID) ) {
    		$users = erLhcoreClassModelUser::getUserList(array('limit' => $limit,'filterin' => array('id' => $usersID)));
    	}

    	$usersReturn = array();
    	foreach ($rows as $row) {
    		$usersReturn[$row['user_id']] = $users[$row['user_id']];
    		$usersReturn[$row['user_id']]->statistic_total_chats = $row['assigned_chats'];
    		$usersReturn[$row['user_id']]->statistic_total_messages = erLhcoreClassChat::getCount(array('filtergte' => array('time' => $time),'filter' => array('user_id' => $row['user_id'])),'lh_msg');
    		
    		$usersReturn[$row['user_id']]->statistic_upvotes = erLhcoreClassChat::getCount(array('filtergte' => array('time' => $time),'filter' => array('fbst' => 1,'user_id' => $row['user_id'])));
    		$usersReturn[$row['user_id']]->statistic_downvotes = erLhcoreClassChat::getCount(array('filtergte' => array('time' => $time),'filter' => array('fbst' => 2,'user_id' => $row['user_id'])));
    	}

    	return $usersReturn;
    }
    
    /*
     * Returns last 12 month chats statistic
     * */
    public static function getNumberOfChatsPerMonth($filter = array())
    {	
    	$numberOfChats = array();
    	$departmentFilter = array();
    	$departmentMsgFilter = array();
    	
    	// Message filter
    	$msgFilter = $filter;
    	       	
    	/**
    	 * If department filter provided we have to use strict filter with table names
    	 * */    	
    	$departmentMsgFilter['innerjoin']['lh_chat'] = array('lh_msg.chat_id','lh_chat.id');
    	    	
    	/**
    	 * If user ID provided only provided user chat's has to take effect
    	 * */
    	if (isset($msgFilter['filter']['user_id'])){
    	    unset($msgFilter['filter']['user_id']);
    	    $msgFilter['filter']['lh_chat.user_id'] = $filter['filter']['user_id'];    	  
    	}
    	
    	if (isset($msgFilter['filtergte']['time'])){
    	    unset($msgFilter['filtergte']['time']);
    	    $msgFilter['filtergte']['lh_msg.time'] = $filter['filtergte']['time'];
    	}
    		
    	if (isset($msgFilter['filterlte']['time'])){
    	    unset($msgFilter['filterlte']['time']);
    	    $msgFilter['filterlte']['lh_msg.time'] = $filter['filterlte']['time'];
    	}
    	    
    	for ($i = 0; $i < 12;$i++) {
    		$dateUnix = mktime(0,0,0,date('m')-$i,1,date('y'));
    		$numberOfChats[$dateUnix] = array (
    				'closed' 			=> (int)erLhcoreClassChat::getCount(array_merge_recursive($departmentFilter,$filter,array('filter' => array('status' => erLhcoreClassModelChat::STATUS_CLOSED_CHAT),'customfilter' =>  array('FROM_UNIXTIME(time,\'%Y%m\') = '. date('Ym',$dateUnix))))),    		
    				'active' 			=> (int)erLhcoreClassChat::getCount(array_merge_recursive($departmentFilter,$filter,array('filter' => array('status' => erLhcoreClassModelChat::STATUS_ACTIVE_CHAT),'customfilter' =>  array('FROM_UNIXTIME(time,\'%Y%m\') = '. date('Ym',$dateUnix))))),    		
    				'operators' 		=> (int)erLhcoreClassChat::getCount(array_merge_recursive($departmentFilter,$filter,array('filter' => array('status' => erLhcoreClassModelChat::STATUS_OPERATORS_CHAT),'customfilter' =>  array('FROM_UNIXTIME(time,\'%Y%m\') = '. date('Ym',$dateUnix))))),    		
    				'pending' 			=> (int)erLhcoreClassChat::getCount(array_merge_recursive($departmentFilter,$filter,array('filter' => array('status' => erLhcoreClassModelChat::STATUS_PENDING_CHAT),'customfilter' =>  array('FROM_UNIXTIME(time,\'%Y%m\') = '. date('Ym',$dateUnix))))),    		
    				
    				'msg_user' 			=> (int)erLhcoreClassChat::getCount(array_merge_recursive(array('filter' 	=> array('lh_msg.user_id' => 0),'customfilter' =>  array('FROM_UNIXTIME(lh_msg.time,\'%Y%m\') = '. date('Ym',$dateUnix))),$msgFilter,$departmentMsgFilter),'lh_msg','count(lh_msg.id)'),    		
    				'msg_operator' 		=> (int)erLhcoreClassChat::getCount(array('filtergt' => array('lh_msg.user_id' => 0),'customfilter' =>  array('FROM_UNIXTIME(lh_msg.time,\'%Y%m\') = '. date('Ym',$dateUnix)))+$msgFilter+$departmentMsgFilter,'lh_msg','count(lh_msg.id)'),    		
    				'msg_system' 		=> (int)erLhcoreClassChat::getCount(array_merge_recursive(array('filter' => array('lh_msg.user_id' => -1),'customfilter' =>  array('FROM_UNIXTIME(lh_msg.time,\'%Y%m\') = '. date('Ym',$dateUnix))),$msgFilter,$departmentMsgFilter),'lh_msg','count(lh_msg.id)'),    		
    				
    				'chatinitdefault' 	=> (int)erLhcoreClassChat::getCount(array_merge_recursive($departmentFilter,$filter,array('filter' => array('chat_initiator' => erLhcoreClassModelChat::CHAT_INITIATOR_DEFAULT),'customfilter' =>  array('FROM_UNIXTIME(time,\'%Y%m\') = '. date('Ym',$dateUnix))))),    		
    				'chatinitproact' 	=> (int)erLhcoreClassChat::getCount(array_merge_recursive($departmentFilter,$filter,array('filter' => array('chat_initiator' => erLhcoreClassModelChat::CHAT_INITIATOR_PROACTIVE),'customfilter' =>  array('FROM_UNIXTIME(time,\'%Y%m\') = '. date('Ym',$dateUnix))))),    		
    		);
    	}
    	return $numberOfChats;
    }
    
    
    public static function getNumberOfChatsWaitTime($filter = array())
    {	
    	$numberOfChats = array();
    	    	 	    	    	    
    	for ($i = 0; $i < 12;$i++) {
    		$dateUnix = mktime(0,0,0,date('m')-$i,1,date('y'));
    		$numberOfChats[$dateUnix] = (int)erLhcoreClassChat::getCount(array_merge_recursive($filter,array('customfilter' =>  array('FROM_UNIXTIME(time,\'%Y%m\') = '. date('Ym',$dateUnix)),'filtergt' => array('chat_duration' => 0),'filterlt' =>  array('wait_time' => 600),'filtergt' =>  array('wait_time' => 0))),'lh_chat','AVG(wait_time)');
    	}
    	    	
    	return $numberOfChats;
    }
    
    public static function getWorkLoadStatistic($filter = array()) 
    {
    	$numberOfChats = array();
    	
    	for ($i = 0; $i < 24; $i++) {
    		$dateHour = str_pad($i , 2, '0' , STR_PAD_LEFT);
    		$numberOfChats[$i] = erLhcoreClassChat::getCount(array_merge(array('customfilter' =>  array('FROM_UNIXTIME(time,\'%k\') = '. $dateHour)),$filter));
    	}
    	
    	return $numberOfChats;
    }
    
    public static function getAverageChatduration($days = 30) {
    	$dateUnixPast = mktime(0,0,0,date('m'),date('d')-$days,date('y'));
    	return erLhcoreClassChat::getCount(array('filtergt' => array('time' => $dateUnixPast,'chat_duration' => 0),'filter' =>  array('status' => erLhcoreClassModelChat::STATUS_CLOSED_CHAT)),'lh_chat','AVG(chat_duration)');
    }
    
    public static function getTopChatsByCountry($days = 30, $filter = array()) 
    {
    	$dateUnixPast = mktime(0,0,0,date('m'),date('d')-$days,date('y'));
    	
    	$generalFilter = self::formatFilter($filter);
    	 
    	$useTimeFilter = !isset($filter['filtergte']['time']) && !isset($filter['filterlte']['time']);
    	$appendFilterTime = '';
    	 
    	if ($useTimeFilter == true) {
    		$appendFilterTime = 'time > :time ';
    	}
    	
    	if ($generalFilter != '' && $useTimeFilter == true) {
    		$generalFilter = ' AND '.$generalFilter;
    	}
    	
    	$sql = "SELECT count(id) AS number_of_chats,country_name FROM lh_chat WHERE {$appendFilterTime} {$generalFilter} GROUP BY country_code ORDER BY number_of_chats DESC LIMIT 20";
    	$db = ezcDbInstance::get();
    	$stmt = $db->prepare($sql);
    	
    	if ($useTimeFilter == true) {
    		$stmt->bindValue(':time',$dateUnixPast);
    	}
    	
    	$stmt->setFetchMode(PDO::FETCH_ASSOC);
    	$stmt->execute();
    	return $stmt->fetchAll();
    }
    
    public static function numberOfChatsDialogsByUser($days = 30, $filter = array()) 
    {    	    
    	$dateUnixPast = mktime(0,0,0,date('m'),date('d')-$days,date('y'));
    	
    	$generalFilter = self::formatFilter($filter);
    	
    	$useTimeFilter = !isset($filter['filtergte']['time']) && !isset($filter['filterlte']['time']);
    	$appendFilterTime = '';
    	
    	if ($useTimeFilter == true) {
    		$appendFilterTime = 'time > :time ';
    	}
    	 
    	if ($generalFilter != '' && $useTimeFilter == true) {
    		$generalFilter = ' AND '.$generalFilter;
    	}
    	    	
    	$sql = "SELECT count(id) AS number_of_chats,user_id FROM lh_chat WHERE {$appendFilterTime} {$generalFilter} GROUP BY user_id ORDER BY number_of_chats DESC LIMIT 20";
    	$db = ezcDbInstance::get();
    	$stmt = $db->prepare($sql);
    	
    	if ($useTimeFilter == true) {
    		$stmt->bindValue(':time',$dateUnixPast);
    	}
    	
    	$stmt->setFetchMode(PDO::FETCH_ASSOC);
    	$stmt->execute();
    	return $stmt->fetchAll();
    }
    
    public static function avgWaitTimeyUser($days = 30, $filter = array()) 
    {    	    
    	$dateUnixPast = mktime(0,0,0,date('m'),date('d')-$days,date('y'));
    	
    	$filter['filterlt']['wait_time'] = 600;
    	
    	$generalFilter = self::formatFilter($filter);
    	
    	$useTimeFilter = !isset($filter['filtergte']['time']) && !isset($filter['filterlte']['time']);
    	$appendFilterTime = '';
    	
    	if ($useTimeFilter == true) {
    		$appendFilterTime = 'time > :time ';
    	}
    	 
    	if ($generalFilter != '' && $useTimeFilter == true) {
    		$generalFilter = ' AND '.$generalFilter;
    	}
    	    	
    	$sql = "SELECT count(wait_time) AS avg_wait_time,user_id FROM lh_chat WHERE {$appendFilterTime} {$generalFilter} GROUP BY user_id ORDER BY avg_wait_time DESC LIMIT 20";
    	$db = ezcDbInstance::get();
    	$stmt = $db->prepare($sql);
    	
    	if ($useTimeFilter == true) {
    		$stmt->bindValue(':time',$dateUnixPast);
    	}
    	
    	$stmt->setFetchMode(PDO::FETCH_ASSOC);
    	$stmt->execute();
    	return $stmt->fetchAll();
    }
    
    public static function numberOfMessagesByUser($days = 30, $filter = array()) 
    {    	    
    	$dateUnixPast = mktime(0,0,0,date('m'),date('d')-$days,date('y'));
    	
    	if (isset($filter['filtergte']['time'])){
    	    $filter['filtergte']['lh_msg.time'] = $filter['filtergte']['time'];
    	    unset($filter['filtergte']['time']);
    	}
    		
    	if (isset($filter['filterlte']['time'])){
    	    $filter['filterlte']['lh_msg.time'] = $filter['filterlte']['time'];
    	    unset($filter['filterlte']['time']);
    	}
    	
    	if (isset($filter['filter']['user_id'])){
    	    $filter['filter']['lh_msg.user_id'] = $filter['filter']['user_id'];
    	    unset($filter['filter']['user_id']);
    	}
    	
    	$generalFilter = self::formatFilter($filter);
    	    	 
    	$useTimeFilter = !isset($filter['filtergte']['lh_msg.time']) && !isset($filter['filterlte']['lh_msg.time']);
    	$appendFilterTime = '';
    	if ($useTimeFilter == true) {
    		$appendFilterTime = 'lh_msg.time > :time ';
    	}
    	
    	if ($generalFilter != '' && $useTimeFilter == true) {
    		$generalFilter = ' AND '.$generalFilter;
    	}
    	
    	$sql = "SELECT count(lh_msg.id) AS number_of_chats,lh_msg.user_id 
    	FROM lh_msg 
    	INNER JOIN lh_chat ON lh_chat.id = lh_msg.chat_id
    	WHERE {$appendFilterTime} {$generalFilter} 
    	GROUP BY lh_msg.user_id 
    	ORDER BY number_of_chats DESC LIMIT 20";
    	$db = ezcDbInstance::get();
    	$stmt = $db->prepare($sql);
    
    	
    	if ($useTimeFilter == true) {
    		$stmt->bindValue(':time',$dateUnixPast);
    	}
    	
    	$stmt->setFetchMode(PDO::FETCH_ASSOC);
    	$stmt->execute();
    	return $stmt->fetchAll();
    }
    
    public static function formatFilter($params) {
    	
    	$db = ezcDbInstance::get();
    	
    	$returnFilter = array();
    	foreach ($params as $type => $params){
    		foreach ($params as $field => $value) {
    			if ($type == 'filter') {
    				$returnFilter[] = $field.' = '.$db->quote($value);
    			} elseif ($type == 'filterlte') {
    				$returnFilter[] = $field.' <= '.$db->quote($value);
    			} elseif ($type == 'filtergte') {
    				$returnFilter[] = $field.' >= '.$db->quote($value);
    			}
    		}    		
    	}
    	return implode(' AND ', $returnFilter);
    }
    
    public static function getRatingByUser($days = 30, $filter = array()) 
    {    	    
    	$dateUnixPast = mktime(0,0,0,date('m'),date('d')-$days,date('y'));    	    	
    	$rating = array();    

    	$generalFilter = self::formatFilter($filter);
    	if ($generalFilter != ''){
    		$generalFilter = ' AND '.$generalFilter;
    	}
    	
    	$useTimeFilter = !isset($filter['filtergte']['time']) && !isset($filter['filterlte']['time']);
    	$appendFilterTime = '';
    	if ($useTimeFilter == true) {
    		$appendFilterTime = ' AND time > :time ';
    	}    	
    	
    	$sql = "SELECT count(id) AS number_of_chats,user_id FROM lh_chat WHERE fbst = 1 {$appendFilterTime} {$generalFilter} GROUP BY user_id ORDER BY number_of_chats DESC LIMIT 20";
    	$db = ezcDbInstance::get();
    	$stmt = $db->prepare($sql);
    	if ($useTimeFilter == true) {
    		$stmt->bindValue(':time',$dateUnixPast);
    	}
    	$stmt->setFetchMode(PDO::FETCH_ASSOC);
    	$stmt->execute();
    	$rating['thumbsup'] = $stmt->fetchAll();
    		
    	$sql = "SELECT count(id) AS number_of_chats,user_id FROM lh_chat WHERE fbst = 2 {$appendFilterTime} {$generalFilter} GROUP BY user_id ORDER BY number_of_chats DESC LIMIT 20";
    	$db = ezcDbInstance::get();
    	$stmt = $db->prepare($sql);
    	if ($useTimeFilter == true) {
    		$stmt->bindValue(':time',$dateUnixPast);
    	}
    	$stmt->setFetchMode(PDO::FETCH_ASSOC);
    	$stmt->execute();
    	$rating['thumbdown'] = $stmt->fetchAll();
    		
    	$sql = "SELECT count(id) AS number_of_chats,user_id FROM lh_chat WHERE fbst = 0 {$appendFilterTime} {$generalFilter} GROUP BY user_id ORDER BY number_of_chats DESC LIMIT 20";
    	$db = ezcDbInstance::get();
    	$stmt = $db->prepare($sql);
    	if ($useTimeFilter == true) {
    		$stmt->bindValue(':time',$dateUnixPast);
    	}
    	$stmt->setFetchMode(PDO::FETCH_ASSOC);
    	$stmt->execute();
    	$rating['unrated'] = $stmt->fetchAll();
    	
    	return $rating;
    }

    
    
}

?>