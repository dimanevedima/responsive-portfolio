document.addEventListener('DOMContentLoaded', () => {
// Menu show y hidden
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// MENU SHOW
if(navToggle){
  navToggle.addEventListener('click', (e) => {
    navMenu.classList.add('show-menu');
  });
};

//MENU HIDDEN
if(navClose){
  navClose.addEventListener('click', (e) => {
    navMenu.classList.remove('show-menu');
  });
};

//REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu');
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu');
// }

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


const arrows = document.querySelectorAll('.skills__content');
arrows.forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'I') {
      //console.log(e.target);
      if(arrow.classList.contains('skills__open')){
        //console.log('open');
        arrow.classList.add('skills__close');
        arrow.classList.remove('skills__open');
      }else{
        //console.log('close');
        arrow.classList.remove('skills__close');
        arrow.classList.add('skills__open');
      }
    }
  })
});

// QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
      //console.log(target);
    tabContent.forEach(tabContent => {
      tabContent.classList.remove('qual__active')
    });
    target.classList.add('qual__active');
    tabs.forEach(tab => {
      tab.classList.remove('qual__active')
    });
      tab.classList.add('qual__active')
  })
});

//Services modal

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');

// let modal = (modalClick) => {
//   modalViews[modalClick].classList.add('active-modal');
// }

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    //modal(i);
    modalViews[i].classList.add('active-modal');
  })
});

modalClose.forEach((close, i) => {
  close.addEventListener('click', () => {
    modalViews[i].classList.remove('active-modal');
  })
});


//SWIPER

let swiperPortfolio = new Swiper('.port__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

// TESTIMONIAL

let swiperTest = new Swiper('.test__container', {
    //cssMode: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
      568: {
        slidesPerView: 2,
      }
    }
  });


// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;  // сколько пролистано от самого верха
  //console.log(scrollY);
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;  // высота каждой секции
    //console.log(sectionHeight);
    const sectionTop = current.offsetTop - 50;  // высота от верха - 50
    //console.log(sectionTop);
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){ // если пролистано больше чем расстояние секции от верха и пролистано меньше чем расстояние до верха плюс высота секции
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    }else{
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }

  });

}

window.addEventListener('scroll', scrollActive)


// Change background header

const scrollHeader = () => {
  const nav = document.getElementById('header');
  if(this.scrollY >= 200){
    nav.classList.add('scroll-header');
  }else{
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

// SHOW SCROLL

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
//  console.log(scrollUp);
  if(this.scrollY >= 560){
    scrollUp.classList.add('show-scroll');
  }else{
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);


//DARK THEME

const themeButton = document.getElementById('theme-button'),
      darkTheme = 'dark-theme',
      iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
  console.log(themeButton.classList);
})







});






// /*===== MENU SHOW =====*/
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)
//
//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//         })
//     }
// }
// showMenu('nav-toggle','nav-menu');
//
//
//
// /*===== ACTIVE AND REMOVE MENU =====*/
// const navLink = document.querySelectorAll('.nav__link');
//
// function linkAction(){
//   /*Active link*/
//   navLink.forEach(n => n.classList.remove('active'));
//   this.classList.add('active');
//
//   /*Remove menu mobile*/
//   const navMenu = document.getElementById('nav-menu')
//   navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction));
//
// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// });
//
// /*SCROLL HOME*/
// sr.reveal('.home__title',{});
// sr.reveal('.button',{delay: 200});
// sr.reveal('.home__img',{delay: 400});
// sr.reveal('.home__social-icon',{ interval: 200});
//
// /*SCROLL ABOUT*/
// sr.reveal('.about__img',{});
// sr.reveal('.about__subtitle',{delay: 400});
// sr.reveal('.about__text',{delay: 400});
//
// /*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle',{});
// sr.reveal('.skills__text',{});
// sr.reveal('.skills__data',{interval: 200});
// sr.reveal('.skills__img',{delay: 600});
//
// /*SCROLL WORK*/
// sr.reveal('.work__img',{interval: 200});
//
// /*SCROLL CONTACT*/
// sr.reveal('.contact__input',{interval: 200});
