const main = document.querySelector(".main");

fetch(genres_list_http + new URLSearchParams({
    api_key: api_key,
    language: "pt-BR"
}))
    .then(res => res.json())
    .then(data => {
        data.genres.forEach(item => {
            fetchMoviesListByGenres(item.id, item.name)
        });
    })

const fetchMoviesListByGenres = (id, genres) => {
    fetch(movie_genres_http + new URLSearchParams({
        api_key: api_key,
        with_genres: id,
        page: Math.floor(Math.random() * 3) + 1
    }))
        .then(res => res.json())
        .then(data => {
            makeCategoryElement(`${genres}`, data.results)
        })
        .catch(err => console.log(err))
}

const makeCategoryElement = (category, data) => {
    main.innerHTML += `
        <div class="movie-list">
            <button class="prev-btn">
                <img src="./img/prev.png" alt="previous">
            </button>
            <h1 class="movie-category">${category}</h1>

            <div class="movie-container" id="${category}">                
            </div>
            <button class="next-btn">
                <img src="./img/next.png" alt="next">
            </button>
        </div>
    `
    makeCards(category, data)
}

const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id) ; //document.querySelector(`#${id}`)
    data.forEach((item, i) => {
        if(item.backdrop_path === null){
            item.backdrop_path = item.poster_path;
            if(item.backdrop_path === null) return
        }

        movieContainer.innerHTML += `
            <div class="movie">
                <img src="${img_url}${item.backdrop_path}"The Witcher">
                <p class="movie-title">${item.title}</p>
            </div>
        `

        if(i === data.length -1){
            setTimeout(() => {
                setupScrooling()
            }, 1000)
        }
    })
}