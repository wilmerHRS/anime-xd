/* 
! Consultando 3 animes mas populares 
*/

window.addEventListener('DOMContentLoaded', () => {
    getPopularAnime();
    getLastEp();
});

let dato;
const carousel = document.querySelector('.carousel-inner');
const gridCards = document.getElementById('grid-cards');

async function getPopularAnime() {
    const temp = await fetch('https://api.jikan.moe/v4/top/anime?type=tv&limit=3');

    const datos = await temp.json();
    dato = datos.data;

    let contador = 1;
    dato.forEach(d => {
        let plantillaCarrucelItem = `
    <div class="carousel-item ${contador === 1 ? 'active' : ''}">
        <img src="${d.images.webp.large_image_url}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-md-block">
            <h5>${d.title}</h5>
            <p>Que esperas míralo ya en Loli_Paradise!!!</p>
        </div>
    </div>`;
        contador += 1;
        carousel.innerHTML += plantillaCarrucelItem;
    })
}

async function getLastEp(){
    const temp = await fetch('https://api.jikan.moe/v4/watch/episodes');

    const datos = await temp.json();
    dato = datos.data.slice(0,4);
    console.log(dato);
    dato.forEach( d => {
        let plantillaCard = `
        <div class="col-md">
            <div class="card border-0 m-0 m-md-auto w-100">
                <img src="${d.entry.images.webp.large_image_url}"
                    class="card-img-top" alt="${d.entry.title}">
                <div class="card-body w-auto py-0 px-2 d-flex align-items-center">
                    <h5 class="card-title m-0">${d.entry.title}</h5>
                </div>
            </div>
        </div>
        `;
        gridCards.innerHTML += plantillaCard;

    });
}

