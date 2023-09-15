<?php

// Используем для подключения к базе данных MySQL
class Database
{
    // Учётные данные базы данных
    private $host = "sql.freedb.tech";
    private $db_name = "freedb_exam__ticket__generator";
    private $username = "freedb_examGeneratorAdmin";
    private $password = "72ydW3s2A&p7XHq";
    public $conn;

    // Получаем соединение с базой данных
    public function getConnection()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            // echo "Соединение с БД прошло успешно\n";
        } catch (PDOException $exception) {
            echo "Ошибка соединения с БД: " . $exception->getMessage();
        }

        return $this->conn;
    }
}