var jcB = null;
var cBanner = {
    config: {
        baseUrl: 'http://localhost/hackaton3/'
    },
    ini: function () {
        jcB = jQuery.noConflict();
        cBanner.loadBanner();
    },
    loadBanner: function () {
        var data = {};
        jcB.ajax({
            url: cBanner.config.baseUrl + "/data.php",
            type: 'post',
            data: data,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            async: true
        }).done(function(response) {
            console.log(response);
            jcB('body').append('<div>Aqui va</div>');
        });
    }
}; 

var js = document.createElement('script');
js.onload = cBanner.ini;
js.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(js);