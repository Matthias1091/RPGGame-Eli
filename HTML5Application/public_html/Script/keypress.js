/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



 document.addEventListener('keydown', (event) => {
     var name = event.key;
     var code = event.code;

     event.stopPropagation();  



    //alert('code:'+code)
      
            if(code == 'KeyA')
            {
                player_move_left();
            }    
     
            if(code == 'KeyD')
            {

                player_move_right();
            }
            if(code == 'KeyW')
            {
                player_move_up();
            }
            if(code == 'KeyS')
            {
                player_move_down();
            }

   



    function player_move_left(){
        let posx = $('#player').css('left');
        let posy = $('#player').css('top');
        
        posx = posx.replace('px', '');
        posx = Number(posx);
        
        posy = posy.replace('px', '');
        posy = Number(posy);
        
        posx -= 50;
        
        $('#player').css('left', posx +'px');
        
        
    }



    function player_move_right(){
        let posx = $('#player').css('left');
        let posy = $('#player').css('top');
        
        posx = posx.replace('px', '');
        posx = Number(posx);
        
        posy = posy.replace('px', '');
        posy = Number(posy);
        
        posx += 50;
        
        $('#player').css('left', posx +'px');
    }


    function player_move_up(){
        let posx = $('#player').css('left');
        let posy = $('#player').css('top');
        
        posx = posx.replace('px', '');
        posx = Number(posx);
        
        posy = posy.replace('px', '');
        posy = Number(posy);
        
        posy -= 50;
        
        $('#player').css('top', posy +'px');
    }


    function player_move_down(){
        let posx = $('#player').css('left');
        let posy = $('#player').css('top');
        
        posx = posx.replace('px', '');
        posx = Number(posx);
        
        posy = posy.replace('px', '');
        posy = Number(posy);
        
        posy += 50;
        
        $('#player').css('top', posy +'px');
    }

    
    
     
    for(let search=0; search < item_array.length; search++)
    {
        let player_x = $('#player').css('left');
        let player_y = $('#player').css('top');
        
        player_x = player_x.replace('px', '');
        player_x = Number(player_x);
        
        player_y = player_y.replace('px', '');
        player_y = Number(player_y);

        for(let i=0; i < item_array.length; i++)
        {

            let item_x = item_array[i].item_x;
            let item_y = item_array[i].item_y;
            let item_id = item_array[i].w_id;
           
            
            if(item_x == player_x && item_y == player_y)
            {
               $('#weapon'+ item_id).remove();  
            }
        }
    }
    
    

});






