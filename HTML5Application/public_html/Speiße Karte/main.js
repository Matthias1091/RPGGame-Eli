/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */





     
    $('#menu').css('position', 'absolute');
    $('#menu').css('left', '20px');
    $('#menu').css('top', '60px');
    $('#menu').css('width', '700px');
    $('#menu').css('height', '200px');


    
    $('body').append("<button id='generate'>Generate Menu</button>");
    $('#generate').css('position', 'absolute');
    $('#generate').css('left', '20px');
    $('#generate').css('top', '20px');
    $('#generate').css('width', '700px');
    $('#generate').css('height', '40px');
    
    

                                                                                                                                                                                                                                           
    var vorspeiße = new Array('Kürbis(kern)suppe', 'Kartoffelsuppe', 'Gemüsesuppe', 'Nudelsuppe', 'Kürbiscremesuppe', 'Knoblauchsuppe', 'Karottensuppe', 'Griesnockerlsuppe');
    var hauptspeiße = new Array('Ziebelrostbraten', 'Rindsrouladen', 'Sushi', 'Pizza Toast', 'Pizzabrötchen', 'Tomatenrissotto', 'Fleckerlspeise', 'Kartoffelsalat', 'Calzone', 'Palatschinken', 'Instantnudeln', 'Bratnudeln mit Erdnüssen', 'Chinesische Eiernudeln', 'Bratnudeln (evntl mit Shrimps)', 'Gebratenes Rindfleisch mit Ziebeln', 'Frühlingsrollen', 'Spagetti alla chitarra', 'Spagetti Carbonara', 'Sauerbraten', 'Cordon Bleu', 'Spagetti Bolonese', 'Lasagna', 'Schnitzel', 'Reis Fleich', 'Gulasch', 'Spagetti', 'Fleischlaberl', 'Bernerwürstel', 'Chilli con Carne', 'Fisch', 'Rindfleisch', 'Semmelknödel', 'Geflügel', 'Kalbsramgulasch', 'Rinderrouladen');
    var beilage = new Array('Apfelmus', 'Omlette', 'Eierspeis', 'Eiernudeln', '(Karotten) Risotto', 'Eiernockerl','Spätzle', 'Serviettenknödel', 'Gnocchi', 'Quark Käse Puffer', 'Mais', 'Kohlrabi', 'Gemüse', 'Brokoli', '(Geröstete) Paprikashoten', 'Gegrillte Zucchini', 'Lauch Meerrettich Rahm', 'Gurkensalat', 'Sauerkraut (Salat)', 'Tomaten(Kräuter)Salat', 'Wurstsalat', 'Gepäck', 'Karottensalat', 'Weiswurst', 'Sauerkraut', 'Kartoffelstampf', 'Kartoffelecken', 'Kartoffel-Gratin', 'Kartoffelsalat', 'Reis', 'Kartoffelpüreh', 'Salat', 'Kartoffeln', 'Nudeln');
    var nachspeiße = new Array('Süßkartoffel Apfelkuchen', 'Brownies', 'Obstsalat', 'Apfel Quark Kuchen', 'Skyr Dessert', 'Kokusreis Kugeln', 'Crepes Suzette', 'Crepes', 'Krapfen', 'Apfelstreuselkuschen', 'Apfelmus', 'Butterkushen', 'Bienenstich', 'Maccarons', 'Marillenknödel', 'Muffins', 'Apfelstrudel', 'Biskuitrolle', 'Himbeer Puddingcreme Schnitte', 'Tiramisu', 'Pudding', 'Kuchen', 'Eis');





    $('#generate').click(function(){
        $('#select_menu').empty();
        /*
        let index = 0;
        let menu = [[],[],[],[],[],[],[]];
        
        let tage = new Array('Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag');
        let abkrz = new Array('vorspeiße', 'hauptspeiße', 'beilagen', 'nachspeiße');
        let menu_liste = new Array(vorspeiße, hauptspeiße, beilagen, nachspeiße);
        
        for(let i=0; i < tage.length)
        
        console.log(menu)
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
        
        $('#select_menu').append("<option>Select Menu</option>");
        $('#select_menu').append("<option name='mo_v' id='mo_v'>"+vorspeiße[montag_v]+"</option>");
        $('#select_menu').append("<option name='mo_h' id='mo_h'>"+hauptspeiße[montag_h]+"</option>");
        $('#select_menu').append("<option name='mo_b' id='mo_b'>"+beilage[montag_b]+"</option>");
        $('#select_menu').append("<option name='mo_n' id='mo_n'>"+nachspeiße[montag_n]+"</option>");

        $('#dienstag_vorspeise').text(vorspeiße[dienstag_v]);
        $('#dienstag_hauptspeise').text(hauptspeiße[dienstag_h]);
        $('#dienstag_beilage').text(beilage[dienstag_b]);
        $('#dienstag_nachspeise').text(nachspeiße[dienstag_n]);
        
        $('#select_menu').append("<option>"+vorspeiße[dienstag_v]+"</option>");
        $('#select_menu').append("<option>"+hauptspeiße[dienstag_h]+"</option>");
        $('#select_menu').append("<option>"+beilage[dienstag_b]+"</option>");
        $('#select_menu').append("<option>"+nachspeiße[dienstag_n]+"</option>");       
        

        $('#mittwoch_vorspeise').text(vorspeiße[mittwoch_v]);
        $('#mittwoch_hauptspeise').text(hauptspeiße[mittwoch_h]);
        $('#mittwoch_beilage').text(beilage[mittwoch_b]);
        $('#mittwoch_nachspeise').text(nachspeiße[mittwoch_n]);
        
        $('#select_menu').append("<option>"+vorspeiße[mittwoch_v]+"</option>");
        $('#select_menu').append("<option>"+hauptspeiße[mittwoch_h]+"</option>");
        $('#select_menu').append("<option>"+beilage[mittwoch_b]+"</option>");
        $('#select_menu').append("<option>"+nachspeiße[mittwoch_n]+"</option>");         
        
        
        $('#donnerstag_vorspeise').text(vorspeiße[donnerstag_v]);
        $('#donnerstag_hauptspeise').text(hauptspeiße[donnerstag_h]);
        $('#donnerstag_beilage').text(beilage[donnerstag_b]);
        $('#donnerstag_nachspeise').text(nachspeiße[donnerstag_n]);
       
        $('#select_menu').append("<option>"+vorspeiße[donnerstag_v]+"</option>");
        $('#select_menu').append("<option>"+hauptspeiße[donnerstag_h]+"</option>");
        $('#select_menu').append("<option>"+beilage[donnerstag_b]+"</option>");
        $('#select_menu').append("<option>"+nachspeiße[donnerstag_n]+"</option>");         
        
        $('#freitag_vorspeise').text(vorspeiße[freitag_v]);
        $('#freitag_hauptspeise').text(hauptspeiße[freitag_h]);
        $('#freitag_beilage').text(beilage[freitag_b]);
        $('#freitag_nachspeise').text(nachspeiße[freitag_n]);
        
        $('#select_menu').append("<option>"+vorspeiße[freitag_v]+"</option>");
        $('#select_menu').append("<option>"+hauptspeiße[freitag_h]+"</option>");
        $('#select_menu').append("<option>"+beilage[freitag_b]+"</option>");
        $('#select_menu').append("<option>"+nachspeiße[freitag_n]+"</option>"); 
        
        $('#samstag_vorspeise').text(vorspeiße[samstag_v]);
        $('#samstag_hauptspeise').text(hauptspeiße[samstag_h]);
        $('#samstag_beilage').text(beilage[samstag_b]);
        $('#samstag_nachspeise').text(nachspeiße[samstag_n]);
        
        $('#select_menu').append("<option>"+vorspeiße[samstag_v]+"</option>");
        $('#select_menu').append("<option>"+hauptspeiße[samstag_h]+"</option>");
        $('#select_menu').append("<option>"+beilage[samstag_b]+"</option>");
        $('#select_menu').append("<option>"+nachspeiße[samstag_n]+"</option>"); 

        $('#sonntag_vorspeise').text(vorspeiße[sonntag_v]);
        $('#sonntag_hauptspeise').text(hauptspeiße[sonntag_h]);
        $('#sonntag_beilage').text(beilage[sonntag_b]);
        $('#sonntag_nachspeise').text(nachspeiße[sonntag_n]);
        
        $('#select_menu').append("<option>"+vorspeiße[sonntag_v]+"</option>");
        $('#select_menu').append("<option>"+hauptspeiße[sonntag_h]+"</option>");
        $('#select_menu').append("<option>"+beilage[sonntag_b]+"</option>");
        $('#select_menu').append("<option class='menu_option'>"+nachspeiße[sonntag_n]+"</option>"); 



        function get_option(a){
        
        for(var i = 0;i < document.getElementById("select_menu").length;i++){
            if($(".menu_option").attr('value') == a){
                let selected = document.getElementById("select_menu").selectedIndex = i;
                console.log(selected)
            }
            
        }

        };
        
        
                
    $(document.body).on('click', '*', function(e) {
        var find_option = $('#menu_select').find('option')
        var get_id = $('#'+find_option).attr('id');
        var get_value = $('#'+get_id).attr('value')
        console.log('get button id '+get_id);
        e.stopPropagation();    
    });
    
    
    
        
        $('.menu_option').click(function(){
            let a = $('.menu_option').attr('value');
           get_option(a) 
            
        })
        

        
        
        //let vor_array = new Array(mo_v, di_v, mi_v, do_v, f_v, sa_v, so_v);
        
        //vorspeise_rezept(vor_array, value);
        
        
        
        
        
        
        
        
        
        
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
