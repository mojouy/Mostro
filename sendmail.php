<?php
  $email = $_REQUEST['email'] ;
  $comment =$_REQUEST['comment'] ;
  $name =$_REQUEST['name'] ;
 
$message="Name: " . $name . "\r\nEmail: ". $email . "\r\n \r\nMensaje: \r\n" . $comment;

mail( "mojo@mostrolab.com", "Consulta a Mostro", $message );


		header( "Location: index.html?email=sent" );

?>

