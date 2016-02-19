<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<?php

/* Проверка на заполнение полей */
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['msg'])) {

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['msg'];

/* Убираем все лишние пробелы и переносы строк  и преобразуем все теги html в символы*/
$name = htmlspecialchars(trim($name));
$email = htmlspecialchars(trim($email));
$message = htmlspecialchars(trim($message));

/* Формируем сообщение */
$yourmail = "kowkin89@gmail.com"; 
$sub = "Сообщение с сайта SPARKOV.COM.UA"; 
$messsage = "Пользователь: $name \nс email адресом E-mail: $email \nОтправил сообщение: \n$message";

/* Отправка */
$sendmail = mail ($yourmail,$sub,$messsage,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
if ($sendmail == 'true'){
    echo '<script type="text/javascript">alert(\'Сообщение отправлено!\');</script>';
}
else {
    echo '<script type="text/javascript">alert(\'Ошибка! Сообщение не отправлено.\');d</script>';
}

}
echo '<script type="text/javascript">document.location.href="/feedback_by_blogzor/mailform.html";</script>';

?>
</body>
</html>