/**
 * Función de logeo
 * @namespace Login
 */



 var def = {
  id: '',
  width: '',
  height: '',
  scroll: '',
  d_img: 'block',
  d_txt: '',
  d_tit: '',
  d_desc: '',
  pb: '',
  tope: '',
  lefty: ''
 };

function login(){
  document.getElementById("log").style.display = "none";
  document.getElementById("not").style.display = "inline-block";
  $('#noticias').masonry({
    isFitWidth: true,
    itemSelector: '.category'
  });
}

function home(){
  Services.category();
}



function mas(x){

  console.log("masifikau");

  x.setAttribute("onclick","");
  var i = 0;
  def.id = x.id;

  x.style.width = "98%";
  x.style.paddingBottom = '0px';
  def.tope = x.style.top;
  x.style.top = '0px';
  def.lefty = x.style.left;
  x.style.left = '0px';
  //x.style.overflowY = 'scroll';

  // var catHeader = document.getElementsByClassName("catHeader");
  // catHeader[0].style.display = "none";

  var chmin = x.getElementsByClassName("catHeaderMin");
  chmin[0].style.top = "0px";
  chmin[0].style.height = "15px";


  var noticia = document.getElementsByClassName("noticia");
  for (i = 0;  i < noticia.length; i++) {
    if (i != x.id-1){
      noticia[i].style.display = "none";
    }
  }

  var img = x.getElementsByTagName("img");
  if( img.length !== 0) {
    img[0].style.display = "none";
  }
  var desc = x.getElementsByClassName("desc");
  desc[0].style.display = "none";
  var txt = x.getElementsByClassName("texto");
  txt[0].style.display = "block";
  var tit = x.getElementsByClassName("title");
  tit[0].style.display = "block";


  // var y2 = x.getElementsByClassName("y2");
  // if( y2.length == 0) {
  //   y2[0].style.height = "100%";
  // }



  // var y4 = document.getElementsByClassName("y4");
  //   if( y4.length !== 0) {
  //   y4[0].style.height = "100%";
  //}


  var noticias = document.getElementById("noticias");
  noticias.style.height = "100%";
  noticias.style.paddingBottom = "0px";

  def.height = x.style.height;
  x.style.height = '100%';

  var back = document.getElementById("back");
  back.style.display= 'block';

  //$('html,body').scrollTop(0);
  window.scrollTo(0,0);

  $('#noticias').masonry("destroy");


}

function min(){



  var x = document.getElementById(def.id);

  x.setAttribute("onclick","mas(this);");

  x.style.overflowY = def.overflowY;
  x.style.width = def.width;
  x.style.height = def.height;
  x.style.paddingBottom = def.pb;
  x.style.top = "";
  x.style.left = "";


  // var catHeader = document.getElementsByClassName("catHeader");
  // catHeader[0].style.display = "block";

  var chmin = x.getElementsByClassName("catHeaderMin");
  chmin[0].style.top = "";
  chmin[0].style.height = "10px";


  var img = x.getElementsByClassName("imag");
    //console.log(img);
  if( img.length !== 0) {
    img[0].style.display = def.d_img;
  }

  var desc = x.getElementsByClassName("desc");
  desc[0].style.display = def.d_desc;

  var texto = x.getElementsByClassName("texto");
  texto[0].style.display = def.d_txt;

  var title = x.getElementsByClassName("title");
  title[0].style.display = def.d_tit;

  var noticia = document.getElementsByClassName("noticia");
  for (var i = 0;  i < noticia.length; i++) {
    noticia[i].style.display = "block";
  }

  var noticias = document.getElementById("noticias");
  noticias.style.height = "";

  var back = document.getElementById("back");
  back.style.display= 'none';


  console.log('def.tope: '+def.tope);
  def.tope = def.tope.substring(0, def.tope.length - 2);
  console.log('def.tope: '+def.tope);
  console.log(typeof(def.tope));
  console.log(typeof(parseInt(def.tope,8)));

  $('html, body').animate({scrollTop:parseInt(def.tope)}, 'slow');


  $('#noticias').masonry({
    itemSelector: '.noticia',
    isFitWidth: true,
    isAnimated: true
  });
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

