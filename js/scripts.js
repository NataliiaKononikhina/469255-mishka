function hideMenu(mainNavToggle, mainNavItemMobs, pageMain) {
  mainNavToggle.classList.add("main-nav__toggle--burger");
  mainNavToggle.classList.add("main-nav__toggle--show");

  mainNavItemMobs.forEach(function (mobItem) {
    mobItem.classList.add("main-nav__item-mob--hidden");
  });

  pageMain.classList.add("page-main--no-padding");
}

function initMenuHandlers(mainNavToggle, mainNavItemMobs, pageMain) {
  mainNavToggle.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (mainNavToggle.classList.contains("main-nav__toggle--burger")) {
      mainNavToggle.classList.remove("main-nav__toggle--burger");
      mainNavToggle.classList.add("main-nav__toggle--close");

      mainNavItemMobs.forEach(function (mobItem) {
        mobItem.classList.remove("main-nav__item-mob--hidden");
      });

      pageMain.classList.remove("page-main--no-padding");
    } else {
      mainNavToggle.classList.remove("main-nav__toggle--close");
      mainNavToggle.classList.add("main-nav__toggle--burger");

      mainNavItemMobs.forEach(function (mobItem) {
        mobItem.classList.add("main-nav__item-mob--hidden");
      });

      pageMain.classList.add("page-main--no-padding");
    }
  });
}

function initPopupHandlers() {
  var openModals = document.querySelectorAll(".js-openOrderModal");
  var popup = document.querySelector(".order-wrapper");
  var closePopup = document.querySelector(".js-closeOrderModal");

  if (open) {
    openModals.forEach(function (modal) {
      modal.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("show-popup");
      });
    });
  }

  closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("show-popup");
  });

  document.querySelector("body").addEventListener("keyup", function (evt) {
    if (popup.classList.contains('show-popup') && evt.keyCode === 27) {
      popup.classList.remove("show-popup");
    }
  });
}

function init() {
  var mainNavToggle = document.querySelector(".main-nav__toggle");
  var mainNavItemMobs = document.querySelectorAll(".main-nav__item-mob");
  var pageMain = document.querySelector(".page-main");

  hideMenu(mainNavToggle, mainNavItemMobs, pageMain);
  initPopupHandlers();
  initMenuHandlers(mainNavToggle, mainNavItemMobs, pageMain);
}

init();
