let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let logo = document.querySelector('.logo')

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active' );
   if (navbar.classList.contains('active')) {
      header.style.backgroundColor = 'var(--white)';
      menuBtn.style.color = 'var(--black)'
      logo.style.color = 'var(--black)'
   } else {
      header.style.backgroundColor = 'var(--default-color)';
      menuBtn.style.color = 'var(--white)'
      logo.style.color = 'var(--white)'
   }
};

window.onscroll = () => {
   if (window.pageYOffset > 50 && window.getComputedStyle(menuBtn).display !== 'none'){
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
   header.style.backgroundColor = 'var(--default-color)';
   menuBtn.style.color = 'var(--white)'
   logo.style.color = 'var(--white)'
   }
};

AOS.init();

   let places = document.querySelectorAll(".place-list li");
   let active = "images/home-bg-1.jpg images/home-image-1.png";
   let images = document.querySelectorAll(".image1, .image2, .image3");

   places.forEach((e) => {
   e.addEventListener("mouseenter", (event) => {
      places.forEach((e) => {
      e.classList.remove("active");
      });

      event.target.classList.add("active");
      active = event.target.getAttribute("data-img");
      let banner = document.querySelector(".banner");
      banner.style.backgroundImage = `url('${active}')`;
      images.forEach((img) => {
      img.classList.remove("active");
      });
      let index = event.target.getAttribute("data-index");
      let correspondingImage = document.querySelector(`.image${index}`);
      correspondingImage.classList.add("active");
      correspondingImage.style.opacity = "0";
      setTimeout(() => {
      correspondingImage.style.opacity = "1";
      correspondingImage.style.transform = "translateY(0)";
      }, 50);
   });
});




var swiper = new Swiper(".species-slider", {
   grabCursor:false,
   loop:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
   
});


const previewContainer = document.querySelector('.species-preview-container');
const previewBox = previewContainer.querySelectorAll('.species-preview');
const speciesButtons = document.querySelectorAll('.species .slide button');
const closePreviewButtons = previewContainer.querySelectorAll('#close-preview');

speciesButtons.forEach(button => {
   button.addEventListener('click', () => {
      const species = button.parentElement;
      if (species.classList.contains('swiper-slide-active')) {
         previewContainer.style.display = 'flex';
         const name = species.getAttribute('data-name');
         previewBox.forEach(preview => {
            const target = preview.getAttribute('data-target');
            if (name === target) {
               preview.classList.add('active');
            }
         });
      }
   });
});

closePreviewButtons.forEach(button => {
   button.addEventListener('click', () => {
      previewContainer.style.display = 'none';
      previewBox.forEach(preview => {
         preview.classList.remove('active');
      });
   });
});


closePreviewButtons.forEach((closePreviewButtons) => {
   closePreviewButtons.addEventListener("click", () => {
      const slides = document.querySelectorAll('.species-preview');
      slides.forEach((slide) => {
         const readMoreButton = slide.querySelector('button');
         if (readMoreButton.innerHTML === 'Read Less') {
            const dots = slide.querySelector('#dots');
            const moreText = slide.querySelector('#more');
            dots.style.display = 'inline';
            moreText.style.display = 'none';
            readMoreButton.innerHTML = 'Read More';
         }
      });
   });
});

let slideCounter = 0;
const totalSlides = 9;

function toggleReadMoreLess(btn) {
   const parentSlide = btn.closest('.species-preview');
   const dots = parentSlide.querySelector('#dots');
   const moreText = parentSlide.querySelector('#more');

   if (btn.innerHTML === 'Read More') {
      dots.style.display = 'none';
      moreText.style.display = 'inline';
      btn.innerHTML = 'Read Less';
   } else {
      dots.style.display = 'inline';
      moreText.style.display = 'none';
      btn.innerHTML = 'Read More';
   }
   slideCounter++;
   if (slideCounter === totalSlides) {
      slideCounter = 0;
      btn.innerHTML = 'Read More';
   }
}