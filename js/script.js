
const jokesContainer = document.getElementById("joke");
const jokesButton = document.getElementById("jokes");
const jokesCategory = document.getElementById("category");

function getRandomJoke() {
  const url = "https://api.chucknorris.io/jokes/random";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      jokesContainer.textContent = data.value;
    });
}

function getJokeByCategory(category) {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      jokesContainer.textContent = data.value;
    });
}

jokesButton.addEventListener("click", () => {
  const selected = jokesCategory.value;
  if (selected === "random") {
    getRandomJoke();
  } else {
    getJokeByCategory(selected);
  }
});

fetch("https://api.chucknorris.io/jokes/categories")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((category) => {
      const option = document.createElement("option");
      option.textContent = category;
      option.value = category;
      jokesCategory.appendChild(option);
    });
  });

getRandomJoke();

