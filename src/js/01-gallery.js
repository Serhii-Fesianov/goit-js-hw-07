import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
  )
  .join("");

galleryList.innerHTML = markup;

const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
  onShow: () => {
    document.addEventListener("keydown", keyBordPress);
  },
  onClose: () => {
    document.removeEventListener("keydown", keyBordPress);
  },
});

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
});

function keyBordPress(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
