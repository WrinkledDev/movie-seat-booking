const container = document.querySelector(".container");
const movieSelected = document.querySelector("#movie");
const count = document.querySelector("#count");
const total = document.querySelector("#total");

let moviePrice = +movieSelected.value;

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateTotals();
});

movieSelected.addEventListener("change", (e) => {
  moviePrice = +e.target.value;
  updateTotals();
});

const updateTotals = () => {
  const totalSeatsSelected = document.querySelectorAll(".row .seat.selected")
    .length;
  count.innerText = totalSeatsSelected;
  const totalPrice = moviePrice * totalSeatsSelected;
  total.innerText = totalPrice;
};
