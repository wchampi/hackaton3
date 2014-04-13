<?php
require_once 'includes/DbManager.php';

$paramers =  array(
    'id' => null,
    'nombre_evento' => $_POST['name'],
    'resumen' => $_POST['decripcion'],
    'tematica' => $_POST['area'],
    'programa' => $_POST['email'],
    'link_origen' => $_POST['website'],
    'link_youtube' => $_POST['link'],    
    'link_image' => null
);
 
DbManager::insert("banners", $paramers);

?>

<!DOCTYPE html>
<html lang="es">
    <head>
    <meta charset="utf-8" />        
    <title>CulBanner</title>
    <meta name="viewport" content="width=device-width">
    
    <!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- jQuery -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script src="slider.js"></script>
        
        <link rel="stylesheet" href="css/slider.css"/>
	<link rel="stylesheet" href="css/normalize.css"/>
    <link rel="stylesheet" href="css/main.css"/>
    <link rel="stylesheet" href="css/styles.css"/>
    </head>
    <body>
        <header>
            <a href="index.html">
                <img src="images/logo.png" height="100" border="0">
            </a>
        </header>


        <article id="content">
            <section>
                <figure>
                    <div style="margin: 0 auto; width: 600px;">
                        <div class="slider-wrapper">
                            <div id="slider">
                                <div class="slide1">
                                    <img src="images/1.jpg" alt="" />
                                </div>
                                <div class="slide2">
                                    <img src="images/2.jpg" alt="" />
                                </div>
                                <div class="slide3">
                                    <img src="images/3.jpg" alt="" />
                                </div>

                            </div>
                            <div id="slider-direction-nav"></div>
                            <div id="slider-control-nav"></div>
                        </div>
                      </div>  
                </figure>
            </section>
            <aside>
                <p><h4>Gracias por Registrarte!!!</h4><a href="index.html" style="color:#1c62d2;text-decoration: none;">(regresar)</a></p>
            </aside>
        </article>
        
        <br/><br/><br/><br/>
   <script type="text/javascript">
    $(document).ready(function() {
        var slider = $('#slider').leanSlider({
            directionNav: '#slider-direction-nav',
            controlNav: '#slider-control-nav'
        });
    });
    </script>         
<script src="http://culbanner.com/culbannerLoader.js?kgj" type="text/javascript"></script>        
      
    </body>
</html>
