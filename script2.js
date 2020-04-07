const container = document.querySelector(".container");
const movie = document.querySelector("#movie");
const count = document.querySelector("#count");

let movieCost = +movie.value;

console.log(movieCost);

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateCountAndCost();
});

movie.addEventListener("change", (e) => {
  movieCost = e.target.value;
  updateCountAndCost();
});

const updateCountAndCost = () => {
  const seatsTaken = document.querySelectorAll(".row .selected").length;
  count.innerText = seatsTaken;
  const totalSeatsTaken = movieCost * seatsTaken;
  total.innerText = totalSeatsTaken;
};
