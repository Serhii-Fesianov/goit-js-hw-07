import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const markup = galleryItems.map((item)=>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`
).join('')
  
  galleryList.innerHTML = markup
  
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    animationSlide: 100,
  });

  

  