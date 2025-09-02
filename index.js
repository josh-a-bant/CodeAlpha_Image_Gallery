const lightbox = document.querySelector(".lightbox");
// console.log(lightbox);

const galleryItems = document.querySelectorAll(".images img");
// console.log(galleryItems);

const lightboxImg = document.querySelector(".lightbox .img");
// console.log(lightboxImg);

let currentIndex = 0;

galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox(img.src);
    // console.log(index);
  });
});

function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

function filterImages(catagory) {
  const items = document.querySelectorAll(".images");
  items.forEach((item) => {
    // console.log(item.classList);
    if (catagory === "all" || item.classList.contains(catagory)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeSlide(step) {
  currentIndex =
    (currentIndex + step + galleryItems.length) % galleryItems.length;
  const selectedImage = galleryItems[currentIndex];
  lightboxImg.src = selectedImage.src;
}
