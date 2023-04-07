/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */





     
    $('#menu').css('position', 'absolute');
    $('#menu').css('left', '20px');
    $('#menu').css('top', '60px');
    $('#menu').css('width', '600px');
    $('#menu').css('height', '200px');
    $('#menu').css('border', '1px solid black');

    
    $('body').append("<button id='generate'>Generate Menu</button>");
    $('#generate').css('position', 'absolute');
    $('#generate').css('left', '20px');
    $('#generate').css('top', '20px');
    $('#generate').css('width', '600px');
    $('#generate').css('height', '40px');
    
    
    
    $('body').append("<input id='send_email' type='submit'>");
    $('#send_email').css('position', 'absolute');
    $('#send_email').css('left', '20px');
    $('#send_email').css('top', '270px');
    $('#send_email').css('width', '600px');
    $('#send_email').css('height', '40px');
    
    


    
    var vorspeiße = new Array('Gemüsesuppe', 'Nudelsuppe', 'Kürbiscremesuppe', 'Knoblauchsuppe', 'Karottensuppe');
    var hauptspeiße = new Array('Schnitzel', 'Reis Fleich', 'Gulasch');
    var beilage = new Array('Reis', 'Kartoffelpüreh', 'Salat');
    var nachspeiße = new Array('Pudding', 'Kuchen', 'Eis');



    $('#generate').click(function(){
        /*
        let index = 0;
        let menu = [[],[],[],[],[],[],[]];
        
        let tage = new Array('Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag');
        let abkrz = new Array('vorspeiße', 'hauptspeiße', 'beilagen', 'nachspeiße');
        let menu_liste = new Array(vorspeiße, hauptspeiße, beilagen, nachspeiße);
        
        for(let i=0; i < tage.length)
        
        console.log(menu)
        */
        
        /*
        let montag_v = Math.round(Math.random()*vorspeiße.size);
        let montag_h = Math.round(Math.random()*hauptspeiße.size);
        let montag_b = Math.round(Math.random()*beilagen.size);
        let montag_n = Math.round(Math.random()*nachspeiße.size);
        */
        
        
        
     
        
       
       
        var montag_v = Math.round(Math.random()*vorspeiße.length);
        var montag_h = Math.round(Math.random()*hauptspeiße.length);
        var montag_b = Math.round(Math.random()*beilage.length);
        var montag_n = Math.round(Math.random()*nachspeiße.length);
       
        var dienstag_v = Math.round(Math.random()*vorspeiße.length);
        var dienstag_h = Math.round(Math.random()*hauptspeiße.length);
        var dienstag_b = Math.round(Math.random()*beilage.length);
        var dienstag_n = Math.round(Math.random()*nachspeiße.length);
        
        var mittwoch_v = Math.round(Math.random()*vorspeiße.length);
        var mittwoch_h = Math.round(Math.random()*hauptspeiße.length);
        var mittwoch_b = Math.round(Math.random()*beilage.length);
        var mittwoch_n = Math.round(Math.random()*nachspeiße.length);
        
        var donnerstag_v = Math.round(Math.random()*vorspeiße.length);
        var donnerstag_h = Math.round(Math.random()*hauptspeiße.length);
        var donnerstag_b = Math.round(Math.random()*beilage.length);
        var donnerstag_n = Math.round(Math.random()*nachspeiße.length);
        
        var freitag_v = Math.round(Math.random()*vorspeiße.length);
        var freitag_h = Math.round(Math.random()*hauptspeiße.length);
        var freitag_b = Math.round(Math.random()*beilage.length);
        var freitag_n = Math.round(Math.random()*nachspeiße.length);
        
        var samstag_v = Math.round(Math.random()*vorspeiße.length);
        var samstag_h = Math.round(Math.random()*hauptspeiße.length);
        var samstag_b = Math.round(Math.random()*beilage.length);
        var samstag_n = Math.round(Math.random()*nachspeiße.length);
        
        var sonntag_v = Math.round(Math.random()*vorspeiße.length);
        var sonntag_h = Math.round(Math.random()*hauptspeiße.length);
        var sonntag_b = Math.round(Math.random()*beilage.length);
        var sonntag_n = Math.round(Math.random()*nachspeiße.length);
        
       
        
        
        
        $('#montag_vorspeise').text(vorspeiße[montag_v]);
        $('#montag_hauptspeise').text(hauptspeiße[montag_h]);
        $('#montag_beilage').text(beilage[montag_b]);
        $('#montag_nachspeise').text(nachspeiße[montag_n]);
        
        $('#dienstag_vorspeise').text(vorspeiße[dienstag_v]);
        $('#dienstag_hauptspeise').text(hauptspeiße[dienstag_h]);
        $('#dienstag_beilage').text(beilage[dienstag_b]);
        $('#dienstag_nachspeise').text(nachspeiße[dienstag_n]);
        
        $('#mittwoch_vorspeise').text(vorspeiße[mittwoch_v]);
        $('#mittwoch_hauptspeise').text(hauptspeiße[mittwoch_h]);
        $('#mittwoch_beilage').text(beilage[mittwoch_b]);
        $('#mittwoch_nachspeise').text(nachspeiße[mittwoch_n]);
        
        $('#donnerstag_vorspeise').text(vorspeiße[donnerstag_v]);
        $('#donnerstag_hauptspeise').text(hauptspeiße[donnerstag_h]);
        $('#donnerstag_beilage').text(beilage[donnerstag_b]);
        $('#donnerstag_nachspeise').text(nachspeiße[donnerstag_n]);
       
        $('#freitag_vorspeise').text(vorspeiße[freitag_v]);
        $('#freitag_hauptspeise').text(hauptspeiße[freitag_h]);
        $('#freitag_beilage').text(beilage[freitag_b]);
        $('#freitag_nachspeise').text(nachspeiße[freitag_n]);
        
        $('#samstag_vorspeise').text(vorspeiße[samstag_v]);
        $('#samstag_hauptspeise').text(hauptspeiße[samstag_h]);
        $('#samstag_beilage').text(beilage[samstag_b]);
        $('#samstag_nachspeise').text(nachspeiße[samstag_n]);
        
        $('#sonntag_vorspeise').text(vorspeiße[sonntag_v]);
        $('#sonntag_hauptspeise').text(hauptspeiße[sonntag_h]);
        $('#sonntag_beilage').text(beilage[sonntag_b]);
        $('#sonntag_nachspeise').text(nachspeiße[sonntag_n]);

    

        
        $('#send_email').click(function(){
        
        var sub = 'Speisekarte';
        



        var speisekarte = [                                                                                                                                                                                                         
            ['Montag:  ', 'Vorspeiße:  ', vorspeiße[montag_v], 'Hauptspeiße:  ', hauptspeiße[montag_h], 'Beilage:  ', beilage[montag_b], 'Nachspeise:  ', nachspeiße[montag_n]],
            ['Dienstag:  ', 'Vorspeiße:  ', vorspeiße[dienstag_v], 'Hauptspeiße:  ', hauptspeiße[dienstag_h], 'Beilage:  ', beilage[dienstag_b], 'Nachspeise:  ', nachspeiße[dienstag_n]],
            ['Mittwoch:  ', 'Vorspeiße:  ', vorspeiße[dienstag_v], 'Hauptspeiße:  ', hauptspeiße[dienstag_h], 'Beilage:  ', beilage[dienstag_b], 'Nachspeise:  ', nachspeiße[dienstag_n]]
            
            
            ]
  

        window.location.href = "mailto:tschandlmatthias@gmail.com" + "?subject=" + sub + "&body=" + speisekarte;


 });  




    }); 
    


    
    
    


/*

               <th><label><br/></label></th>
                <th>Vorspeise</th>
                <th>Hauptspeise</th>
                <th>Beilage</th>
                <th>Nachspeise</th>
            </tr>
            <tr>
                <th>Montag:</th>
                <th id="montag_vorspeise"></th>
                <th id="montag_hauptspeise"></th>
                <th id="montag_beilage"></th>
                <th id="montag_nachspeise"></th>
            </tr>
            <tr>
                <th>Dienstag:</th>
                <th id="dienstag_vorspeise"></th>
                <th id="dienstag_hauptspeise"></th>
                <th id="dienstag_beilage"></th>
                <th id="dienstag_nachspeise"></th>
            </tr>
            <tr>
                <th>Mittwoch:</th>
                <th id="mittwoch_vorspeise"></th>
                <th id="mittwoch_hauptspeise"></th>
                <th id="mittwoch_beilage"></th>
                <th id="mittwoch_nachspeise"></th>
            </tr>
            <tr>
                <th>Donnerstag:</th>
                <th id="donnerstag_vorspeise"></th>
                <th id="donnerstag_hauptspeise"></th>
                <th id="donnerstag_beilage"></th>
                <th id="donnerstag_nachspeise"></th>
            </tr>
            <tr>
                <th>Freitag:</th>
                <th id="freitag_vorspeise"></th>
                <th id="freitag_hauptspeise"></th>
                <th id="freitag_beilage"></th>
                <th id="freitag_nachspeise"></th>
            </tr>
            <tr>
                <th>Samstag:</th>
                <th id="samstag_vorspeise"></th>
                <th id="samstag_hauptspeise"></th>
                <th id="samstag_beilage"></th>
                <th id="samstag_nachspeise"></th>
            </tr>
            <tr>
                <th>Sonntag:</th>
                <th id="sonntag_vorspeise"></th>
                <th id="sonntag_hauptspeise"></th>
                <th id="sonntag_beilage"></th>
                <th id="sonntag_nachspeise"></th>
            </tr>
        </table>
        </label>
 * 
 * 
 * 
 */
