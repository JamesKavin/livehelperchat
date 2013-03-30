<?php

class erLhcoreClassModelUserDep {

    public function getState()
   {
       return array(
               'id'             => $this->id,
               'user_id'        => $this->user_id,
               'dep_id'         => $this->dep_id,
               'last_activity'  => $this->last_activity,
               'hide_online'    => $this->hide_online
       );
   }

   public function setState( array $properties )
   {
       foreach ( $properties as $key => $val )
       {
           $this->$key = $val;
       }
   }

   public function __get($var) {
		switch ($var) {
			case 'user':
					$this->user = erLhcoreClassModelUser::fetch($this->user_id);
					return $this->user;
				break;

			default:
				break;
		}
   }

   public static function getList($paramsSearch = array())
   {
	   	$paramsDefault = array('limit' => 32, 'offset' => 0);

	   	$params = array_merge($paramsDefault,$paramsSearch);

	   	$session = erLhcoreClassDepartament::getSession();
	   	$q = $session->createFindQuery( 'erLhcoreClassModelUserDep' );

	   	$conditions = array();

	   	if (isset($params['filter']) && count($params['filter']) > 0)
	   	{
	   		foreach ($params['filter'] as $field => $fieldValue)
	   		{
	   			$conditions[] = $q->expr->eq( $field, $q->bindValue($fieldValue) );
	   		}
	   	}

	   	if (isset($params['filterin']) && count($params['filterin']) > 0)
	   	{
	   		foreach ($params['filterin'] as $field => $fieldValue)
	   		{
	   			$conditions[] = $q->expr->in( $field, $fieldValue );
	   		}
	   	}

	   	if (isset($params['filterlt']) && count($params['filterlt']) > 0)
	   	{
	   		foreach ($params['filterlt'] as $field => $fieldValue)
	   		{
	   			$conditions[] = $q->expr->lt( $field, $q->bindValue($fieldValue) );
	   		}
	   	}

	   	if (isset($params['filtergt']) && count($params['filtergt']) > 0)
	   	{
	   		foreach ($params['filtergt'] as $field => $fieldValue)
	   		{
	   			$conditions[] = $q->expr->gt( $field,$q->bindValue( $fieldValue ));
	   		}
	   	}

	   	if (isset($params['customfilter']) && count($params['customfilter']) > 0)
	   	{
	   		foreach ($params['customfilter'] as $fieldValue)
	   		{
	   			$conditions[] = $fieldValue;
	   		}
	   	}

	   	if (count($conditions) > 0)
	   	{
	   		$q->where(
	   				$conditions
	   		);
	   	}

	   	if (isset($params['groupby']) )
	   	{
	   		$q->groupBy($params['groupby']);
	   	}

	   	$q->limit($params['limit'],$params['offset']);

	   	$q->orderBy(isset($params['sort']) ? $params['sort'] : 'id DESC' );

	   	$objects = $session->find( $q );

	   	return $objects;
   }

   public static function getOnlineOperators($currentUser) {

	   	$LimitationDepartament = '';
	   	$userData = $currentUser->getUserData(true);
	   	$filter = array();

	   	if ( $userData->all_departments == 0 )
	   	{
	   		$userDepartaments = erLhcoreClassUserDep::getUserDepartaments($currentUser->getUserID());

	   		if (count($userDepartaments) == 0) return array();

	   		$filter['customfilter'][] = '(dep_id IN ('.implode(',',$userDepartaments). ') OR user_id = '.$currentUser->getUserID() . ')';
	   	};

	   	$filter['filtergt']['last_activity'] = time()-120;
	   	$filter['limit'] = 10;
	   	$filter['sort'] = 'last_activity DESC';
	   	$filter['groupby'] = 'user_id';

	   	return self::getList($filter);

   }

   public $id = null;
   public $user_id = 0;
   public $dep_id = 0;
   public $hide_online = 0;
   public $last_activity = 0;
}

?>