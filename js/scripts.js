var open = document.querySelector(".best-product__order");
var popup = document.querySelector(".order-wrapper");
var closePopup = document.querySelector("order__add");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show-popup");
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show-popup");
});
