/*=============== SHOW SIDEBAR ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById('sidebar');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  /* Validate If Constants Exist */
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add('show-sidebar');
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove('show-sidebar');
    });
  }
});


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)

    tabContent.forEach(tabContents => {
      tabContents.classList.remove('skills__active')
    })
    target.classList.add('skills__active')

    tabs.forEach(tab => {
      tab.classList.remove('skills__active')
    })
    tab.classList.add('skills__active')
  })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card'
  },
  animation: {
    duration: 300
  }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach(item => item.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach(item => item.addEventListener("click", activeWork));


/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement); // corrected parentElement
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}


/*=============== SERVICES MODAL ===============*/
const modelViews = document.querySelectorAll(".services_model"),
      modelBtns = document.querySelectorAll(".services__button"),
      modelCloses = document.querySelectorAll(".services__model-close");

let model = function(modelClick) {
  modelViews[modelClick].classList.add("active-model");
}

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener("click", () => {
    model(i);
  });
});
modelCloses.forEach((modelClose)=>{
  modelClose.addEventListener("click", () => {
    modelViews.forEach((modelView)=>{
      modelView.classList.remove("active-model")
    })
  })
})

/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonials__container", {
  spaceBetween: 24,
  loop:true,
  grabCursor:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== INPUT ANIMATION ===============*/
const inputs=document.querySelectorAll(".input");
function focusFunc(){
  let parent =this.parentNode;
  parent.classList.add("focus");
}

function blurFunc(){
  let parent=this.parentNode;
  if(this.value==""){
    parent.classList.remove("focus");
  }
}

inputs.forEach((input)=>{
  input.addEventListener("focus",focusFunc);
  input.addEventListener("blur",blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrolly = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    // Calculate the bottom of the current section
    const sectionBottom = sectionTop + sectionHeight;

    // Check if the scroll position is within the bounds of the current section
    if (scrolly > sectionTop && scrolly <= sectionBottom) {
      // Add active class to the corresponding nav link
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
    } else {
      // Remove active class from the corresponding nav link
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
    }
  });
}


/*=============== SHOW SCROLL UP ===============*/
