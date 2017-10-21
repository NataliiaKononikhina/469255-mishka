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
