// This first! Navigation links

// TODO create fullstack navigation management system

// Currently active menu button
let listItem = document.querySelector("div.nav>div>ul>li");
let listHref = listItem
  .querySelector("div.nav>div>ul>li>a")
  .getAttribute("href");
let navParent = document.getElementById("navUl").childElementCount;
let path = window.location.pathname;

for (i = 0; i < navParent; i++) {
  if (path == listHref) {
    let listLink = listItem.querySelector("div.nav>div>ul>li>a");
    listLink.classList.add("active");
    break;
  } else {
    listItem = listItem.nextElementSibling;
    if (listItem == null) {
      break;
    } else {
      listHref = listItem
        .querySelector("div.nav>div>ul>li>a")
        .getAttribute("href");
    }
  }
}

// Menu toggle
let menuBrgr = document.querySelector("#menuBrgr");
let wholeMenu = document.querySelector("#navbar");
let mediaQuer = window.matchMedia("(min-width: 660px)");
let menuHeight = window.getComputedStyle(wholeMenu).getPropertyValue("height");
menuHeight = parseInt(menuHeight.replace(/px/, "")) + 9 + "px";

function resizeListen(mediaQuer) {
  if (mediaQuer.matches) {
    wholeMenu.style.marginTop = "0px";
  } else {
    let menuStat = false;
    wholeMenu.style.marginTop = "-208px";

    function menuToggle(e) {
      e.preventDefault();
      if (menuStat == false) {
        let menuHeight = window
          .getComputedStyle(wholeMenu)
          .getPropertyValue("height");
        menuHeight = parseInt(menuHeight.replace(/px/, "")) + 9 + "px";
        wholeMenu.style.marginTop = "0px";
        menuBrgr.style.marginTop = menuHeight;
        menuStat = true;
      } else if (menuStat == true) {
        wholeMenu.style.marginTop = "-210px";
        menuBrgr.style.marginTop = "9px";
        menuStat = false;
      }
    }
    menuBrgr.onclick = menuToggle;
  }
}
resizeListen(mediaQuer);
mediaQuer.addListener(resizeListen);
