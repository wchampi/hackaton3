<?php

#require_once 'includes/config.php';

$response = array(
    'title' => 'Los Rostros Festivos de Lima',
    'description' => 'Se muestra el proceso de redefinicion de los rituales religiosos y culturales tales como peregrinaciones, fiestas patronales y actos festivos que llegaron de distintas zonas del país.',
    'image' => 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-frc1/t1/p403x403/1966958_631706286901194_1843826094_n.jpg',
    'link' => 'http://www.limacultura.pe/agenda-cultural/los-rostros-festivos-de-lima'
);

echo json_encode($response);