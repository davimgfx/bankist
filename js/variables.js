const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");
const allSections = document.querySelectorAll(".section")
const header = document.querySelector(".header")
const menuIcon = document.querySelector("#menu__icon");

const nav = document.querySelector(".nav")
const navbar = document.querySelector(".nav__links")
const navbarLinks = document.querySelectorAll(".nav__link")

const tabs = document.querySelectorAll(".operations__tab")
const tabsContainer = document.querySelector(".operations__tab-container")
const tabsContent = document.querySelectorAll(".operations__content")

const imgTargets = document.querySelectorAll("img[data-src]")

export { modal, overlay, btnCloseModal, btnsOpenModal, btnScrollTo, section1, menuIcon, navbar, navbarLinks, tabs,tabsContainer, tabsContent, nav, header, allSections, imgTargets };
