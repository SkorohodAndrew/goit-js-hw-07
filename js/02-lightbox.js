import { galleryItems } from "./gallery-items.js";

// Change code below this line

const listFoto = document.querySelector(".gallery");
const cardsFoto = createFotoCard(galleryItems);

listFoto.insertAdjacentHTML("beforeend", cardsFoto);

// listFoto.addEventListener("click", onListFotoClick);

function createFotoCard(fotos) {
  return fotos
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}"
           />
      </a>
      `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
