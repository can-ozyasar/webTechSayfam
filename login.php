<?php
// Kullanıcı adı ve şifreyi post edildi mi kontrol et
if(isset($_POST['username']) && isset($_POST['password'])) {
    // Kullanıcı adı ve şifreyi al
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcıların eposta ve şifrelerini içeren bir dizi oluştur
    $users = array(
        array("email" => "g1812100001@sakarya.edu.tr", "sifre" => "g1812100001"),
        array("email" => "g1812100002@sakarya.edu.tr", "sifre" => "g1812100002"),
        array("email" => "g1812100003@sakarya.edu.tr", "sifre" => "g1812100003"),
        array("email" => "g1812100004@sakarya.edu.tr", "sifre" => "g1812100004"),
        array("email" => "g1812100005@sakarya.edu.tr", "sifre" => "g1812100005"),
        array("email" => "g1812100006@sakarya.edu.tr", "sifre" => "g1812100006"),
        array("email" => "g1812100007@sakarya.edu.tr", "sifre" => "g1812100007"),
        array("email" => "g1812100008@sakarya.edu.tr", "sifre" => "g1812100008")
    );

    // Kullanıcının girdiği eposta ve şifreyi dizi içinde ara
    foreach($users as $user) {
        if($user['email'] === $username && $user['sifre'] === $password) {
            // Eğer eposta ve şifre doğru ise hoşgeldin mesajını göster
            echo "Hoşgeldiniz " . $username;
            exit; // İşlemi sonlandır
        }
    }

    // Eğer eposta ve şifre eşleşmesi bulunamadıysa login sayfasına geri yönlendir
    header("Location: login.html");
    exit;
} else {
    // Post edilmediyse login sayfasına geri yönlendir
    header("Location: login.html");
    exit;
}
?>

