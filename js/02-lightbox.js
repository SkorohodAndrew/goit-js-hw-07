import { galleryItems } from './gallery-items.js';

// Change code below this line

const listFoto = document.querySelector('.gallery');
const cardsFoto = createFotoCard(galleryItems);

listFoto.insertAdjacentHTML('beforeend', cardsFoto);

listFoto.addEventListener('click', onListFotoClick);


function createFotoCard (fotos){
    return fotos.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img class="gallery__image" 
                src="${preview}"
                alt="${description}" />
            </a>
        </div> 
    `;
})
.join('');


}

function onListFotoClick (evt){
    evt.preventDefault()
    if (!evt.target.classList.contains('gallery__image')){
        return
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target}">`)

    instance.show()

}
