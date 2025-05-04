/*=============Reusable css classes=========*/

/*=============image galery=========*/

function imgGallery() {
  const mainImg = document.querySelector('.details__img'),
    smallImg = document.querySelectorAll('.details__small-img');


  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src;
    })
  })

}

imgGallery();














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
  tabContents = document.querySelectorAll('[data-content]');


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




/*=============shop.html=========*/

// Shop menüsünü aç/kapat
// document.getElementById('shop-menu').addEventListener('mouseenter', function () {
//   document.getElementById('main-dropdown').classList.add('show');
// });

// document.getElementById('shop-menu').addEventListener('mouseleave', function () {
//   document.getElementById('main-dropdown').classList.remove('show');
// });

// // Alt menü seçeneklerine tıklama
// const submenuTriggers = document.querySelectorAll('.submenu-trigger');

// submenuTriggers.forEach(trigger => {
//   trigger.addEventListener('click', function (e) {
//     e.preventDefault();

//     // Tüm içerikleri gizle
//     document.querySelectorAll('.category-content').forEach(content => {
//       content.classList.remove('active');
//     });

//     // Tıklanan kategoriyi göster
//     const category = this.getAttribute('data-category');
//     document.getElementById(`${category}-content`).classList.add('active');

//     // Menüyü kapat
//     document.getElementById('main-dropdown').classList.remove('show');
//   });
// });




document.addEventListener('DOMContentLoaded', function () {
  const shopMenu = document.querySelector('shop-menu');
  const dropdown = document.querySelector('shop-dropdown');

  shopMenu.addEventListener('mouseenter', function () {
    dropdown.style.display = 'block';
    dropdown.style.opacity = '1';
    dropdown.style.visibility = 'visible';
  });

  shopMenu.addEventListener('mouseleave', function () {
    dropdown.style.display = 'none';
    dropdown.style.opacity = '0';
    dropdown.style.visibility = 'hidden';
  });
});