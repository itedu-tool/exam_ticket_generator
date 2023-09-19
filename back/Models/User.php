<?php

class User
{
    // Подключение к БД таблице "users"
    private $conn;
    private $table_name = "User";

    // Свойства
    public $id;
    public $name;
    public $email;
    public $password;
    public $tel;
    public $faculty;

    // Конструктор класса User
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // Метод для создания нового пользователя
    function create()
    {
        // Запрос для добавления нового пользователя в БД
        $query = 'INSERT INTO ' . $this->table_name . '
                SET
                    name = :name,
                    email = :email,
                    password = :password,
                    tel = :tel,
                    faculty = :faculty';

        // Подготовка запроса
        $stmt = $this->conn->prepare($query);

        // Инъекция
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->tel = htmlspecialchars(strip_tags($this->tel));
        $this->faculty = htmlspecialchars(strip_tags($this->faculty));

        // Для защиты пароля
        // Хешируем пароль перед сохранением в базу данных
        $password_hash = password_hash($this->password, PASSWORD_BCRYPT);

        // Выполняем запрос
        // Если выполнение успешно, то информация о пользователе будет сохранена в базе данных
        if ($stmt->execute(array(
            ':name' => $this->name,
            ':email' => $this->email,
            ':password' =>  $password_hash,
            ':tel' => $this->tel,
            ':faculty' => $this->faculty
        ))) {
            return true;
        }
        return false;
    }

    // Обновить запись пользователя
    public function update()
    {
        // Если в HTML-форме был введен пароль (необходимо обновить пароль)
        // $password_set = !empty($this->password) ? ", password = :password" : "";

        // Если не введен пароль - не обновлять пароль
        $query = "UPDATE " . $this->table_name . "
             SET
                 name = :name,
                 email = :email,
                 password = :password,
                 tel = :tel,
                 faculty = :faculty
             WHERE id = :id";

        // Подготовка запроса
        $stmt = $this->conn->prepare($query);

        // Инъекция (очистка)
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->tel = htmlspecialchars(strip_tags($this->tel));
        $this->faculty = htmlspecialchars(strip_tags($this->faculty));

        // Привязываем значения с HTML формы
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":tel", $this->tel);
        $stmt->bindParam(":faculty", $this->faculty);

        // Метод password_hash () для защиты пароля пользователя в базе данных
        if (!empty($this->password)) {
            $this->password = htmlspecialchars(strip_tags($this->password));
            $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
            $stmt->bindParam(":password", $password_hash);
        }

        // Уникальный идентификатор записи для редактирования
        $stmt->bindParam(":id", $this->id);

        // Если выполнение успешно, то информация о пользователе будет сохранена в базе данных
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    // Проверка, существует ли электронная почта в нашей базе данных
    function emailExists()
    {
        // Запрос, чтобы проверить, существует ли электронная почта
        $query = "SELECT id, name, email, password, tel, faculty
            FROM " . $this->table_name . "
            WHERE email = ?
            LIMIT 0,1";

        // Подготовка запроса
        $stmt = $this->conn->prepare($query);

        // Инъекция
        $this->email = htmlspecialchars(strip_tags($this->email));

        // Привязываем значение e-mail
        $stmt->bindParam(1, $this->email);

        // Выполняем запрос
        $stmt->execute();

        // Получаем количество строк
        $num = $stmt->rowCount();

        // Если электронная почта существует,
        // Присвоим значения свойствам объекта для легкого доступа и использования для php сессий
        if ($num > 0) {

            // Получаем значения
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // Присвоим значения свойствам объекта
            $this->id = $row["id"];
            $this->name = $row["name"];
            $this->password = $row["password"];
            $this->tel = $row["tel"];
            $this->faculty = $row["faculty"];

            // Вернём "true", потому что в базе данных существует электронная почта
            return true;
        }
        // Вернём "false", если адрес электронной почты не существует в базе данных
        return false;
    }

    function passwordExists()
    {
    }
}
