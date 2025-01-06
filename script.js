const url = "https://api.potterdb.com/v1/movies";

const moviesLink = document.querySelectorAll(".moviesLink");
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
      moviesLink[idx].href = moviesLink[idx].href+`?id=${data.id}`
    console.log(data.attributes.slug.toUpperCase().replaceAll("-", " "));
  });
})();
