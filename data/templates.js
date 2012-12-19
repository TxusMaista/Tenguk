Template = (function() {

  var markup = '{{#noticia}}<article class="min" onclick="max({{id}});">\
            <div class="encabezado">{{{img}}}\
            <h1>{{title}}</h1><div class="date">{{date}}</div></div>\
            <div class="texto"><p>{{{text}}}</p></div>\
            </article>{{/noticia}}';

  return{
    	noticia: function(){ return (markup);},
  }

}).call(this);