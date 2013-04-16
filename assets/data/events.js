/**
 * Función de logeo
 * @namespace Login
 */

 var def = {
  id: '',
  width: '',
  height: '',
  scroll: '',
  d_img: 'inline',
  d_txt: '',
  d_tit: '',
  d_desc: '',
  pb: '',
  tope: '',
  lefty: ''
 };

function changeSec(x){
  console.log("cange!");
  document.getElementById("cat").style.display = "none";
  document.getElementById("not").style.display = "inline-block";

  Services.template(x);

  $('#noticias').masonry({
    isFitWidth: true,
    itemSelector: '.noticia'
  });
}

function login(){
  Services.category();
  document.getElementById("log").style.display = "none";
  document.getElementById("cat").style.display = "inline-block";
  document.getElementById("fot").style.display = "block";
  document.getElementById("logout").style.display = "block";
  $('#categorias').masonry({
    isFitWidth: true,
    itemSelector: '.category'
  });
}

function home(){
  document.getElementById("not").style.display = "none";
  document.getElementById("cat").style.display = "block";
  document.getElementById("logout").style.display = "block";
  document.getElementById("prev").style.display= 'none';
  document.getElementById("next").style.display= 'none';
  document.getElementById("back").style.display= 'none';
}

function next(){
  var i = parseInt(def.id)+1;
  var o = document.getElementById(i);
  if (o){
  $("#"+def.id).removeClass("centerRight");
  $("#"+def.id).removeClass("centerLeft"); 
  $("#"+def.id).removeClass("rightCenter"); 
  $("#"+def.id).removeClass("leftCenter"); 
  $("#"+def.id).addClass("centerLeft");
  var i = parseInt(def.id)+1;
  var o = document.getElementById(i);
  $("#"+i).removeClass("centerRight");
  $("#"+i).removeClass("centerLeft"); 
  $("#"+i).removeClass("rightCenter");
  $("#"+i).removeClass("leftCenter");
  mas(o); 
  $("#"+i).addClass("rightCenter");
  }
}

function prev(){
  var i = parseInt(def.id)-1;
  var o = document.getElementById(i);
  if (o){
  $("#"+def.id).removeClass("centerRight");
  $("#"+def.id).removeClass("centerLeft"); 
  $("#"+def.id).removeClass("rightCenter");
  $("#"+def.id).removeClass("leftCenter"); 
  $("#"+def.id).addClass("centerRight");
  var i = parseInt(def.id)-1;
  var o = document.getElementById(i);
  $("#"+i).removeClass("centerRight");
  $("#"+i).removeClass("centerLeft"); 
  $("#"+i).removeClass("rightCenter");
  $("#"+i).removeClass("leftCenter");
  mas(o); 
  $("#"+i).addClass("leftCenter");
  }
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
  var ch = document.getElementsByClassName("catHeader");
  ch[0].style.display = "none";
  var chmin = x.getElementsByClassName("catHeaderMin");
  chmin[0].style.display = "inline-block";
  chmin[0].style.top = "0px";
  chmin[0].style.height = "15px";
  var noticia = document.getElementsByClassName("noticia");

  noticia[def.id-1].style.display = "inline-block";

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


/*  var noticias = document.getElementById("noticias");
  noticias.style.overflow = "hidden";
  noticias.style.width = "100%";
  noticias.style.height = "100%";
  noticias.style.paddingBottom = "0px";*/

  noticia[def.id-1].style.position = "absolute";

  def.height = x.style.height;
  //x.style.height = '100%';

  var back = document.getElementById("back");
  back.style.display= 'block';
  
  var logout = document.getElementById("logout");
  logout.style.display= 'none';

  var prev = document.getElementById("prev");
  prev.style.display= 'inline-block';

  var next = document.getElementById("next");
  next.style.display= 'inline-block';

  //$('html,body').scrollTop(0);
  window.scrollTo(0,0);
  //hideAll(x);

/*  var slides = jQuery('html'),
    i = 0;

  slides
  .on('swipeleft', function() {
    next();
  })
  .on('swiperight', function() {
    prev();
  });*/
}

function hideAll(x){
  var noticia = document.getElementsByClassName("noticia");
  for (i = 0;  i < noticia.length; i++) {
    if (i != x.id-1){
      noticia[i].style.display = "none";
    }else noticia[i].style.display = "block";
  }
  $('#noticias').masonry("destroy");
  
  $$("#not").swipeRight(function(){prev();});
  $$("#not").swipeLeft(function(){next();});
}

function min(){
  var x = document.getElementsByClassName("noticia");

  for (var i = 0; i < x.length; i++){

  var p = i+1;

  $("#"+p).removeClass("centerRight");
  $("#"+p).removeClass("centerLeft"); 
  $("#"+p).removeClass("rightCenter");
  $("#"+p).removeClass("leftCenter");

  x[i].setAttribute("onclick","mas(this);hideAll(this);");

  x[i].style.overflowY = def.overflowY;
  x[i].style.width = def.width;
  x[i].style.height = def.height;
  x[i].style.paddingBottom = def.pb;
  x[i].style.top = "";
  x[i].style.left = "";


  // var catHeader = document.getElementsByClassName("catHeader");
  // catHeader[0].style.display = "block";
  var ch = document.getElementsByClassName("catHeader");
  ch[0].style.display = "block";
  var chmin = x[i].getElementsByClassName("catHeaderMin");
  chmin[0].style.display = "none";
  chmin[0].style.top = "";
  chmin[0].style.height = "10px";


  var img = x[i].getElementsByClassName("imag");
    //console.log(img);
  if( img.length !== 0) {
    img[0].style.display = def.d_img;
  }

  var desc = x[i].getElementsByClassName("desc");
  desc[0].style.display = def.d_desc;

  var texto = x[i].getElementsByClassName("texto");
  texto[0].style.display = def.d_txt;

  var title = x[i].getElementsByClassName("title");
  title[0].style.display = def.d_tit;}

  var noticia = document.getElementsByClassName("noticia");
  for (var i = 0;  i < noticia.length; i++) {
    noticia[i].style.position = "relative";
    noticia[i].style.display = "inline-block";
  }

  var noticias = document.getElementById("noticias");
  noticias.style.paddingBottom = "44px";
  //noticias.style.height = "";

  var back = document.getElementById("back");
  back.style.display= 'none';
  var prev = document.getElementById("prev");
  prev.style.display= 'none';

  var next = document.getElementById("next");
  next.style.display= 'none';
  var logout = document.getElementById("logout");
  logout.style.display= 'block';


  console.log('def.tope: '+def.tope);
  def.tope = def.tope.substring(0, def.tope.length - 2);
  console.log('def.tope: '+def.tope);
  console.log(typeof(def.tope));
  console.log(typeof(parseInt(def.tope,8)));

  //window.scrollTo(0, 1000);
  var t = parseInt(def.tope);
  //console.log(t);
  //window.scrollTo(0, t);
  //$('html, body').animate({scrollTop:t}, 'slow');


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
