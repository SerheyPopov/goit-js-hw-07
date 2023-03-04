import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const cardsMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardsMarkup);
gallery.addEventListener("click", onClickPicture);

function createMarkup() {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
					<a class="gallery__link" href="${original}">
						<img
							class="gallery__image"
							src="${preview}"
							data-source="${original}"
							alt="${description}"
						/>
					</a>
				</div>`;
		})
		.join("");
}

function onClickPicture(evt) {
	evt.preventDefault();
	if (evt.target.nodeName !== "IMG") {
		return;
	}
	const instance = basicLightbox.create(
		`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`,
		{
			onClose: (instance) => {
				window.removeEventListener("keydown", escPictureClose);
			},
		}
	);
	instance.show();

	window.addEventListener("keydown", escPictureClose);

	function escPictureClose(evt) {
		if (evt.code === "Escape") {
			instance.close();
			console.log(evt);
		}
	}
}
