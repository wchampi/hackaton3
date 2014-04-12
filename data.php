<?php

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
    'image' => $evento['link_image'],
    'link' => $evento['link_youtube']
);

echo json_encode($response);