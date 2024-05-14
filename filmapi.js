const apiKey = 'da8129796ca536ab869a0edd48e8845b';

async function fetchMovies() {
    try {
        const randomNumber = Math.floor(Math.random() * 1000); // Rastgele bir sayı oluşturun
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${randomNumber}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        const movies = data.results.slice(0, 12); // İlk 6 filmi al

        const movieContainer = document.getElementById('movie-container');
        movieContainer.innerHTML = ''; // Önceki filmleri temizle

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            const image = document.createElement('img');
            image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            image.classList.add('movie-image');
            movieCard.appendChild(image);

            const title = document.createElement('h3');
            title.textContent = movie.title;
            title.classList.add('movie-title');
            movieCard.appendChild(title);

            const imdbRating = document.createElement('p');
            imdbRating.textContent = `IMDb Rating: ${movie.vote_average}`;
            imdbRating.classList.add('imdb-rating');
            movieCard.appendChild(imdbRating);

            movieContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

document.getElementById('fetch-button').addEventListener('click', fetchMovies); // Düzenle butonuna tıklanınca filmleri yeniden al

fetchMovies(); // Sayfa yüklendiğinde ilk kez filmleri al

