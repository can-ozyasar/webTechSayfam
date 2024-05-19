<?php
// Kullanıcı adı ve şifrelerin listesi
$users = array(
    "g1812100001@sakarya.edu.tr" => "g1812100001",
    "g1812100002@sakarya.edu.tr" => "g1812100002",
    "g1812100003@sakarya.edu.tr" => "g1812100003",
    "g1812100004@sakarya.edu.tr" => "g1812100004",
    "g1812100006@sakarya.edu.tr" => "g1812100006",
    "g1812100007@sakarya.edu.tr" => "g1812100007",
    "g1812100008@sakarya.edu.tr" => "g1812100008",
    "g231210009@sakarya.edu.tr" => "g231210009",
    "g1812100005@sakarya.edu.tr" => "g1812100005"
);

// Post edilmiş kullanıcı adı ve şifreyi kontrol et
if(isset($_POST['username']) && isset($_POST['password'])){
    // Kullanıcı adı ve şifreyi al
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Kullanıcı adı ve şifrenin boş olup olmadığını kontrol et
    if(!empty($username) && !empty($password)){
        // Kullanıcı adının mail adresi olup olmadığını kontrol et
        if(filter_var($username, FILTER_VALIDATE_EMAIL)){
            // Kullanıcı adı var mı kontrol et
            if(array_key_exists($username, $users)){
                // Şifre doğru mu kontrol et
                if($users[$username] === $password){
                    // Başarılı giriş durumunda
                    echo "Hoşgeldiniz $username";
                } else {
                    // Şifre yanlışsa
                    echo "Kullanıcı adı veya şifre yanlış";

                    echo "<script>alert('Kullanıcı adı veya şifre yanlış.'); window.location = 'login.html';</script>";
                    exit();
                }
            } else {
                // Kullanıcı adı bulunamadıysa
                echo "Kullanıcı adı bulunamadış";

                echo "<script>alert('Kullanıcı adı bulunamadı.'); window.location = 'login.html';</script>";
                exit();
            }
        } else {
            // Kullanıcı adı mail adresi değilse
            echo "<script>alert('Geçerli bir mail adresi giriniz.'); window.location = 'login.html';</script>";
            exit();
        }
    } else {
        // Kullanıcı adı veya şifre boşsa
        echo "<script>alert('Kullanıcı adı veya şifre boş bırakılamaz.'); window.location = 'login.html';</script>";
        exit();
    }
}
?>
