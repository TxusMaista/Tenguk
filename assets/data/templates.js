Template = (function() {

  var categoria = '{{#item}}<article class="{{clase}}" onclick="{{onclick}}">\
            {{{img}}}<h1>{{title}}</h1>\
            <div class="bottom">{{{text}}}</div>\
            </article>{{/item}}';

  var noticia = '{{#item}}<article id="{{id}}" class="{{clase}}" onclick="goFlip(this);">\
            {{{img}}}<div class="{{catclass}}"></div>\
            <div class="desc">{{{desc}}}</div>\
            </article>{{/item}}';

  var extendida = '{{#item}}<article id="{{id}}" class="bb-item">\
          <div class="{{catclass}}"></div>\
          <div class="title">{{title}}</div>\
          <div class="texto"><p class="author_date">{{author}}, {{date}}</p><p class="intro">{{intro}}</p>{{{text}}}<div class="txt_publi">{{txt_publi}}</div></div>\
          <div class="txt"><div class="txt_publi">{{txt_publi}}</div></div>\
          </article>{{/item}}';

  return{
      extendida: function(){ return (extendida);},
      noticia: function(){ return (noticia);},
      categoria: function(){ return (categoria);}
  };

}).call(this);