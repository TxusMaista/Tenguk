Services = (function() {

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

        var img = "./assets/images/libro.jpg";
        imag = "<img width='100%' class='imag rounded imgY4' src='"+img+"'/>";
        imagx = "<img width='100%' src='"+img+"'/>";
        var img = "./assets/images/futbol.jpg";
        imag2 = "<img width='100%' class='imag rounded imgY2' src='"+img+"'/>";
        var img = "./assets/images//tren.jpeg";
        imag3 = "<img width='100%' class='imag rounded imgY2' src='"+img+"'/>";


        section.item.push({
            id:'1',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded",
            desc: "1 > GASTRONOMIA | Abian da Jakiberri ideia-Lehiaketa, 'Healthy Basque Fast Food' produktu berritzaileak sortzeko asmoz.",
            text: imagx + "<p>Jakiberri Proiektua, 'Healthy Fast Food' tankerako arin prestatzeko euskal janari berri, naturala, osa- suntsua, anitza eta nutritiboa izango den produktuak lortzeko ikerkuntza proiektua da.</p><p>Jakiberri Proiektuaren asmoa euskal jatorrizko 'Healthy Fast Food' sukal- daritza mota berritzailea sortzea da, Obama Presidentearen legediarekin bat letorkeena.</p><p>Jakiberri Proiektua ISEAk (Corporacion MONDRAGON), JAKIONek eta AZARO FUNDAZIOAk bultzatutakoa da, horre- tarako BASQUE CULINARY CENTER eta HAZI laguntza dutelarik.</p><p>Nahiz eta gaur egun 'Healthy Bas- que Fast Food' eskaintzarik ez egon, Jakiberri Proiektuaren helburua da, gure sormen potentziala, ezagutza, tradizioa eta gure gastronomiako giza kolektiboa uztartzea da eta horrela elikadura mota berria, naturala, osasuntsua, anitza eta nutritiboa lortzeko.</p><p>Jakiberri proiektuaren testuinguruan ideia-lehiaketa bat abian jarri izan da 'Euskal Healthy Fast Food' balizko produktuak aurkitzeko asmoz. 1.000 Euroko sari bat eskainiko zaio propo- samen hoberena aurkeztuko duen parte-hartzaileari. Horretaz gain, irabazlearen ideia edo lehiaketan parte hartuko duen beste edozeinen ideia komertzializatuko balitz, Jakibe- rri Lan-Taldeak bere proposatzailea saritu egingo luke. Lehiaketari buruz argibideak eskuratzeko ISEAko webgu- nera (www.iseamcc.net) edo ELKAR- BIDE (www.elkarbide.net) webgune sozialera jo daiteke. Bertan lehiake- taren arauaz gain, parte hartzeko galdera-formulategiak aurkitu ahal</p>",
            author: "",
            title: "Abian da Jakiberri ideia-Lehiaketa, 'Healthy Basque Fast Food' produktu berritzaileak sortzeko asmoz.",
            date: "",
            img: ''
        });

        section.item.push({
            id:'2',
            clase:"noticia y2",
            onclick:"mas(this)",
            cat:"Kirol agenda",
            catclass:"catHeaderMin berdea rounded withImg",
            desc: "2 > ARRASATE | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "<p>Jakiberri Proiektua, 'Healthy Fast Food' tankerako arin prestatzeko euskal janari berri, naturala, osa- suntsua, anitza eta nutritiboa izango den produktuak lortzeko ikerkuntza proiektua da.</p><p>Jakiberri Proiektuaren asmoa euskal jatorrizko 'Healthy Fast Food' sukal- daritza mota berritzailea sortzea da, Obama Presidentearen legediarekin bat letorkeena.</p><p>Jakiberri Proiektua ISEAk (Corporacion MONDRAGON), JAKIONek eta AZARO FUNDAZIOAk bultzatutakoa da, horre- tarako BASQUE CULINARY CENTER eta HAZI laguntza dutelarik.</p><p>Nahiz eta gaur egun 'Healthy Bas- que Fast Food' eskaintzarik ez egon, Jakiberri Proiektuaren helburua da, gure sormen potentziala, ezagutza, tradizioa eta gure gastronomiako giza kolektiboa uztartzea da eta horrela elikadura mota berria, naturala, osasuntsua, anitza eta nutritiboa lortzeko.</p><p>Jakiberri proiektuaren testuinguruan ideia-lehiaketa bat abian jarri izan da 'Euskal Healthy Fast Food' balizko produktuak aurkitzeko asmoz. 1.000 Euroko sari bat eskainiko zaio propo- samen hoberena aurkeztuko duen parte-hartzaileari. Horretaz gain, irabazlearen ideia edo lehiaketan parte hartuko duen beste edozeinen ideia komertzializatuko balitz, Jakibe- rri Lan-Taldeak bere proposatzailea saritu egingo luke. Lehiaketari buruz argibideak eskuratzeko ISEAko webgu- nera (www.iseamcc.net) edo ELKAR- BIDE (www.elkarbide.net) webgune sozialera jo daiteke. Bertan lehiake- taren arauaz gain, parte hartzeko galdera-formulategiak aurkitu ahal</p>",
            author: "",
            title: "Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            date: "",
            img: imag2
        });

        section.item.push({
            id:'3',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "3 BERGARA | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            id:'4',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "4 ESKORIATZA | Udalak antolatu ditu Xake txapelketak.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            id:'5',
            clase:"noticia y2",
            onclick:"mas(this)",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded withImg",
            desc: "5 > Vasco-Navarro trenbidearen itxieraren gaineko erakusketa.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: imag3
        });

        section.item.push({
            id:'6',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: "6 > Etxeko gazteenak igerilekuan, arrainak itsasoan bezala.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            id:'7',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: "7 > Dozena bat neska-mutiko futbolean Gabonetako lehiaketan",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            id:'8',
            clase:"noticia y2",
            onclick:"mas(this)",
            cat:"Kirol agenda",
            catclass:"catHeaderMin berdea rounded withImg",
            desc: "8 > ARRASATE | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "<p>Jakiberri Proiektua, 'Healthy Fast Food' tankerako arin prestatzeko euskal janari berri, naturala, osa- suntsua, anitza eta nutritiboa izango den produktuak lortzeko ikerkuntza proiektua da.</p><p>Jakiberri Proiektuaren asmoa euskal jatorrizko 'Healthy Fast Food' sukal- daritza mota berritzailea sortzea da, Obama Presidentearen legediarekin bat letorkeena.</p><p>Jakiberri Proiektua ISEAk (Corporacion MONDRAGON), JAKIONek eta AZARO FUNDAZIOAk bultzatutakoa da, horre- tarako BASQUE CULINARY CENTER eta HAZI laguntza dutelarik.</p><p>Nahiz eta gaur egun 'Healthy Bas- que Fast Food' eskaintzarik ez egon, Jakiberri Proiektuaren helburua da, gure sormen potentziala, ezagutza, tradizioa eta gure gastronomiako giza kolektiboa uztartzea da eta horrela elikadura mota berria, naturala, osasuntsua, anitza eta nutritiboa lortzeko.</p><p>Jakiberri proiektuaren testuinguruan ideia-lehiaketa bat abian jarri izan da 'Euskal Healthy Fast Food' balizko produktuak aurkitzeko asmoz. 1.000 Euroko sari bat eskainiko zaio propo- samen hoberena aurkeztuko duen parte-hartzaileari. Horretaz gain, irabazlearen ideia edo lehiaketan parte hartuko duen beste edozeinen ideia komertzializatuko balitz, Jakibe- rri Lan-Taldeak bere proposatzailea saritu egingo luke. Lehiaketari buruz argibideak eskuratzeko ISEAko webgu- nera (www.iseamcc.net) edo ELKAR- BIDE (www.elkarbide.net) webgune sozialera jo daiteke. Bertan lehiake- taren arauaz gain, parte hartzeko galdera-formulategiak aurkitu ahal</p>",
            author: "",
            title: "",
            date: "",
            img: imag2

        });

        section.item.push({
            id:'9',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "9 > ESKORIATZA | Udalak antolatu ditu Xake txapelketak.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });


        section.item.push({
            id:'10',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "10 > ESKORIATZA | Udalak antolatu ditu Xake txapelketak.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            id:'11',
            clase:"noticia y2",
            onclick:"mas(this)",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: "11 > Vasco-Navarro trenbidearen itxieraren gaineko erakusketa.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: imag3
        });

        section.item.push({
            id:'12',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: "12 > Etxeko gazteenak igerilekuan, arrainak itsasoan bezala.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            id:'13',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: "13 > Dozena bat neska-mutiko futbolean Gabonetako lehiaketan",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            id:'14',
            clase:"noticia x2 y4",
            onclick:"mas(this)",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded withImg",
            desc: "14 > GASTRONOMIA | Abian da Jakiberri ideia-Lehiaketa, 'Healthy Basque Fast Food' produktu berritzaileak sortzeko asmoz.",
            text: imagx + "<p>Jakiberri Proiektua, 'Healthy Fast Food' tankerako arin prestatzeko euskal janari berri, naturala, osa- suntsua, anitza eta nutritiboa izango den produktuak lortzeko ikerkuntza proiektua da.</p><p>Jakiberri Proiektuaren asmoa euskal jatorrizko 'Healthy Fast Food' sukal- daritza mota berritzailea sortzea da, Obama Presidentearen legediarekin bat letorkeena.</p><p>Jakiberri Proiektua ISEAk (Corporacion MONDRAGON), JAKIONek eta AZARO FUNDAZIOAk bultzatutakoa da, horre- tarako BASQUE CULINARY CENTER eta HAZI laguntza dutelarik.</p><p>Nahiz eta gaur egun 'Healthy Bas- que Fast Food' eskaintzarik ez egon, Jakiberri Proiektuaren helburua da, gure sormen potentziala, ezagutza, tradizioa eta gure gastronomiako giza kolektiboa uztartzea da eta horrela elikadura mota berria, naturala, osasuntsua, anitza eta nutritiboa lortzeko.</p><p>Jakiberri proiektuaren testuinguruan ideia-lehiaketa bat abian jarri izan da 'Euskal Healthy Fast Food' balizko produktuak aurkitzeko asmoz. 1.000 Euroko sari bat eskainiko zaio propo- samen hoberena aurkeztuko duen parte-hartzaileari. Horretaz gain, irabazlearen ideia edo lehiaketan parte hartuko duen beste edozeinen ideia komertzializatuko balitz, Jakibe- rri Lan-Taldeak bere proposatzailea saritu egingo luke. Lehiaketari buruz argibideak eskuratzeko ISEAko webgu- nera (www.iseamcc.net) edo ELKAR- BIDE (www.elkarbide.net) webgune sozialera jo daiteke. Bertan lehiake- taren arauaz gain, parte hartzeko galdera-formulategiak aurkitu ahal</p>",
            author: "",
            title: "Abian da Jakiberri ideia-Lehiaketa, 'Healthy Basque Fast Food' produktu berritzaileak sortzeko asmoz.",
            date: "",
            img: imag
        });

        section.item.push({
            id:'15',
            clase:"noticia y2",
            onclick:"mas(this)",
            cat:"Kirol agenda",
            catclass:"catHeaderMin berdea rounded withImg",
            desc: "15 > ARRASATE | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "<p>Jakiberri Proiektua, 'Healthy Fast Food' tankerako arin prestatzeko euskal janari berri, naturala, osa- suntsua, anitza eta nutritiboa izango den produktuak lortzeko ikerkuntza proiektua da.</p><p>Jakiberri Proiektuaren asmoa euskal jatorrizko 'Healthy Fast Food' sukal- daritza mota berritzailea sortzea da, Obama Presidentearen legediarekin bat letorkeena.</p><p>Jakiberri Proiektua ISEAk (Corporacion MONDRAGON), JAKIONek eta AZARO FUNDAZIOAk bultzatutakoa da, horre- tarako BASQUE CULINARY CENTER eta HAZI laguntza dutelarik.</p><p>Nahiz eta gaur egun 'Healthy Bas- que Fast Food' eskaintzarik ez egon, Jakiberri Proiektuaren helburua da, gure sormen potentziala, ezagutza, tradizioa eta gure gastronomiako giza kolektiboa uztartzea da eta horrela elikadura mota berria, naturala, osasuntsua, anitza eta nutritiboa lortzeko.</p><p>Jakiberri proiektuaren testuinguruan ideia-lehiaketa bat abian jarri izan da 'Euskal Healthy Fast Food' balizko produktuak aurkitzeko asmoz. 1.000 Euroko sari bat eskainiko zaio propo- samen hoberena aurkeztuko duen parte-hartzaileari. Horretaz gain, irabazlearen ideia edo lehiaketan parte hartuko duen beste edozeinen ideia komertzializatuko balitz, Jakibe- rri Lan-Taldeak bere proposatzailea saritu egingo luke. Lehiaketari buruz argibideak eskuratzeko ISEAko webgu- nera (www.iseamcc.net) edo ELKAR- BIDE (www.elkarbide.net) webgune sozialera jo daiteke. Bertan lehiake- taren arauaz gain, parte hartzeko galdera-formulategiak aurkitu ahal</p>",
            author: "",
            title: "",
            date: "",
            img: imag2
        });

        section.item.push({
            id:'16',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "16 > BERGARA | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            id:'17',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "17 > ESKORIATZA | Udalak antolatu ditu Xake txapelketak.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });
                section.item.push({
            id:'18',
            clase:"noticia y2",
            onclick:"mas(this)",
            cat:"Kirol agenda",
            catclass:"catHeaderMin berdea rounded withImg",
            desc: "18 > ARRASATE | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "<p>Jakiberri Proiektua, 'Healthy Fast Food' tankerako arin prestatzeko euskal janari berri, naturala, osa- suntsua, anitza eta nutritiboa izango den produktuak lortzeko ikerkuntza proiektua da.</p><p>Jakiberri Proiektuaren asmoa euskal jatorrizko 'Healthy Fast Food' sukal- daritza mota berritzailea sortzea da, Obama Presidentearen legediarekin bat letorkeena.</p><p>Jakiberri Proiektua ISEAk (Corporacion MONDRAGON), JAKIONek eta AZARO FUNDAZIOAk bultzatutakoa da, horre- tarako BASQUE CULINARY CENTER eta HAZI laguntza dutelarik.</p><p>Nahiz eta gaur egun 'Healthy Bas- que Fast Food' eskaintzarik ez egon, Jakiberri Proiektuaren helburua da, gure sormen potentziala, ezagutza, tradizioa eta gure gastronomiako giza kolektiboa uztartzea da eta horrela elikadura mota berria, naturala, osasuntsua, anitza eta nutritiboa lortzeko.</p><p>Jakiberri proiektuaren testuinguruan ideia-lehiaketa bat abian jarri izan da 'Euskal Healthy Fast Food' balizko produktuak aurkitzeko asmoz. 1.000 Euroko sari bat eskainiko zaio propo- samen hoberena aurkeztuko duen parte-hartzaileari. Horretaz gain, irabazlearen ideia edo lehiaketan parte hartuko duen beste edozeinen ideia komertzializatuko balitz, Jakibe- rri Lan-Taldeak bere proposatzailea saritu egingo luke. Lehiaketari buruz argibideak eskuratzeko ISEAko webgu- nera (www.iseamcc.net) edo ELKAR- BIDE (www.elkarbide.net) webgune sozialera jo daiteke. Bertan lehiake- taren arauaz gain, parte hartzeko galdera-formulategiak aurkitu ahal</p>",
            author: "",
            title: "",
            date: "",
            img: imag2
        });

        section.item.push({
            id:'19',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "19 > BERGARA | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            id:'20',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "20 > ESKORIATZA | Udalak antolatu ditu Xake txapelketak.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });
                section.item.push({
            id:'21',
            clase:"noticia y2",
            onclick:"mas(this)",
            cat:"Kirol agenda",
            catclass:"catHeaderMin berdea rounded withImg",
            desc: "21 > ARRASATE | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "<p>Jakiberri Proiektua, 'Healthy Fast Food' tankerako arin prestatzeko euskal janari berri, naturala, osa- suntsua, anitza eta nutritiboa izango den produktuak lortzeko ikerkuntza proiektua da.</p><p>Jakiberri Proiektuaren asmoa euskal jatorrizko 'Healthy Fast Food' sukal- daritza mota berritzailea sortzea da, Obama Presidentearen legediarekin bat letorkeena.</p><p>Jakiberri Proiektua ISEAk (Corporacion MONDRAGON), JAKIONek eta AZARO FUNDAZIOAk bultzatutakoa da, horre- tarako BASQUE CULINARY CENTER eta HAZI laguntza dutelarik.</p><p>Nahiz eta gaur egun 'Healthy Bas- que Fast Food' eskaintzarik ez egon, Jakiberri Proiektuaren helburua da, gure sormen potentziala, ezagutza, tradizioa eta gure gastronomiako giza kolektiboa uztartzea da eta horrela elikadura mota berria, naturala, osasuntsua, anitza eta nutritiboa lortzeko.</p><p>Jakiberri proiektuaren testuinguruan ideia-lehiaketa bat abian jarri izan da 'Euskal Healthy Fast Food' balizko produktuak aurkitzeko asmoz. 1.000 Euroko sari bat eskainiko zaio propo- samen hoberena aurkeztuko duen parte-hartzaileari. Horretaz gain, irabazlearen ideia edo lehiaketan parte hartuko duen beste edozeinen ideia komertzializatuko balitz, Jakibe- rri Lan-Taldeak bere proposatzailea saritu egingo luke. Lehiaketari buruz argibideak eskuratzeko ISEAko webgu- nera (www.iseamcc.net) edo ELKAR- BIDE (www.elkarbide.net) webgune sozialera jo daiteke. Bertan lehiake- taren arauaz gain, parte hartzeko galdera-formulategiak aurkitu ahal</p>",
            author: "",
            title: "",
            date: "",
            img: imag2
        });

        section.item.push({
            id:'22',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "22 > BERGARA | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            id:'23',
            clase:"noticia",
            onclick:"mas(this)",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "23 > ESKORIATZA | Udalak antolatu ditu Xake txapelketak.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
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