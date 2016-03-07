<?php 
// EDIT THE 2 LINES BELOW AS REQUIRED
$send_email_to = "ps.kherson@gmail.com";
$email_subject = "Заказ с сайта PrintStudio.ks.ua";
function send_email($name,$number,$email,$email_message)
{
 	global $send_email_to;
  global $email_subject;
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=utf-8" . "\r\n";
	$message = "<strong>Email</strong>: ".$email."<br>";
  $message .= "<strong>Name</strong>: ".$name."<br>";  
  $message .= "<strong>Message</strong>: ".$email_message."<br>";
  $message .= "<strong>Number</strong>: ".$number."<br>";
  @mail($send_email_to,$email_subject,$message,$headers);
  return true;
}
function validate($email)
{
  $return_array = array();
  $return_array['success'] = '1';
  $return_array['email_msg'] = '';
  if($email == '')
  {
    $return_array['success'] = '0';
    $return_array['email_msg'] = 'email is required';
  }
  else
  {
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$email)) {
      $return_array['success'] = '0';
      $return_array['email_msg'] = 'enter valid email.';  
    }
  }	
  return $return_array;
}
$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];
$message = $_POST['message'];

$return_array = validate($email);
if($return_array['success'] == '1')
{
	send_email($name,$number,$email,$message);
}
header('Content-type: text/json');
echo json_encode($return_array);
die();
?>
