function login(){
  document.getElementById("log").style.display = "none";
  document.getElementById("not").style.display = "inline-block";
  $('#noticias').masonry({
    isFitWidth: true,
    itemSelector: '.category'
  });
}

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
  o.style.paddingBottom = "44px";
  o.style.position = "absolute";
  o.style.top = "0px";
  o.style.height = "88%";


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