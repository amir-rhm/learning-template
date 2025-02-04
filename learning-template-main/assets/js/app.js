"use strict"

let $ = document

function _getElement(element) {
  return $.querySelector(element)
}

let mobileMenu = _getElement(".mobile-menu")
let moblieListMenu = _getElement(".mobile-list")
let iconMobileMenu = _getElement(".header__menu-icon")
let headerSearchIcon = _getElement(".header__actions-search-icon")
let headerSearchBox = _getElement(".header-actions__search-box")
let searchCourseIcon = _getElement(".main-search__text")
let searchCourseContent = _getElement(".main-search__sub")
let prodoctCatOrder = _getElement(".category__order")
let prodoctCatMenu = _getElement(".order__menu")
let prodoctCatMenuParent = _getElement(".category__order")
let prodoctCatItem = _getElement(".order__menu-item")
// open mobile menu
iconMobileMenu.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("mobile-menu--active")
})

// moblie submenu
moblieListMenu.addEventListener("click", (e) => {
  let listItemA = e.target
  if (listItemA.classList.contains("mobile-list__link")) {
    let listItemLi = listItemA.parentElement
    let sumMenu = listItemLi.nextElementSibling
    if (sumMenu) {
      sumMenu.classList.toggle("mobile-list__submenu--active")
      listItemA.nextElementSibling.classList.toggle("arrowbottom")
    }
  }
})

// search box
headerSearchIcon.addEventListener("click", (e) => {
  let currentDisplay = getComputedStyle(headerSearchBox).display
  if (currentDisplay === "none") {
    headerSearchBox.style.display = "block"
  } else {
    headerSearchBox.style.display = ""
  }
})

// main search content
if (document.title === "mainPage") {
  searchCourseIcon.addEventListener("click", (e) => {
    searchCourseContent.classList.toggle("active")
  })
}

// relate productCat page
prodoctCatOrder.addEventListener("click", (e) => {
  prodoctCatMenu.classList.add("active")
})

prodoctCatMenuParent.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    prodoctCatMenu.classList.remove("active")
  }
})
