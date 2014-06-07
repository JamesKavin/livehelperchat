<?php

class erLhcoreClassModelCannedMsg {

   public function getState()
   {
       return array(
               'id'         	=> $this->id,
               'msg'       		=> $this->msg,
               'position'   	=> $this->position,
               'delay'     		=> $this->delay,
               'department_id'  => $this->department_id,
               'user_id'  		=> $this->user_id,
               'auto_send'  	=> $this->auto_send
              );
   }

   public static function fetch($id) {
	   	$msg = erLhcoreClassChat::getSession()->load( 'erLhcoreClassModelCannedMsg', (int)$id );
	   	return $msg;
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
   			$this->user = false;
   			if ($this->user_id > 0) {
   				try {
   					$this->user = erLhcoreClassModelUser::fetch($this->user_id);
   				} catch (Exception $e) {
   					$this->user = false;
   				}
   			}
   			return $this->user;
   			break;
   		
   
   		default:
   			break;
   	}
   
   }
   
   public static function getCount($params = array())
   {
       $session = erLhcoreClassChat::getSession();
       $q = $session->database->createSelectQuery();
       $q->select( "COUNT(id)" )->from( "lh_canned_msg" );

       if (isset($params['filter']) && count($params['filter']) > 0)
       {
           $conditions = array();

           foreach ($params['filter'] as $field => $fieldValue)
           {
               $conditions[] = $q->expr->eq( $field, $q->bindValue($fieldValue) );
           }

           $q->where(
                 $conditions
           );
      }

      $stmt = $q->prepare();
      $stmt->execute();
      $result = $stmt->fetchColumn();

      return $result;
   }

   public static function getList($paramsSearch = array())
   {
       $paramsDefault = array('limit' => 32, 'offset' => 0);

       $params = array_merge($paramsDefault,$paramsSearch);

       $session = erLhcoreClassChat::getSession();
       $q = $session->createFindQuery( 'erLhcoreClassModelCannedMsg' );

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

      $q->limit($params['limit'],$params['offset']);

      $q->orderBy(isset($params['sort']) ? $params['sort'] : 'position ASC, id ASC' );

      $objects = $session->find( $q );

      return $objects;
   }

   public static function getCannedMessages($department_id, $user_id) {   	   	
	   	$session = erLhcoreClassChat::getSession();
	   	$q = $session->createFindQuery( 'erLhcoreClassModelCannedMsg' );		   			   	
	   	$q->where(		   		
	   			$q->expr->lOr(
	   					$q->expr->eq( 'department_id', $q->bindValue($department_id) ),
	   					$q->expr->lAnd($q->expr->eq( 'department_id', $q->bindValue( 0 ) ),$q->expr->eq( 'user_id', $q->bindValue( 0 ) )),
	   					$q->expr->eq( 'user_id', $q->bindValue($user_id) )
	   			)		   	
	   	);
	   	   	
	   	$q->limit(50, 0);
	   	$q->orderBy('position ASC, id ASC' ); // Questions with matched URL has higher priority
	   	$items = $session->find( $q );		   	
		return $items;  	
   }
   
   public function removeThis() {
       erLhcoreClassChat::getSession()->delete( $this );
   }
   
   public function saveThis(){
   		erLhcoreClassChat::getSession()->saveOrUpdate( $this );
   }

   public $id = null;
   public $msg = '';
   public $position = 0;
   public $delay = 0;
   public $department_id = 0;
   public $user_id = 0;
   public $auto_send = 0;
}

?>