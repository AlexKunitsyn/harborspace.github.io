<?php
  header('Content-type: text/html');
  header('Access-Control-Allow-Origin: *');
  $recepient = 'reyz999@gmail.com'; //TODO не работает отправка на аккаунты gsuite
  $frmname = 'Заявка с сайта harborSpace';
  $phone = $_POST['telephone'];
  $name = $_POST['nameUser'];
  $message = "Имя: ".$name . "Телефон: ".$phone;

  if (mail($recepient, $frmname, $message,"From: reyz999@gmail.com\r\n"))
  {
      echo "Сообщение успешно отправлено";
  } else {
      echo "При отправке сообщения возникли ошибки";
  }

  ?>