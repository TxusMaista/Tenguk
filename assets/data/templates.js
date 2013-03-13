Template = (function() {

  var categoria = '{{#item}}<article class="{{clase}}" onclick="{{onclick}}">\
            {{{img}}}<h1>{{title}}</h1>\
            <div class="bottom">{{{text}}}</div>\
            </article>{{/item}}';

  var noticia = '{{#item}}<article id="{{id}}" class="{{clase}}" onclick="{{onclick}}">\
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