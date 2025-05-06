<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'dbconnect.php';
$objDB = new Dbconnect();
$conn = $objDB->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM users";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input')); 
        $sql = "INSERT INTO users(name, email, mobile, created_at) VALUES (:name, :email, :mobile, :created_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date('d-m-Y');
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':created_at', $created_at);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Registrado com Sucesso.'];
        } else {
            $response = ['status' => 1, 'message' => 'Deu errado.'];
        }
        break;
        
}


