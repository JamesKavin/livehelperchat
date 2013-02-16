
<h2 id="status-chat"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/chat','Pending confirm')?></h2>
<table width="100%">
<tr>
    <td id="messages">
        <div class="msgBlock" id="messagesBlock"><?php foreach (erLhcoreClassChat::getChatMessages($chat_id) as $msg ) : ?>         
            <?php if ($msg['user_id'] == 0) { ?>
            	<div class="message-row"><div class="msg-date"><?php echo date('Y-m-d H:i:s',$msg['time']);?></div><span class="usr-tit"><?php echo $chat->nick;?>:&nbsp;</span><?php echo htmlspecialchars($msg['msg']);?></div>
            <?php } else { ?>
                <div class="message-row response"><div class="msg-date"><?php echo date('Y-m-d H:i:s',$msg['time']);?></div><span class="usr-tit"><?php echo $msg['name_support']?>:&nbsp;</span><?php echo htmlspecialchars($msg['msg']);?></div>
            <?php } ?>  
         <?php endforeach; ?></div>
    </td>
</tr>
<tr>
    <td>
        <div>
            <textarea rows="4" name="ChatMessage" id="CSChatMessage" ></textarea>
            <script type="text/javascript">
            jQuery('#CSChatMessage').bind('keydown', 'return', function (evt){
                lhinst.addmsguser();
            });
            </script> 
        </div>
        
        <input type="button" class="small button round" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/chat','Send')?>" onclick="lhinst.addmsguser()" />
    </td>
</tr>
</table>


<script type="text/javascript">
    lhinst.setChatID('<?php echo $chat_id?>');
    lhinst.setChatHash('<?php echo $hash?>');
    
    // Start user chat synchronization
    lhinst.chatsyncuserpending();
    lhinst.syncusercall();
    
    $(window).bind('beforeunload', function(){        
        lhinst.userclosedchat();
    });
    
</script>