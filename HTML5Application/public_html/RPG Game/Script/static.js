/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Object calsse baut ein object zu einer Variable um
class Weapon{
    w_id;
    item_x;
    item_y;
    class_color;
    weapon_type;
    
    constructor(w_id, item_x, item_y, class_color, weapon_type){
        this.w_id = w_id;
        this.item_x = item_x;
        this.item_y = item_y;
        this.class_color = class_color;
        this.weapon_type = weapon_type;
    }
}


var item_array = new Array();

var int_x = 0;
var int_y = 0;
var grid_x = new Array();
var grid_y = new Array();



// Kann man mit window.onload vergleichen
$(document).ready(function(){





var size = 15;

// Baut ein Daten Grid auf
for(let count=0; count <= size; count++)
{
    int_x += 50;
    grid_x.push(int_x);
}
for(let count=0; count <= size; count++)
{
    int_y += 50;
    grid_y.push(int_y);
}





   
   
   
    let weapon_count = 5;
    let w_id = 0;
    
    let sp = Math.random()*1;
    let class_color= 'null';
    
   
    if(sp > 0 && sp < 0.5)
    {
        class_color = 'normal';
    }
    
    if(sp > 0.5 && sp < 1)
    {
        class_color = 'normal';
    }
    
    let item_x; let item_y;
    

    // Die schleife wiederholt einen betimmten Script-abschnitt für eine bestimmmte Anzahl        
    for(let x = 0; x <= weapon_count; x++)
    {
        w_id ++;
        

            let index_x = Math.round(Math.random()*size);
            let index_y = Math.round(Math.random()*size);
            let bgcolor_count = Math.round(Math.random()*2);
            let bgcolor = 'null';
            let weapon_type;
            
            let item_x = grid_x[index_x];
            let item_y = grid_y[index_y];
            
            
            // Switch ist wie if()else if() else if() else()
            switch(bgcolor_count){
                case 0:
                    bgcolor = 'yellow';
                    weapon_type = 'Rifle';
                break;
                case 1:
                    bgcolor = 'red';
                    weapon_type = 'Pistol';
                break;
                case 2:
                    bgcolor = 'blue';
                    weapon_type = 'Missel Launcher';
                break; 
            }



        for(let index = 0; index <= grid_x.length; index++)
        {
            // Generiert ein Neues Object
            let weapon = new Weapon(w_id, item_x, item_y, class_color, weapon_type);
            
            // Fügt eine variable, string, object, ... in ein array
            item_array.push(weapon); 
            
            // item create ist die name einer function, (attr.1, attr.2, attr.3) sind die attribute der function
            // Die Attribute transferieren variablen zwischen functionen hin und her
            item_create(grid_x, grid_y, index_x, index_y, w_id, bgcolor);
        }

     };
    

    
});


// Funktion
function item_create(grid_x, grid_y, index_x, index_y, w_id, bgcolor){
                
            let item_x = grid_x[index_x];
            let item_y = grid_y[index_y];

            // Body append fügt ein element in body ein.
            // in der klammer nach .append ist das zu einfügende Element deklariert
            $('body').append("<label id='weapon"+w_id+"' class='item'></label>");
            
            // fügt css eigenschaften zum Element Hinzu
            $('#weapon'+ w_id).css('top', item_y +'px');
            $('#weapon'+ w_id).css('left', item_x +'px');
            $('#weapon'+ w_id).css('background-color', bgcolor);
        
            

             
}





function uwu_color(time) 
{
    return new Promise(resolve => 
    {
        setTimeout(() => { resolve(''); }, time);
    });
}



color_change();

async function color_change(){

    while(true)
    {
        await uwu_color(500);
        
        for(let i = 0; i < item_array.length; i++)
        {

            let type = item_array[i].class_color;
            let id = item_array[i].w_id;
            
            
            if(type == 'rainbow')
            {
                let clr_change = Math.round(Math.random()*10);
                
                switch(clr_change){
                    case 0:
                        $('#weapon'+id).css('background-color', 'yellow');
                    break;
                    case 1:
                        $('#weapon'+id).css('background-color', 'orange');
                    break;
                    case 2:
                        $('#weapon'+id).css('background-color', 'purple');
                    break;
                    case 3:
                        $('#weapon'+id).css('background-color', 'cyan');
                    break;
                    case 4:
                        $('#weapon'+id).css('background-color', 'red');
                    break;
                    case 5:
                        $('#weapon'+id).css('background-color', 'lightgreen');
                    break;
                    case 6:
                        $('#weapon'+id).css('background-color', 'lightblue');
                    break;
                    case 7:
                        $('#weapon'+id).css('background-color', 'lightgray');
                    break;
                    case 8:
                        $('#weapon'+id).css('background-color', 'pink');
                    break;
                    case 9:
                        $('#weapon'+id).css('background-color', 'coral');
                    break;
                    case 10:
                        $('#weapon'+id).css('background-color', 'limegreen');
                    break;
                }
            }
        }
    }
    
}
















/*
 * 
 * 

function calc_range(s_x, s_y, player_x, player_y){
    
    let in_range = false;
    
    let check1 = false;
    let check2 = false;
    let check3 = false;
    let check4 = false;
    

    
    let edge1_x = player_x - 200;
    let edge1_y = player_y - 200;
    
    let edge2_x = player_x + 200;
    let edge2_y = player_y + 200;
    
    let edge3_x = player_x - 200;
    let edge3_y = player_y + 200;
    
    let edge4_x = player_x + 200;
    let edge4_y = player_y + 200;
    
    

    
    if(s_x < edge2_x && s_x > edge1_x){ check1 = true;}
    if(s_x < edge4_x && s_x > edge3_x){ check2 = true;}
    if(s_y > edge1_y && s_y < edge3_y){ check3 = true;}
    if(s_y > edge2_y && s_y < edge4_y){ check4 = true;}
    
    if(check1 == true && check2 == true && check3 == true && check4 == true){in_range = true}
    

    
    return in_range;   
}



 */



