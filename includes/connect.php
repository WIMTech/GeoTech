<?php

/*  
	Este archivo crea una nueva conexión a MySQL usando la clase PDO.
	Los detalles de login son tomados desde config.php
*/

try {
	$db = new PDO(
		"mysql:host=$db_host;dbname=$db_name;charset=UTF-8",
		$db_user,
		$db_pass
	);
	
    $db->query("SET NAMES 'utf8'");
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
	error_log($e->getMessage());
	die("A database error was encountered");
}


?>
