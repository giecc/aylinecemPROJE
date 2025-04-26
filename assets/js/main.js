/*=============Reusable css classes=========*/
/*=============Reusable css classes=========*/
/*=============Reusable css classes=========*/
/*=============Reusable css classes=========*/
/*=============Reusable css classes=========*/
/*=============Reusable css classes=========*/
/*=============Reusable css classes=========*/
/*=============Reusable css classes=========*/



/*=============Swiper categories=========*/

// var swiperCategories = new Swiper(".categories__container", {
//   spaceBetween: 20,
//   loop: true,

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1400: {
//       slidesPerView: 6,
//       spaceBetween: 24,
//     },
//   },
// });



// document.addEventListener('DOMContentLoaded', function () {
//   var swiperCategories = new Swiper(".categories__container", {
//     spaceBetween: 20,
//     loop: true,
//     slidesPerView: 'auto', // Otomatik genişlik ayarı
//     centeredSlides: true, // Slaytları ortalar

//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 2,
//         centeredSlides: false
//       },
//       640: {
//         slidesPerView: 3
//       },
//       768: {
//         slidesPerView: 4
//       },
//       1024: {
//         slidesPerView: 5
//       }
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.categories__container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 }
    }
  });
});






/*=============SWIPER PRODUCTS=========*/



/*=============PRODUCTS TABS=========*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');


tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    console.log(target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });


    target.classList.add('active-tab');


    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');

  });
}); 