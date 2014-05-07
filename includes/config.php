<?php
define("APPLICATION_ENV","production");
defined('APPLICATION_ENV')
    || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'production'));

if (APPLICATION_ENV == 'production' || APPLICATION_ENV == 'preproduction') {
    defined('DB_MASTER_HOST') || define('DB_MASTER_HOST', '10.50.1.8');
    defined('DB_MASTER_NAME') || define('DB_MASTER_NAME', 'BongoWP');
    defined('DB_MASTER_USER') || define('DB_MASTER_USER', 'webuser');
    defined('DB_MASTER_PASS') || define('DB_MASTER_PASS', 'shd67#hE4r');
} else {
    defined('DB_MASTER_HOST') || define('DB_MASTER_HOST', 'localhost');
    defined('DB_MASTER_NAME') || define('DB_MASTER_NAME', 'clubanner');
    defined('DB_MASTER_USER') || define('DB_MASTER_USER', 'root');
    defined('DB_MASTER_PASS') || define('DB_MASTER_PASS', 'root');
}