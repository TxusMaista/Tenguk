function exit(){

  var b = document.getElementById("a");
  b.disabled = false;
  var b = document.getElementById("s");
  b.disabled = false;
  var o = document.getElementById("buttons");
  o.style.display = "none";
  
  var o = document.getElementsByClassName("bmax");
  o[0].setAttribute("class", "bmin");
  var o = document.getElementsByClassName("smax");
  o[0].setAttribute("class", "smin");
  var o = document.getElementById("right");
  o.style.overflow ="scroll";

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
  var o = document.getElementsByClassName("bmin");
  o[0].setAttribute("class", "bmax");
  var o = document.getElementsByClassName("smin");
  o[0].setAttribute("class", "smax");
  var o = document.getElementById("right");
  o.style.overflow ="hidden";

  var o = document.getElementsByClassName("texto");

  for (var i = o.length - 1; i >= 0; i--) {
    o[i].style.display = "block";
  };

  var o = document.getElementsByClassName("encabezado");

  for (var i = o.length - 1; i >= 0; i--) {
    o[i].setAttribute("class", "encabezadoMax");
  };

  var o = document.getElementsByClassName("min");
  
  for (var i = o.length - 1; i >= n; i--) {
    o[i].setAttribute("class", "max after");
  };

  for (var i = n - 1; i >= 0; i--) {
    o[i].setAttribute("class", "max before");
  };

  var o = document.getElementsByClassName("max");
  o[n].setAttribute("class", "max present ani");
  
  if(o.length == n+1){
    var b = document.getElementById("s");
    b.disabled = true;
  } else o[n+1].setAttribute("class", "max future");

  if(n == 0){
    var b = document.getElementById("a");
    b.disabled = true;
  } else o[n-1].setAttribute("class", "max past");

  var o = document.getElementById("buttons");
  o.style.display = "block";
}

function before(){
  var o = document.getElementsByClassName("future");
  if (o.length == 0) {
    var b = document.getElementById("s");
    b.disabled = false;
  } else o[0].setAttribute("class", "max after");

  var o = document.getElementsByClassName("present");
  o[0].scrollTop = 0;
  o[0].setAttribute("class", "max future");

  var o = document.getElementsByClassName("past");
  o[0].setAttribute("class", "max present");
  var o = document.getElementsByClassName("before");
  if (o.length == 0) {
    var b = document.getElementById("a");
    b.disabled = true;
  } else {
  o[o.length - 1].setAttribute("class", "max past");
  }

}

function after(){

  var o = document.getElementsByClassName("past");
  if (o.length == 0) {
    var b = document.getElementById("a");
    b.disabled = false;
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
      b.disabled = true;
    }
  } else {
    o[0].setAttribute("class", "max present");
    var o = document.getElementsByClassName("after");
    if(o.length == 0) {
      var b = document.getElementById("s");
      b.disabled = true;
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