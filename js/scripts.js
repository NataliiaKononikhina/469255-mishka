var openInIndex = document.querySelector(".best-product__order");
var openInCatalog = document.querySelector(".product__odrer");
var popup = document.querySelector(".order-wrapper");
var closePopup = document.querySelector(".order__add");

if (openInIndex) {
  openInIndex.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("show-popup");
  });
}

openInCatalog.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show-popup");
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show-popup");
});
