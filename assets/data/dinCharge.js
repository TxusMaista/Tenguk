/** Testet with:
 *  - IE 5.5, 7.0, 8.0, 9.0 (preview)
 *  - Firefox 3.6.3, 3.6.8
 *  - Safari 5.0
 *  - Chrome 5.0
 *  - Opera 10.10, 10.60
 */

  var cargado = 0,
  z = 0,
  y = 0;


  var JavaScript = {
    load: function(src, callback) {
      var script = document.createElement('script'),
          loaded;
      script.setAttribute('src', src);
      if (callback) {
        script.onreadystatechange = script.onload = function() {
          if (!loaded) {
            callback();
          }
          loaded = true;
        };
      }
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  };


    // if(cargado === 0){
    //   console.log("cargar jsS");
    //   JavaScript.load("assets/libraries/jquerypp.custom.js", function() {
    //     JavaScript.load("assets/libraries/jquery.bookblock.js", function() {
    //       cargado = 1;
    //       //console.log("cargado jq bb");
    //   });
    // }
    // if(x === 0 ){
    //     console.log("cargar jsS");
    //     JavaScript.load("assets/libraries/page.js", function() {Page.init();});
    // }
    // else if(x === 1){
    //   JavaScript.load("assets/libraries/page_agenda.js", function() {Page_agenda.init();});
    // }


  var loadJS = function(x){

    if(cargado === 0){
      JavaScript.load("assets/libraries/jquerypp.custom.js", function() {
        JavaScript.load("assets/libraries/jquery.bookblock.js", function() {
          cargado = 1;
          console.log("cargado custom y bookblock");
          chargeLib(x);
        });
      });
    }else chargeLib(x);




  };

  var chargeLib = function(x){
    if(x === 0 ){
      if(z === 0){
        console.log("cargar page");
        JavaScript.load("assets/libraries/page.js", function() {Page.init();});
        z = 1;
      }
    }
    else if(x === 1){
      if(y === 0 ){
        console.log("cargar page_age");
        JavaScript.load("assets/libraries/page_agenda.js", function() {Page_agenda.init();});
        y = 1;
      }

    }
  };



