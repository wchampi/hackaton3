var jcB = null;
var CluBanner={
    version:"1.0.0",
    baseCss:"http://pre.bongous.com/css/styles.css",
    dataUrl:"http://pre.bongous.com/datax.php",
    includeCss:function(css){
        var cssCb = document.createElement('link');
        cssCb.href = this.baseCss;
        cssCb.type = 'text/css';
        cssCb.rel  = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(cssCb);
	}, 
    iniJq:function(){
      jcB = jQuery.noConflict(true);
      CluBanner.loadBanner();  
    },
    init:function(){
        this.includeCss(this.cssBase);
        var js = document.createElement('script');
        js.onload = this.iniJq;
        js.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
        document.getElementsByTagName('head')[0].appendChild(js);        
    },
    loadBanner:function(){
        var data = {};
        jcB.ajax({
            url: CluBanner.dataUrl,
            type: 'post',
            data: data,
            dataType: 'json',
            crossDomain: true,
            async: true
        }).done(function(response) {
            console.log(response);
            jcB('body').append("<footer>\
            <section>\
                <ul>\
                    <li style='width:20%'>\
                        <figure>\
                            <img href="+response.link+" target='_blank' src='"+response.image1+"' onerror=''/>\
                        </figure>\
                    </li>\
                    <li  style='width:58%'>\
                        <article>\
                            <h4>"+response.title+"</h4>\
                            <p>"+response.description+"</p>\
                        </article>\
                    </li>\
                    <li style='width:20%'>\
                        <figure>\
                            <img href="+response.link+" target='_blank' src='"+response.image2+"' onerror=''/>\
                        </figure>\
                    </li>\
                </ul>\
            </section>\
        </footer>");
        });
    } 
}
CluBanner.init();

