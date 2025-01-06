const url = "https://api.potterdb.com/v1/movies";

const loader = document.querySelector(".loader");
const allContainer = [
  document.querySelector("header"),
  document.querySelector("main"),
  document.querySelector("footer"),
];
allContainer.forEach((container) => {
  container.style.display = "none";
});

const moviesLink = document.querySelectorAll(".moviesLink");
const textLinks = document.querySelectorAll(".link-to-movie-page");
const MoviePosters = document.querySelectorAll(".moviesLink > img");
const MovieNames = document.querySelectorAll(".movie-name");

(async function fetchData() {
  const jsonData = await fetch(url);
  const finalData = await jsonData.json();
  const dataObject = finalData.data;

  dataObject.forEach((data, idx) => {
    console.log(data.attributes);
    console.log(moviesLink[idx]);
    MoviePosters[idx].src = data.attributes.poster;
    MovieNames[idx].innerHTML = data.attributes.slug
      .toUpperCase()
      .replaceAll("-", " ");
    moviesLink[idx].href = moviesLink[idx].href + `?id=${data.id}`;
    textLinks[idx].href = textLinks[idx].href + `?id=${data.id}`;
  });
})().then(() => {
  allContainer.forEach((container) => {
    container.style.display = "block";
  });
  loader.style.display = "none";
});
