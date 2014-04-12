<?php

header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type, *');

$response = array(
    'title' => 'Nombre del Evento',
    'description' => 'Descripcion del Evento',
    'image' => 'http://pre.bongous.com/images/rice.jpg',
    'link' => 'link dek evento'
);

echo json_encode($response);