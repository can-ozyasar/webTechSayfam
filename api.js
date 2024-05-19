// API anahtarı ve istek URL'si
const apiKey = 'YOUR_API_KEY';
const requestUrl = 'https://api.example.com/data';

// İstek gönderme
fetch(requestUrl, {
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
})
.then(response => response.json())
.then(data => {
  // Verileri işleme ve gösterme
  const dataList = document.getElementById('data-list');
  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;
    dataList.appendChild(listItem);
  });
});
