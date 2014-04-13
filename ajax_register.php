<?php
require_once 'includes/DbManager.php';

$paramers =  array(
    'id' => null,
    'nombre_evento' => $_POST['nombre'],
    'description' => $_POST['discription'],
    'nombre_evento' => $_POST['nombre'],
    'link_origin' => $_POST['url']
);

DbManager::insert("banners", $paramers);

$response = array(
    'estatus' => 'OK'
);

echo json_encode($response);
