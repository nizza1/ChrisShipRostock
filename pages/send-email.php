<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Set recipient email address
  $to = "srt@srt-rostock.de";

  // Set email headers
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion();

  // Send email
  $success = mail($to, $subject, $message, $headers);

  if ($success) {
    // Email sent successfully
    echo "Email sent successfully.";
  } else {
    // Email sending failed
    echo "Oops! Something went wrong.";
  }
}
?>