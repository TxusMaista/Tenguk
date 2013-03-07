Template = (function() {

  var categoria = '{{#item}}<article class="{{clase}}" onclick="{{onclick}}">\
            {{{img}}}<h1>{{title}}</h1>\
            <div class="bottom">{{{text}}}</div>\
            </article>{{/item}}';

  var noticia = '{{#item}}<article class="{{clase}}" onclick="{{onclick}}">\
            {{{img}}}<div class="{{catclass}}"><h1>{{cat}}</h1></div>\
            <div class="title">{{title}}</div>\
            <div class="desc">{{{desc}}}</div>\
            <div class="texto">{{{text}}}</div>\
            </article>{{/item}}';

  return{
    	noticia: function(){ return (noticia);},
    	categoria: function(){ return (categoria);},
  }

}).call(this);
Services = (function() {

	var Category = function() {
        var section = {item:[]};

        var imag = "./assets/images/libro.jpg";
        imag = "<img class='portada bottom rounded' class='bottom' src='"+imag+"'/>";

        section.item.push({
            clase:"category gorria doble rounded",
            onclick:"Services.template(0);",
            text: "",
            author: "",
            title: "Nabarmen",
            date: "",
            img: imag
        });

        section.item.push({
            clase:"category berdea rounded",
            onclick:"Services.template(1);",
            text: "<ul><li>Herriko agenda</li><li>Kirolak</li></ul>",
            author: "",
            title: "Agenda",
            date: "",
            img: ""
        });

        section.item.push({
            clase:"category horia rounded",
            onclick:"",
            text: "<ul><li>Herriz herriko berriak</li><li>Administrazioaren berriak</li></ul>",
            author: "",
            title: "Gertukoak",
            date: "",
            img: ""
        });

        section.item.push({
            clase:"category urdina rounded",
            onclick:"",
            text: "",
            author: "",
            title: "Zaletasunak",
            date: "",
            img: ""
        });

        section.item.push({
            clase:"category grisa rounded",
            onclick:"",
            text: "",
            author: "",
            title: "Publi",
            date: "",
            img: ""
        });

        var html = Mustache.to_html(Template.categoria(), section);
        $('#noticias').html(html);
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
            clase:"noticia x2 y4",
            onclick:"max(0)",
            cat:"Zaletasunak",
            catclass:"catHeaderMin urdina rounded withImg",
            desc: "> GASTRONOMIA | Abian da Jakiberri ideia-Lehiaketa, 'Healthy Basque Fast Food' produktu berritzaileak sortzeko asmoz.",
            text: imagx + "<p>Jakiberri Proiektua, 'Healthy Fast Food' tankerako arin prestatzeko euskal janari berri, naturala, osa- suntsua, anitza eta nutritiboa izango den produktuak lortzeko ikerkuntza proiektua da.</p><p>Jakiberri Proiektuaren asmoa euskal jatorrizko 'Healthy Fast Food' sukal- daritza mota berritzailea sortzea da, Obama Presidentearen legediarekin bat letorkeena.</p><p>Jakiberri Proiektua ISEAk (Corporacion MONDRAGON), JAKIONek eta AZARO FUNDAZIOAk bultzatutakoa da, horre- tarako BASQUE CULINARY CENTER eta HAZI laguntza dutelarik.</p><p>Nahiz eta gaur egun 'Healthy Bas- que Fast Food' eskaintzarik ez egon, Jakiberri Proiektuaren helburua da, gure sormen potentziala, ezagutza, tradizioa eta gure gastronomiako giza kolektiboa uztartzea da eta horrela elikadura mota berria, naturala, osasuntsua, anitza eta nutritiboa lortzeko.</p><p>Jakiberri proiektuaren testuinguruan ideia-lehiaketa bat abian jarri izan da 'Euskal Healthy Fast Food' balizko produktuak aurkitzeko asmoz. 1.000 Euroko sari bat eskainiko zaio propo- samen hoberena aurkeztuko duen parte-hartzaileari. Horretaz gain, irabazlearen ideia edo lehiaketan parte hartuko duen beste edozeinen ideia komertzializatuko balitz, Jakibe- rri Lan-Taldeak bere proposatzailea saritu egingo luke. Lehiaketari buruz argibideak eskuratzeko ISEAko webgu- nera (www.iseamcc.net) edo ELKAR- BIDE (www.elkarbide.net) webgune sozialera jo daiteke. Bertan lehiake- taren arauaz gain, parte hartzeko galdera-formulategiak aurkitu ahal</p>",
            author: "",
            title: "Abian da Jakiberri ideia-Lehiaketa, 'Healthy Basque Fast Food' produktu berritzaileak sortzeko asmoz.",
            date: "",
            img: imag
        });

        section.item.push({
            clase:"noticia y2",
            onclick:"",
            cat:"Kirol agenda",
            catclass:"catHeaderMin berdea rounded withImg",
            desc: "> ARRASATE | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: imag2
        });

        section.item.push({
            clase:"noticia",
            onclick:"",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "BERGARA | Asteburuan jokatuko da Debagoieganko XX. Futbito txapelketa.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            clase:"noticia",
            onclick:"",
            cat:"Agenda",
            catclass:"catHeaderMin berdea rounded",
            desc: "ESKORIATZA | Udalak antolatu ditu Xake txapelketak.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            clase:"noticia y2",
            onclick:"",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded withImg",
            desc: "> Vasco-Navarro trenbidearen itxieraren gaineko erakusketa.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: imag3
        });

        section.item.push({
            clase:"noticia",
            onclick:"",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: "> Etxeko gazteenak igerilekuan, arrainak itsasoan bezala.",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });

        section.item.push({
            clase:"noticia",
            onclick:"",
            cat:"Gertukoak",
            catclass:"catHeaderMin horia rounded",
            desc: "> Dozena bat neska-mutiko futbolean Gabonetako lehiaketan",
            text: "",
            author: "",
            title: "",
            date: "",
            img: ""
        });


        var html = Mustache.to_html(Template.noticia(), section);
        $('#noticias').html(header+html);

        $('#noticias').masonry({
            itemSelector: '.noticia',
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
    }


}).call(this);
/**
 * Funcion de logeo
 * @namespace Login
 */

function login(){
  document.getElementById("log").style.display = "none";
  document.getElementById("not").style.display = "inline";
  $('#noticias').masonry({
    itemSelector: '.category'
  });
}


/** This is a description of the exit function. */
function exit(){

  var n = document.getElementById("d");
  n.style.display = "none";
  var d = document.getElementById("n");
  d.style.display = "block";

  var b = document.getElementById("a");
  b.style.visibility = "visible";
  var b = document.getElementById("s");
  b.style.visibility = "visible";
  var o = document.getElementById("buttons");
  o.style.display = "none";

  var o = document.getElementsByTagName("body");
  o[0].style.overflow = "scroll";

  var o = document.getElementsByClassName("max");

  for (var i = o.length - 1; i >= 0; i--) {
    o[i].scrollTop = 0;
    o[i].setAttribute("class", "min");
  };

  var o = document.getElementsByClassName("encabezadoMax");

  for (var i = o.length - 1; i >= 0; i--) {
    o[i].setAttribute("class", "encabezado");
  };

  var o = document.getElementsByClassName("texto");

  for (var i = o.length - 1; i >= 0; i--) {
    o[i].style.display = "none";
  };

}

function max(n){
  var o = document.getElementsByClassName("catHeader");
  o[n].style.display = "none";
  var o = document.getElementsByClassName("catHeaderMin");
  o[n].style.top = "0px";
  o[n].style.height = "33px";

  var o = document.getElementsByClassName("imag");
  o[n].style.display = "none";

  var o = document.getElementsByClassName("desc");
  o[n].style.display = "none";

  var o = document.getElementsByClassName("texto");
  o[n].style.display = "block";

  var o = document.getElementsByClassName("title");
  o[n].style.display = "block";

  var o = document.getElementsByClassName("noticia");
  for (var i = o.length - 1; i > n; i--) {
    o[i].style.display = "none";
  };

  for (var i = n - 1; i >= 0; i--) {
    o[i].style.display = "none";
  };

  var o = document.getElementsByClassName("y2");
  for (var i = o.length - 1; i >= 0; i--) {
    o[i].style.height = "100%";
  };

  var o = document.getElementsByClassName("y4");
  for (var i = o.length - 1; i >= 0; i--) {
    o[i].style.height = "100%";
  };

  o[n].style.height = "100%";
  o[n].style.width = "98%";

  var o = document.getElementById("noticias");
  o.style.height = "100%";

}

function before(){
  var o = document.getElementsByClassName("future");
  if (o.length == 0) {
    var b = document.getElementById("s");
    b.style.visibility = "visible";
  } else o[0].setAttribute("class", "max after");

  var o = document.getElementsByClassName("present");
  o[0].scrollTop = 0;
  o[0].setAttribute("class", "max future");

  var o = document.getElementsByClassName("past");
  o[0].setAttribute("class", "max present");
  var o = document.getElementsByClassName("before");
  if (o.length == 0) {
    var b = document.getElementById("a");
    b.style.visibility = "hidden";
  } else {
  o[o.length - 1].setAttribute("class", "max past");
  }

}

function after(){

  var o = document.getElementsByClassName("past");
  if (o.length == 0) {
    var b = document.getElementById("a");
    b.style.visibility = "visible";
  } else o[0].setAttribute("class", "max before");

  var o = document.getElementsByClassName("present");
  o[0].scrollTop = 0;
  o[0].setAttribute("class", "max past");

  var o = document.getElementsByClassName("future");
  if (o.length == 0) {
    var o = document.getElementsByClassName("after");
    o[0].setAttribute("class", "max present");
    if(o.length > 0) {
      o[0].setAttribute("class", "max future");
    } else {
      var b = document.getElementById("s");
      b.style.visibility = "hidden";
    }
  } else {
    o[0].setAttribute("class", "max present");
    var o = document.getElementsByClassName("after");
    if(o.length == 0) {
      var b = document.getElementById("s");
      b.style.visibility = "hidden";
    } else {
      o[0].setAttribute("class", "max future");
    }
  }

}

function night(){
  var o = document.getElementsByClassName("present");
  o[0].setAttribute("class", "max present night");
  var n = document.getElementById("n");
  n.style.display = "none";
  var d = document.getElementById("d");
  d.style.display = "block";

}

function day(){
  var o = document.getElementsByClassName("present");
  o[0].setAttribute("class", "max present day");
  var n = document.getElementById("d");
  n.style.display = "none";
  var d = document.getElementById("n");
  d.style.display = "block";
}

function reg(){
  var n = document.getElementById("l");
  n.style.display = "none";
  var d = document.getElementById("r");
  d.style.display = "block";

}

function log(){
  var n = document.getElementById("r");
  n.style.display = "none";
  var d = document.getElementById("l");
  d.style.display = "block";
}