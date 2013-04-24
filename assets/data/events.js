/**
 * Objeto Events para gestionar los diferentes eventos de Tentu
 * @namespace Events
 */

Events = (function() {

  /**
   * Variables definidas del objeto Events
   *
   */
  var login_url = 'http://172.17.101.252/tentu/ataria/contenido/user/login';
  var logout_url = 'http://172.17.101.252/tentu/ataria/contenido/user/logout';
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

  /*
   * Función para obtener el valor de una cookie guardada.
   * Parámetros: nombre de cookie
   * Devuelve: valor o null.
   */

  function getCookie(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++) {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name) {
        return unescape(y);
      }
    }
  };

  /*
   * Función para establecer el valor a una cookie. 
   * Parámetros: nombre, valor y nº días disponible.
   * Devuelve: -
   */

  function setCookie(name, value, days) {
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          var expires = "; expires=" + date.toGMTString();
      } else var expires = "";
      document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
  };

  /*
   * Función para comprobar que una cookie existe.
   * Parámetros: nombre de cookie
   * Devuelve: True o False
   */

  function checkCookie(c_name) {
    var result = false;
    var value = getCookie(c_name);
    
    if (value != null && value != '') {
      result = true;
    }
    return result;
  };

  /*
   * Función para eliminar una cookie ya guardada.
   * Parámetros: nombre de cookie
   * Devuelve: -
   */

  function delCookie(c_name) {
    setCookie(c_name,"",-1);
  };

  /*
   * Función para realizar e iniciar las primeras comprobaciones a la hora de ejecutar Tentu: Logeo o Principal.
   * Parámetros: -
   * Devuelve: -
   */

  function init() {
    parseTextLang(window.navigator.userLanguage || window.navigator.language);
    if(checkCookie('sessid') && checkCookie('uid')
      && checkCookie('uname')) {
      main();
    }
  };

  /*
   * Función que recoje los datos de logeo y los combierte a cookies.
   * Parámetros: Resultado de la llamada AJAX de login.
   * Devuelve: -
   */

  function init_session(result) {
    if( console && console.log ) {
      var data = jQuery.parseJSON(result.responseText);
      setCookie('sessid', data.sessid, 5);
      setCookie('uid', data.user.uid, 5);
      setCookie('uname', data.user.name, 5);
      main();
    }
  };

  /*
   * (Temporal - Sin llamada a servidor) Función que realiza el logeo contra el servidor drupal de Tentu
   * Parámetros: -
   * Devuelve: -
   */

  function login() {

    if (validateLogin()) {
      var serializeData = $('form#log_form').serialize();
      /*
      $.ajax({
        type: "POST",
        url: login_url,
        data: serializeData,
        dataType: 'application/json',
      })
      .always(function(result){
        if (result.status === 200){
          init_session(result);
        }
        else if (result.status === 401) {
          console.log("Login Error: " + result.statusText);
          logout();
        }
        else if (result.status === 400) {
          console.log("Login Error: " + result.statusText);
        }
      });*/
      main();
    }
  };

  /*
   * Función que valida los datos de logeo (usuario y contraseña).
   * Parámetros: -
   * Devuelve: -
   */

  function validateLogin() {
    var result = true;
    if ($('#username').val() === null || $('#username').val() === ''){
      $('#username').attr('style', 'border: 1px solid red');
      result = false;
    }
    if ($('#password').val() === null || $('#password').val() === ''){
      $('#password').attr('style', 'border: 1px solid red');
      result = false;
    }
    return result;
  };

  /*
   * Función que realiza la desconexión del servidor Tentu
   * Parámetros: -
   * Devuelve: -
   */

  function logout() {
    $.ajax({
      type: "POST",
      url: logout_url,
      data: null,
      dataType: 'application/json',
    })
    .always(function(result, data) {
      if( console && console.log ) {
        console.log('Logut!');
      }
      delCookie('sessid');
      delCookie('uid');
      delCookie('uname');
      document.getElementById("log").style.display = "block";
      document.getElementById("sec").style.display = "none";
      document.getElementById("fot").style.display = "none";
      document.getElementById("not").style.display = "none";
    });
  };

  /*
   * Función que carga y muestra la vista principal de Tentu. Utiliza Services para la carga de contenido.
   * Parámetros: -
   * Devuelve: -
   */

  function main() {
    Services.Fill();
    Services.Print();
    document.getElementById("log").style.display = "none";
    document.getElementById("zal").style.display = "none";
    document.getElementById("sec").style.display = "inline-block";
    document.getElementById("logout").style.display = "block";
    document.getElementById("fot").style.display = "block";
  };

  /*
   * Función que muestra el texto de la página de logeo en Euskera o Castellano. Utiliza Lang de lang.js.
   * Parámetros: código de idioma
   * Devuelve: -
   */

  function parseTextLang(ul) {
    var lang = Lang(ul);
    document.title = lang.title;
    document.getElementById('log_but').innerHTML = lang.login;
    document.getElementById('regis').innerHTML = lang.reg_text + '<br/>' + lang.reg_rem;
    document.getElementById('reg_but').innerHTML = lang.register;
    document.getElementById('username').placeholder = lang.username;
    document.getElementById('password').placeholder = lang.password;
  };

  /*
   * Función que muestra la vista principal de Tentu. Se utiliza en el footer.
   * Parámetros: -
   * Devuelve: -
   */

  function home() {
    document.getElementById("not").style.display = "none";
    document.getElementById("zal").style.display = "none";
    document.getElementById("sec").style.display = "block";
    document.getElementById("logout").style.display = "block";
    document.getElementById("prev").style.display= 'none';
    document.getElementById("next").style.display= 'none';
    document.getElementById("back").style.display= 'none';
  };

  /*
   * Función que combierte los estilos de estilo día a estilo noche
   * Parámetros: -
   * Devuelve: -
   */

  function night() {
    document.getElementsByClassName("present")[0].setAttribute("class", "max present night");
    document.getElementById("n").style.display = "none";
    document.getElementById("d").style.display = "block";
  };

  /*
   * Función que combierte los estilos de estilo noche a estilo día
   * Parámetros: -
   * Devuelve: -
   */

  function day() {
    document.getElementsByClassName("present")[0].setAttribute("class", "max present day");
    document.getElementById("d").style.display = "none";
    document.getElementById("n").style.display = "block";
  };

  /*
   * Función que cambia de la vista principal a una sección de noticias concreta.
   * Parámetros: id de sección y id de categoría.
   * Devuelve: -
   */

  function changeSec(x,y) {
    document.getElementById("sec").style.display = "none";
    document.getElementById("zal").style.display = "none";
    document.getElementById("not").style.display = "inline-block";

    Services.template(x,y);

    $('#noticias').masonry({
      isFitWidth: true,
        itemSelector: '.noticia'
    });
  };

  /*
   * Función que muestra el menu previo a una sección con categorías.
   * Parámetros: -
   * Devuelve: -
   */

  function showCatMenu() {
    Services.category();
    document.getElementById("sec").style.display = "none";
    document.getElementById("zal").style.display = "inline-block";
    document.getElementById("logout").style.display = "block";
    document.getElementById("fot").style.display = "block";

    $('#categorias').masonry({
      isFitWidth: true,
      itemSelector: '.category'
    });
  };

  /*
   * Función que muestra la siguiente noticia a la actual en el efecto Carrousel.
   * Parámetros: -
   * Devuelve: -
   */
  
  function next() {
    var i = parseInt(def.id)+1;
    var o = document.getElementById(i);
    if(o){
      $("#"+def.id).removeClass("centerRight");
      $("#"+def.id).removeClass("centerLeft");
      $("#"+def.id).removeClass("rightCenter");
      $("#"+def.id).removeClass("leftCenter");
      $("#"+def.id).addClass("centerLeft");
      mas(o);
      $("#"+i).removeClass("centerRight");
      $("#"+i).removeClass("centerLeft");
      $("#"+i).removeClass("rightCenter");
      $("#"+i).removeClass("leftCenter");
      $("#"+i).addClass("rightCenter");
    }
  };

  /*
   * Función que muestra la noticia previa a la actual en el efecto Carrousel.
   * Parámetros: -
   * Devuelve: -
   */

  function prev() {
    var i = parseInt(def.id)-1;
    var o = document.getElementById(i);
    if(o){
      $("#"+def.id).removeClass("centerRight");
      $("#"+def.id).removeClass("centerLeft");
      $("#"+def.id).removeClass("rightCenter");
      $("#"+def.id).removeClass("leftCenter");
      $("#"+def.id).addClass("centerRight");
      mas(o);
      $("#"+i).removeClass("centerRight");
      $("#"+i).removeClass("centerLeft");
      $("#"+i).removeClass("rightCenter");
      $("#"+i).removeClass("leftCenter");
      $("#"+i).addClass("leftCenter");
    }
  };

  /*
   * Función que maximiza el articulo deseado
   * Parámetros: artículo
   * Devuelve: -
   */

  function mas(x) {

    x.setAttribute("onclick","");
    def.id = x.id;

    x.style.width = "98%";
    x.style.paddingBottom = '0px';
    def.tope = x.style.top;
    x.style.top = '0px';
    def.lefty = x.style.left;
    x.style.left = '0px';

    document.getElementsByClassName("catHeader")[0].style.display = "none";
    var chmin = x.getElementsByClassName("catHeaderMin");
    chmin[0].style.display = "inline-block";
    chmin[0].style.top = "0px";
    chmin[0].style.height = "15px";

    var noticia = document.getElementsByClassName("noticia");
    noticia[def.id].style.display = "inline-block";

    var img = x.getElementsByTagName("img");
    if (img.length !== 0) {
      img[0].style.display = "none";
    }
    x.getElementsByClassName("desc")[0].style.display = "none";
    x.getElementsByClassName("texto")[0].style.display = "block";
    x.getElementsByClassName("title")[0].style.display = "block";

    var noticias = document.getElementById("noticias");
    noticias.style.width = "100%";
    noticias.style.height = "100%";
    noticias.style.paddingBottom = "0px";
    
    noticia[parseInt(def.id)].style.position = "absolute";

    def.height = x.style.height;
    x.style.height = '100%';

    document.getElementById("logout").style.display= 'none';
    document.getElementById("back").style.display= 'block';
    document.getElementById("prev").style.display= 'inline-block';
    document.getElementById("next").style.display= 'inline-block';

    window.scrollTo(0,0);
  };

  /*
   * Función que oculta todas las noticias salvo la deseada
   * Parámetros: artículo
   * Devuelve: -
   */

  function hideAll(x) {
    var noticia = document.getElementsByClassName("noticia");
    for (i = 0;  i < noticia.length; i++) {
      if (i != x.id) {
        noticia[i].style.display = "none";
      }else noticia[i].style.display = "block";
    }
    $('#noticias').masonry("destroy");
  };

  /*
   * Función que minimiza todos los artículos
   * Parámetros: -
   * Devuelve: -
   */

  function min() {
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

        document.getElementsByClassName("catHeader")[0].style.display = "block";
        var chmin = x[i].getElementsByClassName("catHeaderMin");
        chmin[0].style.display = "none";
        chmin[0].style.top = "";
        chmin[0].style.height = "10px";

        var img = x[i].getElementsByClassName("imag");
        if( img.length !== 0) {
          img[0].style.display = def.d_img;
        }

        x[i].getElementsByClassName("desc")[0].style.display = def.d_desc;
        x[i].getElementsByClassName("texto")[0].style.display = def.d_txt;
        x[i].getElementsByClassName("title")[0].style.display = def.d_tit;
      }

      var noticia = document.getElementsByClassName("noticia");
      for (var i = 0;  i < noticia.length; i++) {
        noticia[i].style.position = "relative";
        noticia[i].style.display = "inline-block";
      }

      var noticias = document.getElementById("noticias");
      noticias.style.paddingBottom = "44px";
      noticias.style.height = "";

      document.getElementById("back").style.display= 'none';
      document.getElementById("prev").style.display= 'none';
      document.getElementById("next").style.display= 'none';
      document.getElementById("logout").style.display= 'block';

      def.tope = def.tope.substring(0, def.tope.length - 2);
      
      $('#noticias').masonry({
          itemSelector: '.noticia',
          isFitWidth: true,
          isAnimated: true
      });
  };

  init();

  return {
    init: function(){ init(); },
    parseLang: function(code){ parseTextLang(code); },
    login: function(){ login(); },
    logout: function(){ logout(); },
    home: function(){ home(); },
    changeSec: function(x, y){ changeSec(x, y); },
    showCatMenu: function(){ showCatMenu(); },
    hideAll: function(x){ hideAll(x); },
    mas: function(x){ mas(x); },
    min: function(){ min(); },
    prev: function(){ prev(); },
    next: function(){ next(); }
  };

}).call(this);
