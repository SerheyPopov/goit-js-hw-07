import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const cardsMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardsMarkup);

function createMarkup() {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
		})
		.join("");
}

function instalSimpleLightBox() {
	const lightbox = new SimpleLightbox(".gallery .gallery__item", {
		captionsData: "alt",
		captionDelay: 250,
	});
}

instalSimpleLightBox();
