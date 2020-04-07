const container = document.querySelector(".container");
const movie = document.getElementById("movie");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

let totalCostSeatsDependingOnMovie = +movie.value;

// Need to be able to register click to container
// Need to be able to select/deselect unoccupied seats
container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
  }
  UpdateCountAndTotal();
});

// Need to be able to select movie
movie.addEventListener("change", (event) => {
  totalCostSeatsDependingOnMovie = event.target.value;
  UpdateCountAndTotal();
});

// Need to be able to see seat count and total update based on cost of movie
const UpdateCountAndTotal = () => {
  const totalCount = document.querySelectorAll(".row .seat.selected").length;
  count.innerText = totalCount;
  const totalCost = totalCount * totalCostSeatsDependingOnMovie;
  total.innerText = totalCost;
};
