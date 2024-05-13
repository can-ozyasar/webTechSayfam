const form = document.querySelector('form');
const hataMesaji = document.getElementById('hata-mesaji');

const kullanicilar = [
  { email: "g1812100001@sakarya.edu.tr", sifre: "g1812100001" },
  { email: "g1812100002@sakarya.edu.tr", sifre: "g1812100002" },
  { email: "g1812100003@sakarya.edu.tr", sifre: "g1812100003" },
  { email: "g1812100004@sakarya.edu.tr", sifre: "g1812100004" },
  { email: "g1812100005@sakarya.edu.tr", sifre: "g1812100005" },
  { email: "g1812100006@sakarya.edu.tr", sifre: "g1812100006" },
  { email: "g1812100007@sakarya.edu.tr", sifre: "g1812100007" },
  { email: "g1812100008@sakarya.edu.tr", sifre: "g1812100008" }
  // ... ekstra kullanı ekleyebilirim ...
];

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Form gönderilmesini engeller

  const username = form.elements.username.value.trim();
  const password = form.elements.password.value.trim();

  if (username === '' || password === '') {
    hataMesaji.textContent = 'Kullanıcı adı ve şifre boş olamaz.';
    return;
  }

  if (!validateEmail(username)) {
    hataMesaji.textContent = 'Geçersiz e-posta formatı.';
    return;
  }

  const kullanici = kullanicilar.find(kullanici => kullanici.email === username && kullanici.sifre === password);

  if (kullanici) {
    // Giriş başarılı!
    document.location.href = "login.php"; // Başarılı giriş sayfasına yönlendir
  } else {
    hataMesaji.textContent = 'Hatalı giriş bilgileri.';
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}




