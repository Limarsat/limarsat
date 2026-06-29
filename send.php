<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$phone = htmlspecialchars($_POST["phone"]);
$message = htmlspecialchars($_POST["message"]);

$to = "info@limarsat.de";
$subject = "Neue Nachricht von Limarsat";

$body = "Name: $name\n";
$body .= "E-Mail: $email\n";
$body .= "Telefon: $phone\n\n";
$body .= "Nachricht:\n$message";

$headers = "From: info@limarsat.de\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    header("Location: contact.html?success=1");
    exit;
} else {
    echo "Fehler beim Senden der Nachricht.";
}
}
?>
