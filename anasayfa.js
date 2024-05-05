const slider = document.querySelector('.slider');
const resimler = document.querySelector('.resimler');
const imgAdet = resimler.querySelectorAll('img').length;
const ileriBtn = document.querySelector('.ileri');
const geriBtn = document.querySelector('.geri');

let aktifResim = 0;
let kaydirmaAraligi = 6000; // Otomatik değişim için aralık (milisaniye)

resimler.style.transform = `translateX(-${aktifResim * 100}%`;

const resimDegistir = (yon) => {
  if (yon === "ileri") {
    aktifResim = (aktifResim + 1) % imgAdet;
  } else if (yon === "geri") {
    aktifResim = (aktifResim - 1 + imgAdet) % imgAdet;
  }
  resimler.style.transform = `translateX(-${aktifResim * 100}%`;
}

ileriBtn.addEventListener('click', () => resimDegistir('ileri'));
geriBtn.addEventListener('click', () => resimDegistir('geri'));

// Otomatik resim değişimi için setInterval fonksiyonu
let intervalId = setInterval(() => resimDegistir('ileri'), kaydirmaAraligi);

// Butonlara tıklandığında otomatik değişimi durdur ve tekrar başlat
ileriBtn.addEventListener('click', () => clearInterval(intervalId));
geriBtn.addEventListener('click', () => clearInterval(intervalId));

ileriBtn.addEventListener('click', () => intervalId = setInterval(() => resimDegistir('ileri'), kaydirmaAraligi));
geriBtn.addEventListener('click', () => intervalId = setInterval(() => resimDegistir('geri'), kaydirmaAraligi));
