<?php

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/SMTP.php';

  $mail = new PHPMailer();
  $mail->IsSMTP();
  $mail->CharSet = 'utf-8';

  $mail->SMTPDebug  = 0;  
  $mail->SMTPAuth   = TRUE;
  $mail->SMTPSecure = "ssl";
  $mail->Port       = 465;
  $mail->Host       = "smtp.gmail.com";
  $mail->Username   = "alinapatsora91@gmail.com";
  $mail->Password   = "zeotlxhaofujgtfv";

  $mail->IsHTML(true);
  $mail->AddAddress("alinapatsora91@gmail.com", "recipient-name");
  $mail->SetFrom("alinapatsora91@gmail.com", "Pulse");
  
  $mail->Subject = 'Дані';
$mail->Body    = '
		Користувач залишив дані <br> 
	Ім’я: ' . $name . ' <br>
	Номер телефону: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>