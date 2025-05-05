<?php

class Dbconnect {
    private $server = "localhost";
    private $name = "react_crud";
    private $user = "root";
    private $password = "";

    public function connect() {
        try {
            $conn = new PDO("mysql:host=" . $this->server . ";dbname=" . $this->name, $this->user, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch(Exception $e) {
            echo("Database Error" . $e->getMessage());
        }
    }


}