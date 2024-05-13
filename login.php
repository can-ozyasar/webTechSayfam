<?php
$validUser = 'b1812100001@sakarya.edu.tr';
$validPassword = 'b1812100001';
ob_start()
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  if ($username == $validUser && $password == $validPassword) {
    $_SESSION['user'] = $username;
    echo "Hoşgeldiniz " . htmlspecialchars($username);
  } else {
    
    exit();
  }
} else {

  exit();
}
?>
