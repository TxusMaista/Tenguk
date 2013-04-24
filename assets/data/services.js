Services = (function() {

    var sections = {item:[]};

    var nabarmen = {item:[]};
    var zaletasunak = {item:[]};
    var gertukoak = {item:[]};
    var agenda = {item:[]};

//Función que se utiliza para filtrar las noticias recibidas del servidor y las divide en los diferentes arrays.
    var Fil = function() {

        var url = 'URL del servicio web';
        var data = {
            v: '1.0',
            q: encodeURIComponent("http://feeds.weblogssl.com/xataka2"),
            num: 15,
            output: 'json'
        };

        url = url + "?v=" + data.v + "&q=" + data.q + "&num=" + data.num + "&output=" + data.output + "&callback=?";

        $.getJSON(url, function(response) {
            
            sections.item.push({
                    clase:"category gorria doble rounded",
                    onclick:"changeSec(0)",
                    text: "",
                    author: "",
                    title: "Nabarmen",
                    date: "",
                    img: imag
            });

            if(reponse.seccion.categorias.length != 0)
                sections.item.push({
                    clase:"category urdina rounded",
                    onclick:"changeSec(1)",
                    text: "",
                    author: "",
                    title: "Zaletasunak",
                    date: "",
                    img: ""
                });

            if(reponse.seccion.municipios.length != 0)
                sections.item.push({
                    clase:"category horia rounded",
                    onclick:"changeSec(2)",
                    text: "",
                    author: "",
                    title: "Gertukoak",
                    date: "",
                    img: ""
                });

            if(reponse.seccion.agenda.length != 0)
                sections.item.push({
                    clase:"category berdea rounded",
                    onclick:"changeSec(3)",
                    text: "",
                    author: "",
                    title: "Agenda",
                    date: "",
                    img: ""
                });

            for(var i=0;i<response.length;i++){
                var img;
                if (response.img != "")
                    img = false;
                else
                    img = true;
                if(response.tipo == "evento")
                agenda.push({
                    id: agenda.item.length,
                    clase:random(img),
                    onclick:"mas(this);hideAll(this);",
                    cat:"Agenda",
                    catclass:"catHeaderMin berdea rounded",
                    desc: desc("",""),
                    text: imag + "",
                    author: "",
                    title: "",
                    date: "",
                    img: ""
                });

                if((response.tipo == "noticia")&&(response.categorias.length != 0)&&(reponse.seccion.categorias.length != 0))
                zaletasunak.push({
                    id: zaletasunak.item.length,
                    clase:random(img),
                    onclick:"mas(this);hideAll(this);",
                    cat:"Zaletasunak",
                    catclass:"catHeaderMin urdina rounded",
                    desc: desc("",""),
                    text: imag + "",
                    author: "",
                    title: "",
                    date: "",
                    img: ""
                });

                if((response.tipo == "noticia")&&(response.municipios.length != 0)&&(reponse.seccion.municipios.length != 0))
                gertukoak.push({
                    id: gertukoak.item.length,
                    clase:random(img),
                    onclick:"mas(this);hideAll(this);",
                    cat:"Gertukoak",
                    catclass:"catHeaderMin horia rounded",
                    desc: desc("",""),
                    text: imag + "",
                    author: "",
                    title: "",
                    date: "",
                    img: ""
                });

                if(response.tipo == "nabarmen")
                nabarmen.push({
                    id: nabarmen.item.length,
                    clase:random(img),
                    onclick:"mas(this);hideAll(this);",
                    cat:"",
                    catclass:"catHeaderMin horia rounded",
                    desc: desc("",""),
                    text: imag + "",
                    author: "",
                    title: "",
                    date: "",
                    img: ""
                });
            }
        });
    };

//Función utilizada para printar todas las secciones de la web, desde las noticias que se encuentran en los arrays.
    var Print = function() {
        var html = Mustache.to_html(Template.categoria(), sections);
        $('#secciones').html(html);
        var html = Mustache.to_html(Template.noticia(), nabarmen);
        $('#nabarmen').html(html);
        var html = Mustache.to_html(Template.noticia(), agenda);
        $('#agenda').html(html);
        var html = Mustache.to_html(Template.noticia(), zaletasunak);
        $('#zaletasunak').html(html);
        var html = Mustache.to_html(Template.noticia(), gertukoak);
        $('#gertukoak').html(html);

        document.getElementsByTagName("body")[0].style.backgroundColor = "#f4f5f5";

        $('#secciones').masonry({
            itemSelector: '.seccion',
            isFitWidth: true,
            isAnimated: true
        });

        $('#nabarmen').masonry({
            itemSelector: '.noticia',
            isFitWidth: true,
            isAnimated: true
        });

        $('#gertukoak').masonry({
            itemSelector: '.noticia',
            isFitWidth: true,
            isAnimated: true
        });

        $('#agenda').masonry({
            itemSelector: '.noticia',
            isFitWidth: true,
            isAnimated: true
        });

        $('#zaletasunak').masonry({
            itemSelector: '.noticia',
            isFitWidth: true,
            isAnimated: true
        });
    };

//Función que realiza un random del tamaño de la miniatura de noticia
    function random(o) {
        var result;
        var r = Math.floor((Math.random()*3)+1);

        if (o)
            switch(r){
                case 1:result = "noticia";;break;
                case 2:result = "noticia y2";;break;
                case 3:result = "noticia x2 y4";;break;
                default:result = "noticia";}
        else
            result = "noticia";

        return result;
    }

	var Category = function() {
        var section = {item:[]};

        var imag = "./assets/images/libro.jpg";
        imag = "<img class='portada bottom rounded' class='bottom' src='"+imag+"'/>";

        section.item.push({
            clase:"category gorria doble rounded",
            onclick:"changeSec(0)",
            text: "",
            author: "",
            title: "Nabarmen",
            date: "",
            img: imag
        });

        section.item.push({
            clase:"category berdea rounded",
            onclick:"changeSec(1);",
            text: "<ul><li>Herriko agenda</li><li>Kirolak</li></ul>",
            author: "",
            title: "Agenda",
            date: "",
            img: ""
        });

        section.item.push({
            clase:"category horia rounded",
            onclick:"changeSec(2)",
            text: "<ul><li>Herriz herriko berriak</li><li>Administrazioaren berriak</li></ul>",
            author: "",
            title: "Gertukoak",
            date: "",
            img: ""
        });

        section.item.push({
            clase:"category urdina rounded",
            onclick:"changeSec(3)",
            text: "",
            author: "",
            title: "Zaletasunak",
            date: "",
            img: ""
        });

        section.item.push({
            clase:"category grisa rounded",
            onclick:"changeSec(4)",
            text: "",
            author: "",
            title: "Publi",
            date: "",
            img: ""
        });

        var html = Mustache.to_html(Template.categoria(), section);
        $('#categorias').html(html);
    };

    var Templating = function(o) {
        var section = {item:[]};
        var header;

        switch(o)
        {
        case 0:
          header = "<div class='catHeader gorria rounded'><h1>Nabarmen</h1></div>";
          break;
        case 1:
          header = "<div class='catHeader berdea rounded'><h1>Agenda</h1></div>";
          break;
        default:
          break;
        }
        var K2 = "<img width='100%' class='imag rounded imgY2' src='./assets/images/K2.jpg'/>";
        var K2x = "<img width='100%' src='./assets/images/K2.jpg'/>";
        var K3 = "<img width='100%' class='imag rounded imgY2' src='./assets/images/K3.jpg'/>";
        var K3x = "<img width='100%' src='./assets/images/K3.jpg'/>";
        var K4 = "<img width='100%' class='imag rounded imgY2' src='./assets/images/K4.jpg'/>";
        var K4x = "<img width='100%' src='./assets/images/K4.jpg'/>";
        var K5 = "<img width='100%' class='imag rounded imgY4' src='./assets/images/K5.jpg'/>";
        var K5x = "<img width='100%' src='./assets/images/K5.jpg'/>";
        var K6 = "<img width='100%' class='imag rounded imgY2' src='./assets/images/K6.jpg'/>";
        var K6x = "<img width='100%' src='./assets/images/K6.jpg'/>";
        var K7 = "<img width='100%' class='imag rounded imgY2' src='./assets/images/K7.jpg'/>";
        var K7x = "<img width='100%' src='./assets/images/K7.jpg'/>";
        var K8 = "<img width='100%' class='imag rounded imgY2' src='./assets/images/K8.jpg'/>";
        var K8x = "<img width='100%' src='./assets/images/K8.jpg'/>";

        var img = "http://goiena.net/site_media/photologue/photos/cache/JuanLuisZabalanet_display.jpg";
        imag1 = "<img width='100%' class='imag rounded imgY2' src='"+img+"'/>";
        imagx1 = "<img width='100%' src='"+img+"'/>";
        var img = "http://goiena.net/site_media/photologue/photos/cache/8-AzaitzUnanue-8091ona_display.jpg";
        imag2 = "<img width='100%' class='imag rounded imgY4' src='"+img+"'/>";
        imagx2 = "<img width='100%' src='"+img+"'/>";
        var img = "http://goiena.net/site_media/photologue/photos/cache/VerdaguerBarrua_display.jpg";
        imag3 = "<img width='100%' class='imag rounded imgY2' src='"+img+"'/>";
        imagx3 = "<img width='100%' src='"+img+"'/>";
        var img = "http://goiena.net/site_media/photologue/photos/cache/17-JesusElortza2_display.JPG";
        imag4 = "<img width='100%' class='imag rounded imgY2' src='"+img+"'/>";
        imagx4 = "<img width='100%' src='"+img+"'/>";
        var img = "http://goiena.net/site_media/photologue/photos/cache/Imagen%201_353_display.png";
        imag5 = "<img width='100%' class='imag rounded imgY4' src='"+img+"'/>";
        imagx5 = "<img width='100%' src='"+img+"'/>";
        var img = "http://goiena.net/site_media/photologue/photos/cache/bergara%20garbia%20barru_display.jpg";
        imag6 = "<img width='100%' class='imag rounded imgY2' src='"+img+"'/>";
        imagx6 = "<img width='100%' src='"+img+"'/>";
        var img = "http://goiena.net/site_media/photologue/photos/cache/P1013241_display.JPG";
        imag7 = "<img width='100%' class='imag rounded imgY2' src='"+img+"'/>";
        imagx7 = "<img width='100%' src='"+img+"'/>";

        section.item.push({
            id:'1',
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","KIROLAK | Aurrera doa Eskoriatzako Osasun Astea"),
            text: "Eskoriatzako I. Osasun Astearen bueltan, gaur jaialditxoa egingo dute plazan, 18:00etan. Besteak beste, bizitza osasungarria eroateko aholkuak jasotzen dituzten informazio panelak, eliptikoak, umeendako fruta tailerrak eta saski ekologikoaren zozketa izango dira horretan. Hori amaitzean, 19:00etan, teknika naturista iraultzaileari buruzko saio praktikoa eta hitzaldia izango da Huhezin. Bihar azken ekintza egingo dute: 18:00etan, kiroldegiko sarreratik bidegorrirantz joango dira parte-hartzaileak, eta han dauden osasun parkeak ezagutu eta askotariko makinak erabiltzen ikasiko dute.Orokorrean, harrera ona izan dute orain arte egindako ekimenek; bereziki, martitzen arratsaldean, zaharren egoitzan izandako saio praktikoak. Han bizi direnek gustura egin zituzten Josu Larreategik agindutako ariketak, eta etorkizunean, jarduerak jarraipena izan dezala eskatu zuten. Horren harira, Kirol teknikari Rosa Lasagabasterrek honakoa izan du: Agerian geratu da hor hutsunea dagoela; zerbait pentsatu behar dugu. Atzo, eguaztena, Amaia Diaz de Monasteriogurenek ariketa, hidratazio eta elikadurari buruzko mezu garbia helarazi zuen, eta aholkuak eman zituen.Bestalde, aste osoan kiroldegian eta Huhezin jarritako informazio guneek ere erabiltzaile asko jaso dituzte.",
            author: "",
            title: "Aurrera doa Eskoriatzako Osasun Astea",
            date: "Api. 10, 2013, 5:39 p.m.",
            img: ''
        });

        section.item.push({
            id:'2',
            clase:"noticia y2",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","KIROLAK | Udaberrirako ekintza berria gimnasioan"),
            text: "Taldea sortzen bada, datorren astean hasiko da zumba ikastaroa. Ostiral arratsaldetan eskainiko da ikastaro berritzaile hau. Ordubetez, 17:00tatik aurrera izango da eta 15 urte gorakoentzat da. Diru kontuei dagokionez, bazkide izanda 9 euro ordaindu beharko dira hilabeteko. Ez bazkideek aldiz, 17 euro hilabeteko eta ekintza plusa dutenentzako doan izango da.",
            author: "",
            title: "Udaberrirako ekintza berria gimnasioan",
            date: "Api. 10, 2013, 5:39 p.m.",
            img: ""
        });

        section.item.push({
            id:'3',
            clase:"noticia y2",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","KIROLAK | Galiziara, kenpo borrokaldira"),
            text: K3x+"<p>Debagoieneko kenpo arteetako zazpi borrokalarik kilometro mordoxka egingo dute asteburuan, Galiziaraino joango direlako Espainiako Txapelketan parte hartzera; eta eurekin batera, beste hiru lagun joango dira, epaile lanetara. Etzi, zapatuan, jokatuko da Espainiako Kenpo Txapelketa, Villagarcia de Arousan. 100 bat lagun joango dira borroka egiteko asmoz.</p><p>Espainia mailan kenpo eskola mordoa dago, eta nik uste dut borroka egiteko asmoz 100 lagun baino gehiago batuko direla Galizian, diosku Arrasateko Zigarrola auzoan kenpoan jarduten duen Iker Letonak: Debagoienetik zazpi lagun doaz, eta Euskal Herritik gu eta Kenpo Kai taldekoak joango gara.</p><p>Bera ez da lehiatuko, epaile lanetan ibiliko da buru-belarri lanean, baina anaia, Josu letona, tapiz gainean izango da: Ez dakit zenbat arriskatuko den, apirilaren 25ean Munduko Txapelketara doalako, eta pena izango litzateke hitzordu horren aurretik min hartzea. Ni kontuz ibiliko nintzateke, baina anaia ezagutzen dut eta oso lehiakorra da, ez zaio gustatzen galtzea, hortan..., diosku barrez. </p>",
            author: "",
            title: "Udaberrirako ekintza berria gimnasioan",
            date: "Api. 10, 2013, 5:39 p.m.",
            img: K3
        });

        section.item.push({
            id:'4',
            clase:"noticia y2",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","KIROLAK | Irteeraz betetako apirila Pol-Pol mendi taldearen eskutik"),
            text: K4x+"<p>Pol-Pol mendi taldeak hiru irteera antolatu ditu apirilerako. Lehengoa, hilaren 14an, Mugarrietara; bigarrrena apirilaren 21ean egingo den beteranoen irteera izango da; eta azkenik, mendi ski irteera antolatu dute hilaren 20tik 21era.</p><p>Hilaren 14an Mugarrietako laugarren etapa egingo dute, Osintxutik Uberara. Irteera 08:00etan izango da frontoitik. Zazpi orduko irteera izanik, egun osoko irteera izango da. Tiketak frontoiko tabernan daude salgai, hala ere, gehienez, 46 pertsonek izango dute txangoaz disfrutatzeko aukera.</p><p>Apirilaren 21ean izango den beteranoen irteerak Kodes-Ioar-Kanpetzu ibilbidea izango du. Autobusa 08:00etan aterako da frontoitik. Hau ere egun osoko txangoa izango da. Tiketak bulegoan daude salgai jada.</p><p>Hilaren 20-21eko astebururako mendi eski irteera prestatu dute Vignemalera. Larunbatean Port d' Espagn-etik irtenda, Baisellance-eko aterpetxean pasako dute gaua. Igandean Vignemalerako bidea hartuko dute eta, amaieran, beherainoko buelta egingo dute. Berez, neguko aldea zabalik egongo da, beraz, Pol-Pol mendi tadearen gomendioa da mendrirako materiala ekartzea. Hala ere, mantak badaudela diote mendi taldekoek. Irteera honetan bi faktore hartuko dira kontuan: elurra eta eguraldia. Hauen arabera txangoaren data aldatu daiteke. Izena emateko azken eguna apirilaren 16an, asteartean, izango da. Egun horretan, 19:00etan, batzarra egongo da buelgoan.</p>",
            author: "",
            title: "Irteeraz betetako apirila Pol-Pol mendi taldearen eskutik",
            date: "Api. 10, 2013, 5:39 p.m.",
            img: K4
        });

        section.item.push({
            id:'5',
            clase:"noticia x2 y4",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","KIROLAK | Beñat Rezustak garaipenarekin hasi du Bergara Hiria pilota txapelketa"),
            text: K5x+"<p>Atzo, martitzena, jarri zen abian Bergara Hiria pilota txapelketa eta, nagusien kategorian, Jaka-Beñat Rezusta bikoteak 22-16 irabazi zien Ojuel eta Gorrotxategiri. Gazteetan, aldiz, hilaren 23ra atzeratu dute atzo jokatu beharreko partidua, Otamendi min hartuta dagoelako.</p><p>Min du eskuetan Otamendik eta ez zegoen, beraz, atzoko neurketa jokatzeko moduan. Hori horrela, hilaren 23ra aldatu dute neurketa: egun horretan Otamendiren ordez beste bikote bat izango du Ortizek, Altuna eta Erostarberen kontra indarrak neurtzeko. Egun horretan, beste bi partidu ere jokatuko dira, 19:00etan hasita.</p><p>Edozein kasutan, atzo bertan ere, gazte mailako pilotariek lan apur bat egin behar izan zuten: lau t’erdikoaren barruan jokatu zuten Altuna eta Ortizek, eta  Altunak irabazi zuen (22-2).</p><p>Nagusiei dagokienean, Jaka eta B.Rezusta Ojuel eta Gorrotxategi baino gehiago izan ziren (22-16). Partidu gogorra jokatu zuten: Jakak 11 tanto egin zituen jokoan eta beste lau sakez, eta sei galdu; Rezustak, bi egin eta beste bi galdu; Ojuelek lau tanto egin zituen jokoan eta 3 saketik, sakez falta bat ere bai eta jokoan bi bakarrik galdu zituen; eta Gorrotxategik bat egin eta bat galdu.</p><p>Hurrengo partiduak</p><p>Hilaren 16an, 23an eta 30ean izango dira hurrengo jardunaldiak; maiatzaren 7an eta 14an final-erdiak; eta 20an, finala.</p>",
            author: "",
            title: "Beñat Rezustak garaipenarekin hasi du Bergara Hiria pilota txapelketa",
            date: "Api. 10, 2013, 5:39 p.m.",
            img: K5
        });

        section.item.push({
            id:'6',
            clase:"noticia y2",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","KIROLAK | Aramaioarrak laugarren Euskadiko Zirkuituko txapelketan"),
            text: K6x+"<p>Pasa den zapatuan, hilaren 7an, Hanka Labanka patinatzaile taldeko hiru aramaioarrek parte hartu zuten Euskadiko Zirkuituko txapelketan: Ainhoa Oianguren eta Oihan Bideburu Junior mailan eta Agustin Oianguren Master-40 mailan. Nahiz eta eguraldiak ez lagundu, giro paregabea sortu zen txapelketan.</p><p>Domekan, hiru aramaioarrek talde moduan jokatu zuten, hiru orduko Kotarreko zirkuituan, Aranda de Dueron, txandaka bueltak ematen. Lasterketa erdiraino hirugarren postuan mantentzea lortu zuten, baina, azkenean, laugarren postua eskuratu zuten.</p>",
            author: "",
            title: "Aramaioarrak laugarren Euskadiko Zirkuituko txapelketan",
            date: "Api. 10, 2013, 5:39 p.m.",
            img: K6
        });

        section.item.push({
            id:'7',
            clase:"noticia y2",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","KIROLAK | Abian da Eskoriatzako Osasun Astea"),
            text: K7x+"<p>Osasun Astearen bueltan, FreeCross bizikletak eta informazio panelak eskoriatzarren eskura daude atzotik Manuel Muñoz kiroldegian eta Huhezin. Askotariko ekintzak izango dira asteon: gaur, esaterako, Josu Larreategik gidatuta, jarduera fisikoa egingo dute zaharren egoitzan bizi direnek, eta jarraian, hirugarren adinean ariketa fisikoa egitearen garrantziaz egingo dute berba.</p><p>Kirola eta osasunarekin lotutako ekintzak bihartik Eskoriatzan</p><p>Esan bezala, Free Cross bizikletekin batera, informazio panelak jarri dituzte. Eskoriatzako gaztelekukoekin elkarlanean, edarien analisia egin dute horretako batean. Gazteek edaten dituzten edarien azterketa egin dute, zenbat azukre daukan jakiteko.</p><p>Horretaz gainera, elikadura osasungarria jarraitzearen garrantzia azpimarratzen da beste baten batean, eta horretan, fruta jateko gomendio egiten da. Sagarrak, mandarinak eta bestelakoak hartu daitezke, herriko Martin fruta dendaren eskutik.</p>",
            author: "",
            title: "Abian da Eskoriatzako Osasun Astea",
            date: "Api. 10, 2013, 5:39 p.m.",
            img: K7
        });

        section.item.push({
            id:'8',
            clase:"noticia y2",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","KIROLAK | Abian da Eskoriatzako Osasun Astea"),
            text: K8x+"<p>Bergara Hiria pilota torneoaren hamazazpigarren edizioa jokatuko dute bihartik, martitzena, hasita. Eta urtero moduan, antolatzaileek bi kategoria bereiztuko dituzte, gazteak eta nagusiak. Partiduak martitzenetan jokatuko dituzte, 19:00etan hasita, eta maiatzaren 20an izango dira finalak. Albiste barruan, jardunaldi guztiak zehaztuta:</p><p>Pentekoste jaietako astelehenean jokatuko dituzte Bergara Hiriko finalak. Egun hori izango da salbuespena, kanporaketa guztiak martitzenero izango direlako. Hala, datorren hilabete eta erdian pilota-giro ederra egongo da frontoian. Antolatzaileek adierazi dute sarrerak doan izango direla, baina ikusleek klubari laguntzeko aukera izango dute, zozketako txartelak erosita.</p><p>Hemen txapelketako egutegia:</p><p>Apirillak 9, 19.30</p><p>1º Gazteak: Altuna-Erostarbe / Ortiz-Otamendi</p><p>2º Nagusiak: Jaka-Beñat.Rezusta / Ojuel-Gorrotxategi</p><p>Apirillak,  16</p><p>1º Gazteak:   Dario-Santxes / Olano-Alduntzin</p><p>2º Nagusiak: Ander Elezkano-Kerman Galarza / Anzotegi-Linzoain</p><p>Apirillak,  23</p><p>1º Gazteak: Irribarria-Xanet Imaz / Larrañaga-Agirre</p><p>2º Naguziak: Ander.Muguruza-Telletxea / Larrañaga-Peñas</p><p>Apirillak, 30</p><p>1º Gazteak:  Goikolea-Elustondo / Gallastegi-Ibarrondo</p><p>2º Nagusiak: Yoldi-Tolosa / Eneko Muguruza-Perez</p><p>Maiatzak 7, Final-erdiak: Apirillak 9ko eta 16ko irabazleen artean.</p><p>Maiatzak 14, Final-erdiak: Apirillak  23ko eta 30eko irabazleen artean.</p><p>Maiatzak 20, Finala.</p>",
            author: "",
            title: "Abian da Eskoriatzako Osasun Astea",
            date: "Api. 10, 2013, 5:39 p.m.",
            img: K8
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: desc("Gertukoak",'LEINTZ GATZAGA | Juan Luis Zabala: "Konposta euren kabuz egiten dutenek %25eko hobaria izango dute fakturetan"'),
            text: imagx1 + "<p>Bai. Orain arte bai Arlabango zein Goierriko auzoetan bakarrik zegoen edukiontzi berdea; bada, leku horietan jarriko ditugu minigune batzuk.</p><p>Ekarpen-guneak dira. Ekarpen-gune nagusia ipini behar dugu herrian. Miniguneak izango dira edukiontzi multzo txikiagoak. Herriko ekarpen-gunean ipini behar ditugu txabolatxo baten barruan ontzi arinak, papera, errefusa eta fardelak batzeko edukiontziak. Eta kanpoan beira, oihala eta olioa batzekoak. Eta seguru aski ipiniko ditugu pilak batzekoak ere bai. Orain udaletxean jasotzen ditugu, baina jendeak eskatu zuen herriko ekarpen-gunean jartzeko. Miniguneetan, berriz, jasoko dira plastikozko poltsak, ontzi arinak, papera eta errefusa.</p><p>Mankomunitateak ordaindu behar dizkigu. Herriko ekarpen-gunea gehi bi auzo konpostagailu egokitu behar dira. Ekarpen-gunea itxita egongo da, baina erabiltzaile bakoitzak izango du atea zabaltzeko bidea. Herri guztiak gehi bederatzi baserrik erabiliko du ekarpen-gune nagusia.</p><p>Bat izango da Arlabangoa. Kokapena aztertzen gabiltza. Zortzi baserrik erabiliko dute. Beste bat izango da Goierrikoa. Hori jarriko dugu errepidea eta trenbidea elkartzen diren lekutik gertu. 13 baserrik erabiliko dute. Eta badaude beste bost baserri Arabaren esku daudenak, eta haiei eman behar diegu aukera erabakitzeko zein minigune erabili gura duten. Horiek ere Mankomunitateak egingo ditu.</p><p>Herria bi zatitan banatu dugu: goikoa eta behekoa. Goiko konpostagailu komunitarioa Errosarioko aparkalekuaren izkinan jarriko dugu. Ez dugu aparkalekurik galduko. 1.000 litroko hiru konpostagailu izango dira. 36 etxebizitzarendako. Etorkizunean egin ahal diren etxebizitza berriak barne. Eta behean, 48 etxebizitza, jatetxe, elkarte eta Jakionendako konpostagailua izango da. Hala ere, Soran jatetxeak bere aldetik egingo du konposta eta Arrate pentsatzen dabil. Eskola eta Leintzargiko instalazio artean ipiniko dugu: hiru konpostagailu 1.000 litrokoak eta beste bat 2.000 litrokoa. Bestalde, baserri gehienak bere kabuz ibiliko dira; batzuk badabiltza konposta egiten. Eta goiko jatetxeei dagokienez, Gaztainuzketak esan digu bere kabuz egingo duela, Gatzagainek ere bai, eta Gure Ametsak nahiago du Mankomunitatearen esku lagatzea hondakin organikoak konpostatzea. Xabi Jausoro langileak egingo du lan hori (gero Mankomunitateak ordainduta) eta herriko konpostagailuaren ardura ere berarena izango da. Dena den, herritarren kasuan ere, nahiago dugu orturen bat edo lorategiren bat duenak bere kabuz egitea konposta. Hala, obrekin batera, ikastaroak emango ditugu herri guztiari azalpen guztiak emateko. Kuboak ere banatu behar ditugu, giltzak edo txartelak…</p><p>Bai. Nahi duenak eska dezake konpostagailua (300 litrokoa) gehi torlojua, barrukoari eragiteko. Eskaera hori nahi duenak nahi duenean egin dezake. Konposta egiten dutenek %25eko hobaria izango dute hondakinen fakturan. Baina hori aplikatuko da teknikariak ikusi ostean benetan konposta egiten dutela.</p>",
            author: "",
            title: 'Juan Luis Zabala: "Konposta euren kabuz egiten dutenek %25eko hobaria izango dute fakturetan"',
            date: "",
            img: imag1
        });

        section.item.push({
            id: section.item.length + 1 ,
            clase:"noticia x2 y4",
            onclick:"mas(this);hideAll(this);",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded withImg",
            desc: desc("Gertukoak",'BERGARA | Azaitz Unanue: "Frakinga erabilita beste energia jasangarriago batzuetarako trantsizioa atzeratzen gabiltza"'),
            text: imagx2 + "<p>Plataforma irekia da, hainbat talde, elkarte, alderdi politiko, sindikatu eta norbanakok osatzen dute taldea. Manifestu baten inguruan, teknika horren kontrako ekimenak burutzen ditugu. Asanblada eragile bat dauka taldeak, asanblada irekia. 2011n sortu zen eta herritarrei informatzea da gure helburuetako bat, gainera datorkigunaz berba egitea. Era berean, azpimarratu behar dut iaz urrian Gasteizen oso manifestazio jendetsua egin genuela, Gasteizen inoiz egin den jendetsuenekoa, 13.000 lagun inguru batu ginen bertara. Horretaz gain, hainbat udaletan mozioak aurkezten gabiltza, gasa lurpetik ateratzeko fraking teknika erabiliz egin nahi dituzten zundaketen harira.</p><p>Bai, egia da, baina frakinga ez da teknika berria. Frakinga haustura hidraulikoa da. Modu laburrean esanda, hauxe: gas ez konbentzionala erausteko teknika bat. Harrian, pinporta txikietan, harrapatuta dagoen gasa erausteko teknika. Gasa pinporta txiki horietatik ateratzea zaila denez, harria hautsi egiten da, gas molekula horiek libre geratzeko eta erausteko. Eta, hori egiteko, ur txorrota bortitzak erabiltzen dira, ikaragarrizko presiokoak. Zehazki, ura, beste gehigarri batzuk eta harea erabiliz, 700 atmosferako presioko txorrotak jaurtitzen zaizkio harriari. Betiere, lur azpian dagoen harriaz eta gasaz ari gara.</p><p>Hala da, 70eko hamarkadan hasi ziren garatzen eta erabiltzen Ameriketako Estatu Batuetan. Ez zen errentagarria izan urte askoan, baina 2000. urte inguruan hasi ziren erabiltzen errentagarria zelakoan, bereziki, zenbait baldintzapetan. Izan ere, garai hartan, gasaren prezioa handia zen eta 2005ean sortu zen lege berezi bat ahalbidetzen zuena zenbait ingurumen lege ez betetzea, Energy Policy Act delakoa, Dick Cheney Bushen bigarrenaren ardurapean. Traba burokratiko gehienak kenduta, 2005ean hasi zen teknika hau erabiliz gasa lurpetik modu masiboan erausten. Baina, gasaren prezioa murriztu egin zenean, teknika hau erabilita gasa ateratzea horren errentagarri ez zela ikusita, munduan barrena hedatu zuten. Eta hala heldu da Europara eta Euskal Herrira ere. Horretarako, Bushen gobernuak sortu zuen The Global Shale Gas Iniciative delakoa, frakinga zabaltzeko.</p><p>Bai, Polonian, esate baterako. Boom espekulatibo batean murgilduta gaude eta itxaropenak sortzen ari dira, hidrokarburoen mendekotasunaren karrera hau ahalik eta aurreren eroateko, beste energia jasangarriago mota batzuetarako trantsizioa atzeratzeko. Saihestezina den talka baten atzerapena besterik ez da. Oso modu arduragabean egina, gainera, ingurumenarekiko eta osasunarekiko sor ditzakeen kalteak handiak direlako.</p><p>Jendeak uste du Arabako kontu bat dela, baina Euskal Herri osoan daude emakida eskariak. Araban, egia da, petrolioa edota gasa lurpetik ateratzeko hainbat saiakera eta zundaketa egin direla aspaldian. Hori da, esaterako, hidrokarburoen esplorazioa eta ustiapena egitea helburu duen Euskadiko Hidrokarburoak erakundea sortzeko arrazoia. Halere, Gipuzkoan bi emakida daude, eta Bizkaian, Nafarroan eta Iparraldean ere badira asmoak. Kantaurialdeko arroko zenbait plaka geologikotan zerbait atera nahi dute.</p><p>Oraingoz bi eskaera egin dituzte, lurralde osoari eragiten diotenak. Batean, Sustraia deiturikoan, Bergara dago erdi-erdian. Oñatitik Elgoibar Iparralderaino eta Elorriotik Azpeitiko mugaraino doa frakinga erabiliz gasa lurpetik ateratzeko eta ustiatzeko zundatu nahi duten eremu hori. 56.000 hektareako lur eremua da. Bestetik, Tolosaldean, Durangaldean, Araban, Ebro aldean, Nafarroan…, asko dira eskaerak. Ikerketa baimenak dira.</p>",
            author: "",
            title: 'Azaitz Unanue: "Frakinga erabilita beste energia jasangarriago batzuetarako trantsizioa atzeratzen gabiltza"',
            date: "",
            img: imag2
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: desc("Gertukoak",'BERGARA | Lluis Verdaguer, Bartzelonako Taradell herriko alkatea (CIU): "Edukiontzien sistemarekin ezin zaitezke iritsi hiri hondakin guztien %80 birziklatzera"'),
            text: imagx3 + "<p>2002ean hasi ginen atez atekoarekin, baina herriko auzo batean. Eta 2005ean hasi ginen herri osoan, hondakin guztiekin, beirarekin izan ezik. Izan ere, kristala, gaur egun ere, ohiko edukiontzi berdeetan jasotzen dugu.</p><p>6.200 inguru. Bestetik, La Planako Mankomunitatean batzen gara 12 herri; guztira, 32.000 biztanle. Herri handiena Tona da eta 8.500 bat biztanle ditu. 2000 urtean hasi ziren herri horretakoak atez atekoarekin. Kataluniako lehen herria izan zen sistema hori ezartzen.</p><p>Zalantzak eta mesfidantzak baziren biztanle batzuen partetik. Hori egia da, ez gaitezen engaina. Baina, gehiago, ezezaguna izatearren. Ez zen egon kontrakotasun gogorrik. Mesfidantzak zetozen ohiturak aldatzearren, egun eta ordutegi jakin bati lotzearren, hondakinak kalera ateratzeko lehen zegoen askatasuna mugatzearren. Baina gure helburu nagusia zen ahalik eta gehien birziklatzea eta ahalik eta gutxien eroatea zabortegira. Erronka hori geneukan eta argumentu horrekin eskatu zitzaien herritarrei ahalegin bat egitea.</p><p>Bai, bizpahiru hilabetera, %70eko birziklatze mailan geunden. Gerora, poliki-poliki, emaitzak hobetzen joan gara eta ekimen bereziak ere antolatu ditugu hori lortzeko: puntu berde mugikorrak oso kutsakorrak izan daitezkeen materialendako e.a. Egia da, edozelan ere, hasieran, pedagogia lan handia egin genuela, eta hasierako emaitza onak izan bezain laster horren jakitun jarri genituen herritarrak… Jendek ikusi zuen, hasieratik, bere ahaleginak bazuela erantzuna. Guretako, Taradelleko herritarrondako, ohorea da, esaterako, 2011n Katalunian gehien birziklatu zuen herria izatea. Hiri hondakinen %86, gaika sailkatuta jaso genuen.</p><p>Guk gauez jasotzen ditugu, 22:00etatik arrera. Gauerdirako jasota dago dena. Egia da tarte horretan hondakin asko dagoela kalean, baina, behin kamioia pasata, hurrengo egunean ez dago ez poltsarik ez eta edukiontzirik ere. Dena dago oso txukun dago. Ez dago usain txarrik... Ohitura aldatzeaz gain, ez dauka bestelako trabarik sistema honek. Gehiago esango nuke: orain erabakiko bagenu lehenagoko sistemara itzultzea, seguru nago gehiago kostatuko litzaigukeela eta kontrako ahots gehiago izango genituzkeela.</p>",
            author: "",
            title: 'Lluis Verdaguer, Bartzelonako Taradell herriko alkatea (CIU): "Edukiontzien sistemarekin ezin zaitezke iritsi hiri hondakin guztien %80 birziklatzera"',
            date: "",
            img: imag3
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: desc("Gertukoak",'BERGARA | Jesus Elortza: "Lasaitasun mezua igorri nahi diet herritarrei"'),
            text: imagx4 + "<p>Bai, hainbat eta lasterren ekingo diogu prozesu horri, hondakinen bilketa sistemari buruzko elkarrizketa eraikitzailea bideratu nahi baitugu. Herritarren kezkak entzun nahi ditugu, beldurrak uxatu eta herriko giroa baretu. Parte-hartze prozesua definitzen ari gara, orain arte egin direnen formatua berrikusten; laster egongo gara hasteko moduan.</p><p>Ahalegin handia egin dugu herritarrei gure mezua helarazteko. Bilera ugari egin dugu auzo, komertzio, elkarte, industria eta abarrekin. Baina konturatzen gara herritar askorengana ez garela iritsi. Gure nahia da herritarrek birziklatzearen beharraz kontzientzia hartzea, gure ondorengoei inguru ahalik eta duinena uzteko.</p><p>Bosgarren edukiontziarekin oso gutxi birziklatzen da; beraz, errausketa eskatzen du. Zer egin bestela zabor horrekin guztiarekin? Zergatik den txarra? Ona balitz, denok nahiko genuke etxe ondoan. Txarra da garestia delako, ingurua kutsatzen duelako eta errauts oso toxikoak biltzeko zabortegia behar duelako. Gure osasuna eta poltsikoak kaltetzen ditu.</p><p>Gipuzkoan hondakinak tratatzeko 6 konpostatze-gune, tratamendu biologiko mekanikorako 3 planta eta biometanizaziorako eta ontzien aukeraketarako gune bana egingo dira. Horien kostua 183 milioikoa da; errauskailuarena, 444 milioikoa. Birziklaezinak diren hondakinak gutxi dira. Hauek inertizatu eta osasun zein ingurumenarentzat kaltegarriak ez diren hondakindegietan uzten dira.</p><p>Aldaketek beldurra eragiten digute, gaiaren inguruan zuzena ez den informazio ugari zabaldu da eta herritarrak larritu egin dira. Lasaitasun mezua igorri nahi nieke herritarrei. Europako herrialde aurreratuenetan, Danimarkan, Alemanian, Belgikan... hondakinak gaika biltzen dira. Gainera, laster ezin izango da erre birzikla daitekeen ezer. Zertarako gastatu dirutza laster balioko ez duen errauskailu baten? Balkoietako poltsek herritarren protesta erakusten dute. Zilegitasun osoa aitortzen diegu eta entzuteko prest gaude. Era berean, gonbidatu nahi nituzke informazioa jasotzera eta hausnartzera zaborren arazoaz eta gure ondorengoei utzi nahi diegun inguruaz.</p>",
            author: "",
            title: 'Jesus Elortza: "Lasaitasun mezua igorri nahi diet herritarrei"',
            date: "",
            img: imag4
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia x2 y4",
            onclick:"mas(this);hideAll(this);",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded withImg",
            desc: desc("Gertukoak","ELGETA | Hasita daude etxeko konpostagailuen egoera eta funtzionamendua ikuskatzeko etxez etxeko bisitak"),
            text: imagx5 + "<p>Vermican enpresako Joseba Sanchezek bisita horietan erabiltzaileen zalantzak argitu, konpostagailuaren egoera ikusi, eta konpostaren lagin bat hartzen dutela azaldu du. Lagin hori, gero, laborategira eramaten dute ph-a, hezetasuna eta batez ere gazitasuna neurtzeko.</p><p>Orokorrean, erabiltzaileen zalantza edo kezka nagusiak bi direla kontatu du Sanchezek. 'Lehenengo eta behin sortu daitezkeen arazoen inguruan galdetzen du jendeak: eltxoak, karraskariak, usaina... Beste multzo handi bat osatzen dute konposta ondo egiten ari ote diren jakin nahi dutenak'.</p><p>Bisita egin ostean erabiltzaileak bi dokumentu sinatzen ditu: bisita ziurtagiria alde batetik, eta hondakin organiko guztia konpostatzeko konpromisoa jasotzen duen agiria. Ezinbestekoa da konpromiso hori hartzea zaborraren tasan hobaria izateko. Jakin ikuskatzaile hauek konposta egiten duten Debagoieneko erabiltzaile guztien etxeetatik pasako direla, beti ere aurrez hitzordua eginda. Momentuz, Arrasaten eta Aretxabaletan izan dira, eta orain Elgetan eta Antzuolan dabiltza. Adituak esan digu Debagoienean, orokorrean, ondo egiten dela konposta.</p>",
            author: "",
            title: "Hasita daude etxeko konpostagailuen egoera eta funtzionamendua ikuskatzeko etxez etxeko bisitak",
            date: "",
            img: imag5
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: desc("Gertukoak","BERGARA | Gaur aterako dira kalera atez atekoaren kontra, Bergaran"),
            text: imagx6 + "<p>Bergarako herri plataformak  antolatutako protesta ekimen horrek dagoeneko eskuratu ditu hainbat atxikimendu. Debagoienean, Arrasate Garbik, adibidez, bertan izango dela iragartzeaz gainera, arrasatearrei deialdia egin die manifestazioan parte har dezaten.</p><p>Eta gure ibarretik kanpora ere eskuratu du babesa atez atekoaren kontra Debagoienean egingo den lehen manifestazio horrek: 'Lezoko elkarteak lezotarrei egin die deialdia, eta jakin badakigu, besteak beste, Legazpitik ere etorriko dela ordezkaritza. Izan ere, gai hori orain Bergarako problema da, baina, adibidez, Arrasatekoa ere izango da urtebete barru, eta beste leku batzuetakoa ere bai', adierazi du Josu Leturiak, Bergara Garbiako ordezkariak.</p><p>Manifestazioan erabiliko duten leloak adierazten duen moduan, hiru dira egin gura dituzten aldarrikapenak: bosgarren edukiontziaren ezarpena, atez atekoa beharrean; birziklapena bera; eta herriari hitza ematea: 'Leloak aukeratzeko orduan kontu handia izaten ahalegindu gara, nahi dugulako hondakinen atez ateko bilketaren kontra dagoen edozein gure ekimenetan parte hartzeko eroso egon dadila. Azken batean, gu bakarrik bilketa sistemaren kontra gaude. Hau da, politika albo batera laga eta gai honekin normalizazioa da nahi duguna, norberak esan ahal izatea nahi duena. Uste dut denok nahi dugula elkarbizitza normalizatzea', adierazi du Bergara Garbiako ordezkariak.</p><p>Herriari hitza emateko eskaerari dagokionez, berriz, Bergara Garbiak zera adierazi du: 'Tamalez, Bergarako eta inguruko gipuzkoar asko sartuta gauden auzi hau Bilduko gobernu taldeak sortu zuen, oposizioa eta herriaren iritzia kontuan hartu gabe, Bergaran atez ateko sistema inposatu zuenean'. Eta horri gehitu dio bergarar gehienen jarrera 'argia' dela: 'Bergara Garbia herri plataformak 5. edukiontziaren alde eta atez atekoaren zein alkatetzaren era diktatorialaren kontra 4.691 herritarren sinadurak bildu zituen'. Hala ere, 'alkatetzak, herritar gehienek atez atekoaren eta metodo inposatzaile honen aurrean duten desadostasuna ikusita ere, kasurik ez die egin, ezta plataformak gai honen inguruan hitz egiteko eta akordiora heltzeko egindako deiei ere'.</p><p>Eta Bergarako gaurko manifestazioari atxikimendua adierazteko bidalitako prentsa oharrean, irakurketa bera egiten du Arrasate Garbi plataformak, bere kasuan, gogora ekarriz, Arrasaten 6.686 sinadura batu dituztela.</p>",
            author: "",
            title: "Gaur aterako dira kalera atez atekoaren kontra, Bergaran",
            date: "",
            img: imag6
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: desc("Gertukoak",'BERGARA | Sortu: "Atez atekoaren aurkako dinamikaren buru EAJ ageri zaigu Gipuzkoan Garbia plataformen eskutik"'),
            text: '<p>Bergarako Sortuk prentsa ohar baten bidez gogor kritikatu du EAJk hondakinen kudeaketaren gaiaren inguruan izandako jarrera eta Bergarako Udalak azken hilabeteetan egindako ibilbidea babestu dute: "Bergarako udala azken hilabeteetan lantzen ari den ibilbide orria, ehunka herritarren parte hartzearekin. Badirudi herri honetan, ingurumena eta guztion osasunaren onerako, derrigorrezko birziklapenaren alde egitea, herriari muzin egin eta honen borondatearen aurka aritzea leporatzeko arrazoi nahiko dela. EHBilduko zinegotzi eta alkateari inposatzaile eta frankista deitu diote, zeintzuei eta diktaduraren alde guztia eman zuten ezkertiar eta abertzaleak ordezkatzean duten sentsibilitate politikoari. PNVren inkontrolatuek Lezon alkateari bultzakadak eman eta zintzilikarioak txikitu dituzte; Legorretan berriz kuboak eta hondakinak errekara bota dituzte. Hau al da zibizmoa?"</p><p>Sortuk gaineratzen du EAJ agintean zegoenean, "Ezker Abertzalea ilegalizatua zegoela aprobetxatuz" erabaki zutela errauskalilua egitea. "Noiz galdetu zieten Gipuzkoarrei Errauskailua nahi duten edo ez? Inoiz herri galdeketarik egin ez duen alderdiak zilegitasuna du herri galdeketak eskatzeko? Angiozarko herri galdeketa arrakastatsuari kasurik ere egin ez zion alderdia orain galdeketa eske? Zilegia al da ez birziklatzeko eskubidea,  herritarren osasuna kaltetzea eta ingurumena kutsatzeko eskubidea aldarrikatzea?  Akaso ez da botere publikoaren eginbeharra beraien herritarren osasuna zaintzea? Ingurumena zaintzea?". Eta ondorengoa gaineratzen dute: "Esan garbi herriari zein den zuen borondatea: 5.edukiontzia jarri eta errauskailua egin. Baina esan garbi honek zer suposatzen dion herriari termino guztietan, ekonomikoan, ingurumenean eta guztion osasunean. Guk behintzat Erraustea baino nahiago dugu Zero Zabor politikak praktikara eraman eta Antzuola bezala Europan eredugarri izatea. Gipuzkoako Foru Aldundia eta Antzuolako Udalaren hondakinen politikak eredugarritzat aurkeztu ditu Europar Batasunak Europa guztirako. Hori da gure aukera, zentzuzkoa eta garbia. Eman aukera bat, birziklapenari, osasuna eta ingurumenari", diote.</p><p>Prentsa oharrean Sortuk dio "atez atekoaren aurkako dinamikaren buru EAJ ageri" dela Gipuzkoako herri gehienetan, "Garbia izeneko plataformen eskutik". Garbia plataformen helburua nagusiak hiru dira Sorturen ustez:    •    "EHBilduri egurra ematea. Oposiziotik agintera pasa dira ezkertiar abertzaleak. Eskubiaren eta handi mandien pribilejioak kolokan jartzen ari dira: lana eta aberastasuna banatuz; murrizketei aurre eginez; etxegabetzeen aurrean tinko azalduz; obra faraonikoak geldituz. Hori ezin du jasan alderdiak,ezta  politika honetan babesle dituen PP eta PSEk ere. Errauskailua egin eta negozioarekin jarraitzea. Gipuzkoarren 500 milioi euro agindu dizkiete beraien orbitako enpresei. Gainera diru hori enpresa/banketxe horien eskuetara iritsiko dela ziurtatzeko kontratuak blindatu dituzte Swapen bidez. Benetako arazoak direnak hondakinen gerraren ke-lainoetan ezkutatzea. Etxeko hondakinak banatu eta birziklatzera ateratzea al da Bergararron arazorik potoloena? Edo askoz garrantzitsuagoak dira enplegu falta, etxegabetzeak, kinka larrian diren enpresak, kalitatezko osasuna eta hezkuntza,…?"</p>',
            author: "",
            title: 'Sortu: "Atez atekoaren aurkako dinamikaren buru EAJ ageri zaigu Gipuzkoan Garbia plataformen eskutik"',
            date: "",
            img: ""
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia y2",
            onclick:"mas(this);hideAll(this);",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded withImg",
            desc: desc("Gertukoak","BERGARA | Dolmenen ibilbidea aurkeztu dute"),
            text: imagx7 + "<p>Bertan, Bergara, Soraluze eta Elgoibar arteko ondare natural eta kulturala balioan jartzeko ibilbide tematikoa egin dute. Aurkezpenean, 3 Udaletako ordezkariez aparte, Gipuzkoako Foru Aldundiko, Aranzadiko zientzia elkarteko eta Debegesako ordezkariak izan dira.</p><p>Barnealdeko turismoa sustatzeko asmoz sortutako proiektu honek, gure arbasoen bizimodua eta eurek utzitako ondarean oinarrituta dago, izan ere, 3.000 urte baino gehiago dituzten arrasto arkeologikoak daude eta ekimenaren antolatzaileek horren potentziala erabili nahi dute.</p><p>Dolmenen ibilbideak, PR-Gi 94 izendapena du, 20 kilometro dauzka eta Karakate-Agirreburu banalerroa zeharkatzen du, Elgoibar, Soraluze eta Bergarako udalerriak lotuz. Ibilbidean, Elosu-Plazentzia estazio megalitikoa osatzen duten tumulu eta dolmenak ikusi daitezke. Guztira, 16 monumentu daude, 10 tumulu eta 6 trikuharri.</p><p>Ibilbide honek Elgoibarko, Soraluzeko eta Bergarako turismoari bultzada eman nahi dio eta hori lortzeko hiru herrietako ordezkariak elkarlanean aritu dira.</p><p>Aranzadi zientzia elkarteko Juantxo Agirrek ingurunearen balio arkeologikoa nabarmendu du eta Arribiribileta monumentuaren adibidea jarri du eta gutxinaka bada ere, ibilbidea musealizatzeko helburua dute.</p><p>Ekimenaren sustatzaileek ibilbidearen inguruan, hilero ekintzak antolatuko dituzte, eta horien artean, bisita gidatuak eta familientzako planak. Horietatik lehenengoa, martxoaren 30ean izango da eta bertan izena emateko Debanaturara edo Debegesara deitu behar da.</p>",
            author: "",
            title: "Dolmenen ibilbidea aurkeztu dute",
            date: "",
            img: imag7
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat: "Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","EKONOMIA | Fagor Brandt-eko zuzendari izan denak hartu du Fabian Bilbaoren lekukoa."),
            intro: "<p>Sergio Treviño da aurrerantzean Fagor Etxetresnak taldeko zuzendari orokorra, Fabian Bilbaok osasun arazoengatik kargua utzi ondoren. 2011 geroztik, Treviñok Frantzian egiten zuen lan, Fagor Brandt zuzentzen.</p>",
            text: "Horren aurretik, Etxetresnak taldearen nazioarteko marketin arduraduna eta, gero, Egosketa saileko zuzendaria izan zen. Fagorrek azpimarratzen du taldearekiko Treviñok duen 'lotura handia'.</p>",
            author: "Leire Kortabarria",
            title: "Fagor Brandt-eko zuzendari izan denak hartu du Fabian Bilbaoren lekukoa",
            date: "Api. 12, 2013, gauerdia",
            img: "<img width='100%' class='imag rounded imgY2' src='http://goiena.net/site_media/photologue/photos/cache/SergioTrevin%CC%83o_display.jpg'/>"
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","EKONOMIA | Positiboan itxi du 2012a Elgetako Udalak."),
            intro: "Soberakin garbia 37.853,23 eurokoa da.", 
            text: "<p>Elgetako udalbatzak martxoko osoko bilkuran aztertu zuen 2012ko likidazioa. Bestela esanda, Udalaren iazko balantze ekonomikoa. Positiboan itxi du Udalak 2012a: alkateak azaldu duenez 52.198,87 euroko soberakinarekin.<br>Urte osorako 1.906.161,51 euroko aurrekontua onartu zuen udalbatzak, baina ekitaldi amaieran kopurua 2.406.842,51 eurokoa izan da. 'Igoera horren aldaketa nagusia da hainbat dirulaguntza lortu direla, tartean eskola ondoan martxan dauden lanak finantzatzeko', adierazi du Oxel Erostarbe alkateak.</p><h3>Gerakina 2013rako</h3><p>Aldundia Udalen zorpetze mailaren jarraipena egiten ari da. Elgetako Udalaren likidazio espedienteak jasotzen duenez gerakina 38.140,38 eurokoa da. Erostarbek argitu du kopuru horren barruan dagoela langileei ordaindu ez zaien Gabonetako ordainsaria: 14.345,64 euro, hain zuzen ere. 'Abenduko ordainsaria ordaintzea balego, erabili ahal izango da', jasotzen du likidazio espedienteak. 'Elgetako Udalak ondo egin ditu etxeko lanak', esan du alkateak, eta soberakina gastu arruntari edo inbertsioei aurre egiteko erabil dezakegu'. Soberakin garbia 37.853,23 eurokoa da.</p>",
            author: "Larraitz Zeberio",
            title: "Positiboan itxi du 2012a Elgetako Udalak",
            date: "Api. 11, 2013, 9 p.m.",
            img: "<img width='100%' class='imag rounded imgY2' src='http://goiena.net/site_media/photologue/photos/cache/Imagen%202_203_display.png'>"
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","EKONOMIA | \"Behar ez dugunetik murrizteko\" eskatu du AHT gelditu! plataformak"),
            intro: "<p>\"Azken aurrekontuetan egin nahi diren murrizketak\" salatzeko asmoarekin AHT gelditu! plataformak gizarteko arlo ezberdinetako kideak batu ditu Kulturateko areto nagusian. Solasaldian, krisiak eragindako diru sarreren murrizketetan izandako 'lehentasun faltaz' mintzatu dira gaur.</p>",
            text: "<p>\"Arlo ezberdinetan egongo diren murrizketa zerrenda ezagutu ondoren eta AHTren proiektuko partidek murrizketarik jasango ez dutela jakin ostean\" martxan jarritako ekimena izan da gaurkoa. Guztira 20 bat lagun batu dira AHTk izango dituen partidei buruz hitz egiteko. Arrate Landa irakasleak dioen moduan, \"guzti hau ez da Madrildik etorritako kontu bat, hemen 2009an hasi ginen murrizketak egiten'. Irakaskuntza, osasunarekin batera, murrizketa gehien jasaten ari den sektorea da: \"Lehentasun kontu bat, diru hori non eta nola gastatu\", dio Osakidetzako langile Anafran Astigarragak.</p><p><strong>Heldu eta gazteek</strong></p><p>Bi sektore hauetan ere kexak ugariak dira. \"Gazteon etorkizuna hipotekatzen ari dira\", salatu du Elar Alonsok. Ildo beretik mintzatu da Itziar Usandizaga, LAB helduetako kidea. Bere ustez, lehentasun kontu bat: 'Babesa behar duten pertsonak babestu beharrean enpresa handien alde egin dute'.</p><p>Bakoitzak bere esparruan jasaten dituen murrizketez hitz egin ostean, bertaratu direnen solasaldi ireki bat egon da.</p>",
            author: "Imanol Gallego",
            title: "\"Behar ez dugunetik murrizteko\" eskatu du AHT gelditu! plataformak",
            date: "Api. 10, 2013, 8:20 p.m",
            img: "<img width='100%' class='imag rounded imgY2' src='http://goiena.net/site_media/photologue/photos/cache/Captura%20de%20pantalla%202013-04-10%20a%20las%2020.17.11_display.jpg'>"
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","EKONOMIA | Eredu gizatiarrago baten aldeko mezua bidali zuten Ibarretxek, Pagolak eta Sarasuak atzo Oñatin"),
            intro: "<p>Hiru ikuspuntutik, baina, funtsean, oso antzeko mezua zabaldu nahi izan zuten atzo Juan Jose Ibarretxek, Jose Antonio Pagolak eta Jon Sarasuak Oñatin: krisitik irteteko, gizarte gizatiarragoa behar da. Horixe adierazi zuten atzo Santa Ana antzokian Debagoieneko elizbarrutiaren eskutik egin zen mahai-inguruan. Antzokia lepo bete zuten herritarrek.</p>",
            text: "<p>Juan Jose Ibarretxe lehendakari ohiak ekonomiaren ikuspuntutik aztertu zuen krisia, eta zenbait tesi gezurtatzen ahalegindu zen: adibidez, zenbat eta gehiago irabazi, orduan eta zoriontsuago dela norbera; edo Europako herrialde bakoitzak bere zor publikoaren neurriko interesa ordaintzen duela. Tesi ekonomikoak herrien identitatearen gaineko ideiekin uztartu zituen Ibarretxek, esanez, besteak beste, Euskal Herria ez dela izango baldin eta elkartasunean eta \"bestearen\" defentsan oinarrituta ez badago.<br><br>Gaineratu zuenez, \"neurtzen dugun horren gainean hartzen ditugu erabakiak\", eta barne produktu gordina eta adierazle makroekonomikoak neurtzen dira gaur egun, batez ere, eta \"barne produktu gordinak produkzioa bakarrik neurtzen du, ez zoriontasuna\", esan zuen Ibarretxek. Ondorioz, bere iritziz, etorkizunerako formula hau da: \"Ikerkuntza, garapena, berrikuntza… eta kultura\".</p><h3>\"Solidarioak eta errukitsuak izan behar gara\"</h3><p>Jose Antonio Pagola teologoak hartu zuen hitza segidan. Honako gogoeta planteatuz hasi zen: \"Jesusek ba ote du zerikusirik gaur egungo krisiarekin?\" Eta Kristautasunaren ikuspuntutik krisiak izan ditzakeen ikasgai batzuk konpartitu zituen entzuleekin: \"Gure gizartea puskatzen ari\" dela ohartarazi zuen; baina, era berean, \"krisia duintasunez\" bizi izaten badugu, \"humanoagoak\" egingo garela esan zuen. Teologoaren iritziz, \"gaur egungo gizartean, dena dago krisian\", ez bakarrik ekonomia; eta krisia \"luzerako\" doa. Horregatik, bere iritziz, \"solidarioak izan behar gara\", eta baita \"errukitsuak\" ere. Krisitik irtenbidea, batez ere, jendartearengan dago.</p><h3>\"Berriro ametsa produzitu behar dugu\"</h3><p>Azkenik, Jon Sarasua irakasleak esan zuen \"baloreen krisian\" gaudela eta hori dagoela krisi ekonomikoaren sakonean. Hark ere gaur egungo garapen eredua gaitzetsi zuen, \"posible ez\" dela esanez. \"Aberats berrien sindromea daukagu: modernoak izateko antsietatea daukagu\", esan zion entzulegoari. Baina krisiak \"aukerak eta alderdi positiboak ere\" badituela esan zuen: \"Humanizazioaren norabideetako bat gutxiagotzean\" dago, Sarasuaren iritziz. Itxaropenerako mezua izan zen berea: Berriro ametsa produzitu behar dugula iruditzen zait eta ametsaren horizonteak marrazteko gai gara\". Eta, aurreko bi hizlariekin koinzidituz, \"autoeraketa, elkartasuna, iraunkortasuna, nortasuna eta kultura\" aipatu zituen \"helduleku\" gisa.</p>",
            author: "Leire Kortarria",
            title: "Eredu gizatiarrago baten aldeko mezua bidali zuten Ibarretxek, Pagolak eta Sarasuak atzo Oñatin",
            date: "Api. 10, 2013, 10:06 a.m.",
            img: "<img width='100%' class='imag rounded imgY2' src='http://goiena.net/site_media/photologue/photos/cache/P1200022_display.JPG'>"
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","EKONOMIA | Biztanleen %44k ez dute hiru hilabeteko gastuak ordaintzeko adina diru"),
            intro: "<p>Hego Euskal Herriko eta Espainiako biztanleen %39k ez du inoiz aurrezten, eta %44k ez dute hiru hilabeteko gastuak kubritzeko adina diru. Horiek dira ING Taldeak iazko azaroan Europako 14 herrialdetan egindako inkesta baten emaitza batzuk.</p><p>Askotan entzuten dena gezurtatuz, Europako eta Espainiako batez bestekoak oso antzekoak dira inkesta horretan.</p>",
            text: "<p>ING Taldeak 14.000 europar inkestatu zituen iazko azaroan. Hego Euskal Herrian eta Espainian, aurrezteko ohitura txikia dago: biztanleen ia erdiek (% 46k) esan zuten 'noizbehinka', ahal zutenean bakarrik aurreratzen zutela dirua. Europako batez bestekoak oso antzekoak dira: europarren %17k aurrezteko ohitura dauka (espainiarren %15ek), eta %32k ez du inoiz aurrezten.<br><br>Gutxien aurrezten dutenak itailarrak dira: %55ek ez dute inoiz aurrezten, eta %6k bakarrik dute aurrezteko ohitura. Beste muturrean daude austriarrak eta frantsesak: Austrian, %28k sistematikoki aurrezten du, eta Frantzian, %25ek<br><br>Larrialdi egoera etorriz gero, Hego Euskal Herriko eta Espainiako biztanleen %44k esan dute ez luketela nahikoa diru izango hiru hilabetean gastuei aurre egiteko, bat-batean diru-iturririk gabe geratuko balira. Beste behin, Europako batez bestekoa oso antzekoa da: %47. Errumanian, erantzun hori eman dute inkestatuen %52k, eta Eslovakian, %29k.</p><h3>Dirua, itsulapikoan</h3><p>Dena dela, zertarako aurrezten duten galdetuta, Espainian, larrialdi-fondo bat izateko aurrezten dutela erantzun dute gehienek; bigarren helburua, fakturak ordaintzea; gero, seme-alaben heziketa; erretiroa, segidan; eta etxebizitza, bosgarren helburua. Europan, zertxobait aldatzen da helburuen ordena: lehenengo helburua larrialdi-fondoa da; bigarrena, seme-alaben heziketa; hirugarrena, etxebizitza; laugarrena, fakturak; eta bosgarrena, zorrak kentzea.<br><br>Azkenik, dirua non gordetzen duten galdetuta, europarren %17k eta espainiarren %18k esan dute etxeko itsulapikoan edo segurtasun-kutxan daukatela. Hala ere, kontu korronteak eta aurrezki-kontuak dira aurrezkiak gordetzeko tresna erabilienak Europan.</p>",
            author: "Leire Kortarria",
            title: "Biztanleen %44k ez dute hiru hilabeteko gastuak ordaintzeko adina diru",
            date: "Api. 9, 2013, 12:55 p.m. ",
            img: ''
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","EKONOMIA | Arrasateko Canas Esteban enpresako langileak greban"),
            intro: "<p>Canas Esteban eraikuntza enpresako langileak greban daude apirilaren 2az geroztik. Elkarretaratzeak egiten ari dira egoera salatzeko eta enpresako jabeek negoziaziorako ateak itxi dizkietela diote.</p>",
            text: "<p>Gaur goizean Arrasateko Biteri plazan elkarretaratzea egin dute Canas Esteban enpresako langileek. Enpresako jabeekin hitz egin ostean greban daude pasa den astetik. Urte osoan 1.000 euro kobratu dituzte eta langileen esanetan, 2 urtez atzerapenak jasan dituzte soldatak kobratzerako orduan. Guzti hori salatzeko elkarretaratzeak egiteari ekin diote, herritarrek egoera horren berri izan dezaten. Horrekin batera, pankartak jarri dituzte herriko hainbat puntutan, baina enpresako jabeek berehala kendu dituztela salatu dute langileek.</p><p>Horren guztiaren aurrean, Goiena, enpresako ordezkariekin kontaktuan jartzen saiatu den arren, oraindik ez du lortu.</p>",
            author: "Jagoba Domingo",
            title: "Arrasateko Canas Esteban enpresako langileak greban",
            date: "Api. 9, 2013, 12:53 p.m.",
            img: "<img width='100%' class='imag rounded imgY2' src='http://goiena.net/site_media/photologue/photos/cache/P1010499%20copia_display.JPG'>"
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","EKONOMIA | Arrisku handiko finantza-produktuek kaltetutakoendako erreklamazio-formularioa sortu du Kontsumobidek"),
            intro: "<p>Kontsumobidek, Euskadiko Kontsumo Erakundeak, arrisku handiko finantza-aktiboak 'edo antzeko produktuak' dituztenen erreklamazio 'zehatzak' jakiteko formularioa egin du. Inork erreklamazioren bat badauka, berau bete eta eskatzen diren dokumentuak eman beharko dizkio Kontsumobideri.</p>",
            text: "<p>Eusko Legebiltzarrak otsailaren 28ko osoko bilkuran agindu zion Kontsumobideri aktibo finantzario arriskutsuak dituzten bezeroen eta haiek merkaturatu edo emititu zituzten enpresen artean bitartekaria izan zedin.<br><br>Gaur Kontsumobidek<a href=\"http://www.kontsumobide.euskadi.net\">bere webgunea</a>n jakinarazi duenez, agindu hori jaso zuenetik, 'finantza-erakundeekin, enpresekin eta kaltetuen ordezkariekin' harremanetan egon da eta harremanetan egoten jarraitzen du, erreklamazioei konponbidea topatzeko.<br><br>Orain, webgune berean jarri du jendearen eskura erreklamazio-formulario berria. Hemendik deskargatu daiteke: <a href=\"http://www.kontsumobide.euskadi.net\">www.kontsumobide.euskadi.net</a>.</p>",
            author: "Leire Kortabarria",
            title: "Arrisku handiko finantza-produktuek kaltetutakoendako erreklamazio-formularioa sortu du Kontsumobidek",
            date: "Api. 9, 2013, 12:12 p.m.",
            img: ''
        });

        section.item.push({
            id: section.item.length + 1,
            clase:"noticia",
            onclick:"mas(this);hideAll(this);",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: desc("Zaletasunak","EKONOMIA | Autoenplegu saioak eta tailerrak deitu ditu Mankomunitateak"),
            intro: "<p>Eskualdeko Enplegu Plana aurrera eroaten jarraitzen du Debagoieneko Mankomunitateko Garapen Agentziak, eta aurreikusita zeuden bi deialdi egin ditu: batetik, autoenplegurako sentsibilizazio saioak, eta bestetik, ekintzaile berriendako eta enpresa txikiendako tailerrak. Bietarako izenemate epea zabalik dago.</p>",
            text: "<p>Ekintzetako bat, autoenplegurako sentsibilizazio saioak, publiko orokorrari zuzenduta dago, berdin da negozio-ideia bat duten edo ez. Helburua da autoenpleguaren potentzialtasuna adieraztea eta aurrez egin beharreko azterketaren garrantzia azpimarratzea. Honako gaiak eta beste batzuk landuko dituzte:<em>Krisi garaian… autoenplegua moda bat, irtenbide bat, soluzio bat al da?; Autoenplegua (erantzukizunaz), plazer hutsa; Faktore kritikoak ekimen berriaren arrakasta ziurtatzeko edo porrota ekiditeko;</em>eta<em>Bizitako autoenplegu esperientziei buruzko elkarrizketak</em>. Saio batzuk euskaraz eta beste batzuk espainolez izango dira, honako herri, egun eta orduetan:<br><br></p><ul><li>Antzuolan, apirilaren 22an, Olaranen, 10:00-13:00, gaztelaniaz</li><li>Eskoriatzan, apirilaren 30ean,Ibarraundin, 15:00-18:00, euskaraz</li><li>Arrasaten, maiatzaren 7an, Etxaluzen, 15:00-18:00, gaztelaniaz</li><li>Bergaran, maiatzaren 14an, Irizarren, 15:00-18:00, euskaraz</li><li>Aretxabaletan, maiatzaren 20an, Arkupen, 10:00-13:00, gaztelaniaz</li><li>Oñatin, maiatzaren 28an, Zubillagako Olaburu zentroan, 15:00-18:00, euskaraz</li></ul><p><br>Leku kopuru mugatua dagoenez, komeni da lehenbailehen izena ematea. Apirilaren 26a da horretarako azken eguna.<br><br>Beste eskaintza zehazki ekintzaile berriendako eta enpresa txikiak dituztenendako dago bideratuta, eta tailer batzuk dira, honakoak:<br><br></p><ul><li><em>Datu babesaren ezarpena enpresa txikietan</em>(6 ordu), ekainak 11 eta 12, 10:00-13:00</li><li><em>Sare sozialak eta mikroenpresa </em>(4 ordu), ekainak 19, 09:00-13:00</li><li><em>Kudeaketaren kontrola mikroenpresan</em>(5 ordu), uztailak 1, 09:00-14:00</li><li><em>Langile autonomoentzako tributazioa</em>(4 ordu), uztailak 8 eta 10, 15:00-17:00.</li></ul><p><br>Denak Mankomunitatearen eraikinean izango dira. Tailer baten baino gehiagotan parte har dezake norberak, eta, leku kopurua mugatua denez, izena eman behar da. Horretarako azken eguna maiatzaren 31 da.<br><br>Informazio gehiagorako edo izena emateko, deitu Mankomunitatera (943 79 30 90) edo bidali mezua <a href=\"mailto:rgarcia@debagoiena.net\">rgarcia@debagoiena.net</a> helbidera.</p>",
            author: "Leire Kortabarria",
            title: "Autoenplegu saioak eta tailerrak deitu ditu Mankomunitateak",
            date: "Api. 9, 2013, gauerdia",
            img: ''
        });


        $('#noticias').masonry("destroy");


        var html = Mustache.to_html(Template.noticia(), section);
        $('.catHeader').remove();
        $('#not').prepend(header);
        $('#noticias').html(html);

        document.getElementsByTagName("body")[0].style.backgroundColor = "#f4f5f5";


        $('#noticias').masonry({
            itemSelector: '.noticia',
            isFitWidth: true,
            isAnimated: true
        });

    };

    function desc (cat,desc){
        var span = "";
        
        switch(cat)
        {
            case "Agenda":
                span = "<span style='font-weight:bold;color:rgb(134, 162, 11);'>";
                break;
            case "Kirol agenda":
                span = "<span style='font-weight:bold;color:rgb(134, 162, 11);'>";
                break;
            case "Zaletasunak":
                span = "<span style='font-weight:bold;color:rgb(0, 143, 193);'>";
                break;
            case "Gertukoak":
                span = "<span style='font-weight:bold;color:rgb(250, 187, 0);'>";
                break;
            default:
                span = "";
        }
        var b = desc.indexOf('|');
        desc = span + desc.substring(0,b+1) + "</span>" + desc.substring(b+1);
        return desc;
    } 

    function imgFinder (img){
        var imags = [];

        var noimag = 0;
        var h = img.indexOf('<img');
        var h2 = img.indexOf('src="');
        var b = img.indexOf('.jpg');
        var b4 = img.indexOf('.png');
        var b2 = img.indexOf('.JPG');
        var h3 = img.indexOf('<iframe"');
        var b3 = img.indexOf('frameborder');

        while (h != -1){
            if ((b2 != -1) && (b != -1) && (b4 != -1)){
            var i = Math.min(b,b2);
            var i = Math.min(i,b4);}
            else
            if ((b2 == -1) && (b == -1))
            if(b4 != -1) var i = b4; else {
            var i = h2+6;
            var noimag = 1;
            }
            else
            if(b4 != -1) {
                var i = Math.max(b,b2);
                var i = Math.min(i,b4);
            }
            else
            var i = Math.max(b,b2);

            var imag = img.substring(h2+5, i+4);
            if(noimag == 0){
            //alert(imag);
            imags.push(imag);}

            img = img.substring(i+4);

            var noimag = 0;
            var b4 = img.indexOf('.png');
            var h = img.indexOf('<img');
            var h2 = img.indexOf('src="');
            var b = img.indexOf('.jpg">');
            var b2 = img.indexOf('.JPG">');
            var h3 = img.indexOf('<iframe"');
            var b3 = img.indexOf('frameborder');
        }

        while (h3 != -1){
            if (b3 != -1)
            noimag = 1;

            var imag = img.substring(h2+5, i+4);
            if(noimag == 0){
            //alert(imag);
            imags.push(imag);}

            img = img.substring(i+4);

            var noimag = 0;
            var h = img.indexOf('<img');
            var h2 = img.indexOf('src="');
            var b = img.indexOf('.jpg">');
            var b2 = img.indexOf('.JPG">');
            var h3 = img.indexOf('<iframe"');
            var b3 = img.indexOf('frameborder');
        }

        imag = "<img src='"+imags[0]+"' width='320px' height='280px' />";

        return imag;
    }

    function textFinder (text){

        var b = text.indexOf('.png">');
        var b2 = text.indexOf('.jpg">');
        var b3 = text.indexOf('<div><table border');

        if((b!=-1)&&(b2!=-1))
        var i = Math.min(b,b2);
        else
        var i = Math.max(b,b2);

        //var txt = text.substring(i+6);
        var txt = text.substring(i+6,b3);
        //alert(txt);

        return txt;
    }

    Category();

    return {
        template: function(o){ Templating(o);},
        category: function(){ Category();}
    };


}).call(this);
