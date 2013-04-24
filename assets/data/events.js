/**
 * Función de logeo
 * @namespace Login
 */



 var def = {
  id: '',
  load: 0,
  context: 0,
  masn : 0,
  masa : 0
 };


$('.share_icon').click(function() {
  $('#sw').toggleClass('swup');
  $('#sw').toggleClass('swdown');
});


function changeSec(x){
  //console.log("Canbiando de contexto a: "+x);
  document.getElementsByTagName("body")[0].style.backgroundColor = "#f4f5f5";
  document.getElementById("cat").style.display = "none";
  def.context = x;



  switch(x)
  {
  case 0:
    document.getElementById("not").style.display = "inline-block";
    if(def.masn === 0){
      $('#noticias').masonry({
        isFitWidth: true,
        itemSelector: '.noticia'
      });
      def.masn = 1;
    }

    break;
  case 1:
    document.getElementById("age").style.display = "inline-block";
    if(def.masa === 0){
      $('#agenda').masonry({
        isFitWidth: true,
        itemSelector: '.noticia'
      });
      def.masa = 1;
    }

    break;
  case 2:
    document.getElementById("not").style.display = "none";
    document.getElementById("age").style.display = "inline-block";
    break;
  case 3:
    document.getElementById("not").style.display = "none";
    document.getElementById("age").style.display = "inline-block";
    break;
  default:
    console.log("lol");
  }


}

function login(){
  Services.template();
  $('#not').prepend("<div class='catHeader gorria rounded'><h1>Nabarmen</h1></div>");
  $('#age').prepend("<div class='catHeader berdea rounded'><h1>Agenda</h1></div>");
  document.getElementById("log").style.display = "none";
  document.getElementById("cat").style.display = "inline-block";
  document.getElementById("fot").style.display = "block";
  $('#categorias').masonry().masonry({
    isFitWidth: true,
    itemSelector: '.category'
  });
}

function home(){
  //$('#noticias').masonry("destroy");
  //$('#agenda').masonry("destroy");
  document.getElementsByTagName("body")[0].style.backgroundColor = "white";
  document.getElementById("not").style.display = "none";
  document.getElementById("age").style.display = "none";
  document.getElementById("cat").style.display = "block";

}


var goFlip = function(x){

  //console.log("context: "+def.context);
  $('.catHeaderMin').show();

  document.getElementsByTagName("body")[0].style.backgroundColor = "white";

  loadJS(def.context);


  switch(def.context)
  {
  case 0:
    $('#noticias').masonry("destroy");
    console.log("solo nabarmenak extendida, ext block");
    document.getElementById("not").style.display = "none";
    document.getElementById("fot").style.display = "none";
    document.getElementById("age").style.display = "none";
    document.getElementById("age_ext").style.display = "none";
    document.getElementById("ext").style.display = "block";
    Page.salta(x.id);

    break;
  case 1:
    $('#agenda').masonry("destroy");
    console.log("agenda extendida, age_ext block");
    document.getElementById("not").style.display = "none";
    document.getElementById("fot").style.display = "none";
    document.getElementById("age").style.display = "none";
    document.getElementById("age_ext").style.display = "block";
    document.getElementById("ext").style.display = "none";
    Page_agenda.salta(x.id);
    break;
  case 2:
    document.getElementById("not").style.display = "none";
    document.getElementById("age").style.display = "inline-block";
    break;
  case 3:
    document.getElementById("not").style.display = "none";
    document.getElementById("age").style.display = "inline-block";
    break;
  default:
    console.log("lol");
  }





};

var backFlip =function(){

  $('.catHeaderMin').hide();

  document.getElementsByTagName("body")[0].style.backgroundColor = "#f4f5f5";

  switch(def.context)
  {
  case 0:
    document.getElementById("not").style.display = "block";
    document.getElementById("age").style.display = "none";
    document.getElementById("fot").style.display = "block";
    document.getElementById("ext").style.display = "none";
    document.getElementById("age_ext").style.display = "none";
    $('#noticias').masonry().masonry({
      isFitWidth: true,
      itemSelector: '.category'
    });
    break;
  case 1:
    document.getElementById("not").style.display = "none";
    document.getElementById("age").style.display = "block";
    document.getElementById("fot").style.display = "block";
    document.getElementById("ext").style.display = "none";
    document.getElementById("age_ext").style.display = "none";
    $('#agenda').masonry().masonry({
      isFitWidth: true,
      itemSelector: '.category'
    });
    break;
  case 2:
    document.getElementById("not").style.display = "none";
    document.getElementById("age").style.display = "inline-block";
    break;
  case 3:
    document.getElementById("not").style.display = "none";
    document.getElementById("age").style.display = "inline-block";
    break;
  default:
    console.log("lol");
  }

};




function night(){
  var o = document.getElementsByClassName("bb-item");
  for(var i=0; i < o.length; i++){
    o[i].setAttribute("class", "bb-item night");
  }
  document.body.style.backgroundColor= 'black';
  var n = document.getElementById("night");
  n.style.display = "none";
  var d = document.getElementById("day");
  d.style.display = "inline-block";

}



function day(){
  var o = document.getElementsByClassName("bb-item");
  for(var i=0; i < o.length; i++){
    o[i].setAttribute("class", "bb-item");
  }
  document.body.style.backgroundColor= 'white';
  var n = document.getElementById("day");
  n.style.display = "none";
  var d = document.getElementById("night");
  d.style.display = "inline-block";
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


function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
  {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function setCookie()
{
  var c_name = 'izena';
  var value = 'tentu';
  var exdays = 365;
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
login();
}

function checkCookie()
{
var username=getCookie("izena");
if (username == 'tentu')
  {
    console.log("Welcome again " + username);
    login();
  }
else
  {
    console.log("logeate");
  }
}

function delCookie()
{
    var name = 'izena';
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    console.log('eliminada...');
}

