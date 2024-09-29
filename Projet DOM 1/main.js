//Recupérer tous les éléments du DOM

// Récupérer les boutons plus

const increaseBtnTab = document.getElementsByClassName("fa-plus-circle");
const decreaseBtnTab = document.getElementsByClassName("fa-minus-circle");
const quantityTab = document.getElementsByClassName("quantity");

let currentQuantity = 1;

increaseBtn.addEventListener("click", () => {
  currentQuantity++;
  quantity.textContent = currentQuantity;
});

decreaseBtn.addEventListener("click", () => {
  if (currentQuantity > 1) {
    currentQuantity--;
    quantity.textContent = currentQuantity;
  }
});
