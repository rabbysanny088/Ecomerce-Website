// Copy menu for mobile

function copyMenu() {
    // copy indide .dpt-cat te .dcpartments
    let dptCategory = document.querySelector('.dpt-cat');
    let dptPlace = document.querySelector('.deparments');
    // console.log(dptPlace)
    dptPlace.innerHTML = dptCategory.innerHTML;


    // Copy inside nav to nav

    let mainNav = document.querySelector('.header-nav nav');
    let navPlace = document.querySelector('.off-canvas nav');
    // console.log(navPlace)
    navPlace.innerHTML = mainNav.innerHTML;


    // copy .header-top .wrapper to .thetop-nav

    let topNav = document.querySelector('.header-top .wrapper');
    let topPlace = document.querySelector('.off-canvas .thetop-nav');
    // console.log(topPlace);
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();


// Show mobile menu

const menuButton = document.querySelector('.trigger');
// console.log(menuButton)
    closeButton = document.querySelector('.t-close');
    // console.log(closeButton)
    addClass = document.querySelector('.site');
    // console.log(addClass)

    menuButton.addEventListener('click', function (){
      addClass.classList.toggle('showmenu')
      // console.log(menuButton)
    })

    closeButton.addEventListener('click', function() {
      addClass.classList.remove('showmenu')
      // console.log(closeButton)
    })




const  submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));
  
function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null)
  if(this.closest('.has-child').classList != 'expand');
  this.closest('.has-child').classList.toggle('expand')
}

// Sample array of elements


//slider

const swiper = new Swiper('.swiper', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});


// show search

const searchButton = document.querySelector('.t-search'),
  tClose = document.querySelector('.search-close'),
  showClass = document.querySelector('.site');


searchButton.addEventListener('click', function () {
  showClass.classList.toggle('showsearch');
})

tClose.addEventListener('click', function() {
  showClass.classList.remove('showsearch');
});


const best = document.getElementById('loader');


onload = setTimeout(() => {
    best.classList.add('disappear');
    setTimeout(() => {
      best.remove('disappear')
    }, 1250);
}, 3000);





