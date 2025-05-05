<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'dbconnect.php';
$objDB = new Dbconnect();
$conn = $objDB->connect();


