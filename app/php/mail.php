<?php

$recepient = "munssin@yandex.ua";
$sitename = "назва сайту";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Ім'я: $name \n Телефон: $phone \n Текст: $text";

$pagetitle = "Нова заявка \"$sitename"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n Form: $recepient");
