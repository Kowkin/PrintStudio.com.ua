<?php
 
/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$tel = htmlspecialchars($_POST["tel"]);
$message = htmlspecialchars($_POST["message"]);
$message2 = htmlspecialchars($_POST["message2"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);
 
/* Ваш адрес и тема сообщения */
$address = "kowkin89@gmail.com";
$sub = "Сообщение с сайта ХХХ";
 
/* Формат письма */
$mes = "Сообщение с сайта ХХХ.\n
Имя отправителя: $name 
Электронный адрес отправителя: $email
Телефон отправителя: $tel
Текст сообщения:
$message, $message2";
 
 
if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n"; 
if (mail($address, $sub, $mes, $from)) {
	header('Refresh: 2; URL=http://printstudio.ks.ua');
	echo 'Письмо отправлено, через 2 секунд вы вернетесь на сайт XXX';}
else {
	header('Refresh: 2; URL=http://printstudio.ks.ua');
	echo 'Письмо не отправлено, через 2 секунд вы вернетесь на страницу YYY';}
}
exit; /* Выход без сообщения, если поле bezspama заполнено спам ботами */
?>