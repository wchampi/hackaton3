<?php

defined('APPLICATION_ENV')
    || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'production'));

if (APPLICATION_ENV == 'production' || APPLICATION_ENV == 'preproduction') {
    defined('DB_MASTER_HOST') || define('DB_MASTER_HOST', 'localhost');
    defined('DB_MASTER_NAME') || define('DB_MASTER_NAME', 'BongosWP');
    defined('DB_MASTER_USER') || define('DB_MASTER_USER', 'BongosWP');
    defined('DB_MASTER_PASS') || define('DB_MASTER_PASS', 'saHuIFnwzV1!');
} else {
    defined('DB_MASTER_HOST') || define('DB_MASTER_HOST', 'localhost');
    defined('DB_MASTER_NAME') || define('DB_MASTER_NAME', 'clubanner');
    defined('DB_MASTER_USER') || define('DB_MASTER_USER', 'root');
    defined('DB_MASTER_PASS') || define('DB_MASTER_PASS', 'root');
}
