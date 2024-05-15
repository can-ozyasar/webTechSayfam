<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Bilgileri</title>
</head>
<body>

<?php
// Formdan gelen bilgileri al
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$contactPreference = $_POST['contactPreference'];
$hobbies = implode(", ", $_POST['hobbies']); // Checkboxlardan gelen array'i birleştir
$message = $_POST['message'];

// Bilgileri ekrana yazdır
echo "<h2>Gönderilen Bilgiler</h2>";
echo "<p><strong>Adı:</strong> $name</p>";
echo "<p><strong>Soyadı:</strong> $surname</p>";
echo "<p><strong>E-posta:</strong> $email</p>";
echo "<p><strong>Cinsiyet:</strong> $gender</p>";
echo "<p><strong>İletişim Tercihi:</strong> $contactPreference</p>";
echo "<p><strong>Hobiler:</strong> $hobbies</p>";
echo "<p><strong>Mesaj:</strong> $message</p>";
?>

</body>
</html>
