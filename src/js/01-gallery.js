import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery')

const markup = galleryItems.map((item)=>
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
).join('')

galleryList.innerHTML = markup;

galleryList.addEventListener('click', (event)=>{
  event.preventDefault()
  if(event.target.nodeName !== 'IMG'){
   return 
  }
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" alt="${event.target.alt}">
`)

instance.show()

document.addEventListener('keydown', onEscapeClick)
function onEscapeClick(ev){
if(ev.key !== 'Escape'){
    return
}
instance.close()

document.removeEventListener('keydown', onEscapeClick)
}
})

// const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
//     onShow: () => {
//         document.addEventListener("keydown", onEscDown);
//     },
//     onClose: () => {
//         document.removeEventListener("keydown", onEscDown);
//     },
// });


