"use strict";
// Modal window
import {
  modal,
  overlay,
  btnCloseModal,
  btnsOpenModal,
  btnScrollTo,
  section1,
  menuIcon,
  navbar,
  tabs,
  tabsContainer,
  tabsContent,
  nav,
  allSections,
  header,
  imgTargets,
} from "./variables.js";

// * MODAL WINDOW
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//Pratica ruim
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// * STICKY NAVIGATION
// BAD PRACTICE
// window.addEventListener("scroll", function (e) {
//   nav.classList.toggle("sticky", window.scrollY > 150);
// })

// GOOD PRACTICE WITH THE INTERSECTION OBSERVER API
// RESPONSIVE DESIGN
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry.isIntersecting)
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});
headerObserver.observe(header);

// * BTN SCROLL TO
btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

// * MENU ICON NAVBAR
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("block");
};

// * TABBED COMPONENT
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((t) => t.classList.remove("operations__content--active"));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//* MENU FADE ANIMATION
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const clickedLink = e.target;
    const siblings = clickedLink.closest(".nav").querySelectorAll(".nav__link");
    const logo = clickedLink.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== clickedLink) el.style.opacity = this;
      logo.style.opacity = this;
    });
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// * REVEAL SECTIONS
const revelSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revelSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//* LAZY LOADING IMG (PERFORMANCE)

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px"
});

imgTargets.forEach((img) => imgObserver.observe(img));
