var jcB = null;
var CulBanner = {
    version: "1.0.0",
    alpha: "0123456789ABCDEF",
    genID: function() {
        var id = '';
        for (var i = 0; i < 32; i++) {
            id += this.alpha.charAt(Math.round(Math.random() * 14));
        }
        return id;
    },
    baseCss: "http://culbanner.com/css/styles.css",
    dataUrl: "http://culbanner.com/data.php",
    includeCss: function(css) {
        var cssCb = document.createElement('link');
        cssCb.href = this.baseCss + "?" + this.genID();
        cssCb.type = 'text/css';
        cssCb.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(cssCb);

        var cssCb = document.createElement('link');
        cssCb.href = '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css';
        cssCb.type = 'text/css';
        cssCb.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(cssCb);
    },
    iniJq: function() {
        jcB = jQuery.noConflict(true);
        
        var js = document.createElement('script');
        js.src = 'http://culbanner.com/js/jquery-ui.min.js' + "?" + CulBanner.genID();
        js.onload = function () {
            CulBanner.loadBanner();
        };
        document.getElementsByTagName('head')[0].appendChild(js);
    },
    init: function() {
        this.includeCss(this.cssBase);
        
        var js = document.createElement('script');
        js.onload = this.iniJq;
        js.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
        document.getElementsByTagName('head')[0].appendChild(js);
    },
    loadBanner: function() {
        var data = {};
        jcB.ajax({
            url: CulBanner.dataUrl,
            type: 'post',
            data: data,
            dataType: 'json',
            crossDomain: true,
            async: true
        }).done(function(response) {
            console.log(response);
            var link2 = response.link;
            var image2 = response.image2;
            var loadYoutube = '';
            console.log(image2);
            if (image2.indexOf('youtube') != -1) {
                link2 = image2;
                image2 = "http://culbanner.com/images/icono.png";
                loadYoutube = 'onclick="CulBanner.loadYoutubeModal(\''+link2+'\');return false;"';
            }

            jcB('body').append("<footer id='culbanner'>\
            <section>\
                <ul>\
                    <li style='width:20%'>\
                        <figure>\
                            <a href=" + response.link + " target='_blank'><img src='" + response.image1 + "' onerror=''/></a>\
                        </figure>\
                    </li>\
                    <li  style='width:58%'>\
                        <article>\
                            <h4>" + response.title + "</h4>\
                            <p>" + response.description + "</p>\
                        </article>\
                    </li>\
                    <li style='width:20%'>\
                        <figure>\
                            <a href=" + response.link + " target='_blank' "+loadYoutube+"><img src='" + image2 + "' onerror=''/></a>\
                        </figure>\
                    </li>\
                </ul>\
            </section>\
        </footer>");
        });
        jcB('body').append('<div id="cb-video-content"></div>');
    },
    loadYoutubeModal: function(link) {
        if (link.indexOf('youtube') != -1) {
            cont = '<iframe id="cb-video" width="420" height="315" src="'+link+'" frameborder="0" allowfullscreen></iframe>';
        }else{
            cont = '<img src="'+link+'" width="500" />';
        }
        jcB('#cb-video-content').html(cont)
        jcB('#cb-video-content').dialog({
            'width': 'auto',
            'modal': 'true'
        });
    }
}
CulBanner.init();

