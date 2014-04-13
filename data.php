<?php

function getUrl2($url) {
    if (strpos($url, 'youtube.com') !== false || strpos($url, 'youtu.be') !== false) {
        if (strpos($url, 'youtube.com/embed') !== false) {
            return $url;
        }
        
        if (strpos($url, 'youtu.be') !== false) {
            $pUrl = explode('youtu.be/', $url);
            $v = $pUrl[1];
        } else {
            $pUrl = parse_url($url);
            parse_str($pUrl['query'], $pString);
            $v = $pString['v'];
        }

        return '//www.youtube.com/embed/' . $v;
    }
    return $url;
}

header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type, *');

require_once 'includes/DbManager.php';

$query = "SELECT * 
    FROM banners
    ORDER BY RAND()
    LIMIT 1";

$evento = DbManager::fetchOne($query);
$response = array(
    'title' => $evento['nombre_evento'],
    'description' => $evento['resumen'],
    'image1' => ($evento['link_image'] == '') ? 'http://www.publicatufoto.com/data/media/44/Municipalidad_de_Lima.PNG' : $evento['link_image'],
    'image2' => ($evento['link_youtube'] == '') ? 'http://www.publicatufoto.com/data/media/44/Municipalidad_de_Lima.PNG' : getUrl2($evento['link_youtube']),
    'link' => ($evento['link'] == '') ? 'http://www.munlima.gob.pe' : $evento['link']
);

echo json_encode($response);