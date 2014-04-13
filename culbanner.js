var jcB = null;
var CulBanner={
    version:"1.0.0",
    alpha: "0123456789ABCDEF",
    genID:function(){
		var id='';
		for(var i=0; i < 32; i++){
			id += this.alpha.charAt(Math.round(Math.random()*14));
		}
		return id;
	},
    baseCss:"http://pre.bongous.com/hackaton3/css/styles.css",
    dataUrl:"http://pre.bongous.com/hackaton3/data.php",
    includeCss:function(css){
        var cssCb = document.createElement('link');
        cssCb.href = this.baseCss+"?"+this.genID();
        cssCb.type = 'text/css';
        cssCb.rel  = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(cssCb);
	}, 
    iniJq:function(){
      jcB = jQuery.noConflict(true);
      CulBanner.loadBanner();  
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
            url: CulBanner.dataUrl,
            type: 'post',
            data: data,
            dataType: 'json',
            crossDomain: true,
            async: true
        }).done(function(response) {
            console.log(response);
            var link2= response.link;
            var image2=response.image2;
            if (image2.indexOf('youtube')!=-1) {link2=image2; image2="http://pre.bongous.com/hackaton3/images/icono.png";}
            jcB('body').append("<footer id='culbanner'>\
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
                            <img href="+link2+" target='_blank' src='"+image2+"' onerror=''/>\
                        </figure>\
                    </li>\
                </ul>\
            </section>\
        </footer>");
        });
    } 
}
CulBanner.init();

