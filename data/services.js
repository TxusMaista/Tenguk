Services = (function() {

	var Templating = function() {
        var section = {noticia:[]};
        var url = 'http://ajax.googleapis.com/ajax/services/feed/load';
        var data = {
            v: '1.0',
            q: encodeURIComponent("http://feeds.weblogssl.com/xataka2"),
            num: 15,
            output: 'json'
        };

        url = url + "?v=" + data.v + "&q=" + data.q + "&num=" + data.num + "&output=" + data.output + "&callback=?";

        $.getJSON(url, function(response) {

            console.error(response);
            for(var i=0;i<response.responseData.feed.entries.length;i++){

                section.noticia.push({
                    id:i,
                    text: textFinder(response.responseData.feed.entries[i].content),
                    author: response.responseData.feed.entries[i].author,
                    title: response.responseData.feed.entries[i].title,
                    date: response.responseData.feed.entries[i].publishedDate,
                    img: imgFinder(response.responseData.feed.entries[i].content)
                });
                console.error(section.noticia[i].text);
            }

        var html = Mustache.to_html(Template.noticia(), section);
        $('#noticias').html(html);

        });
    };

    function imgFinder (img){
        var imags = [];

        var noimag = 0;
        var h = img.indexOf('<img');
        var h2 = img.indexOf('src="');
        var b = img.indexOf('.jpg');
        var b4 = img.indexOf('.png');
        var b2 = img.indexOf('.JPG');
        var h3 = img.indexOf('<iframe"');
        var b3 = img.indexOf('frameborder');

        while (h != -1){
            if ((b2 != -1) && (b != -1) && (b4 != -1)){
            var i = Math.min(b,b2);
            var i = Math.min(i,b4);}
            else
            if ((b2 == -1) && (b == -1))
            if(b4 != -1) var i = b4; else {  
            var i = h2+6;
            var noimag = 1;
            }
            else
            if(b4 != -1) {
                var i = Math.max(b,b2);
                var i = Math.min(i,b4); 
            }
            else  
            var i = Math.max(b,b2);

            var imag = img.substring(h2+5, i+4);
            if(noimag == 0){
            //alert(imag);
            imags.push(imag);}

            img = img.substring(i+4);

            var noimag = 0;
            var b4 = img.indexOf('.png');
            var h = img.indexOf('<img');
            var h2 = img.indexOf('src="');
            var b = img.indexOf('.jpg">');
            var b2 = img.indexOf('.JPG">');
            var h3 = img.indexOf('<iframe"');
            var b3 = img.indexOf('frameborder');
        }

        while (h3 != -1){
            if (b3 != -1)
            noimag = 1;

            var imag = img.substring(h2+5, i+4);
            if(noimag == 0){
            //alert(imag);
            imags.push(imag);}

            img = img.substring(i+4);

            var noimag = 0;
            var h = img.indexOf('<img');
            var h2 = img.indexOf('src="');
            var b = img.indexOf('.jpg">');
            var b2 = img.indexOf('.JPG">');
            var h3 = img.indexOf('<iframe"');
            var b3 = img.indexOf('frameborder');
        }
        
        imag = "<img src='"+imags[0]+"' width='320px' height='280px' />";

        return imag;
    }

    function textFinder (text){

        var b = text.indexOf('.png">');
        var b2 = text.indexOf('.jpg">');
        var b3 = text.indexOf('<div><table border');

        if((b!=-1)&&(b2!=-1))
        var i = Math.min(b,b2);
        else
        var i = Math.max(b,b2);

        //var txt = text.substring(i+6);
        var txt = text.substring(i+6,b3); 
        //alert(txt);

        return txt;
    }

    Templating();

    return {
    }
    

}).call(this);