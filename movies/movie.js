const id = new URLSearchParams(window.location.search);

const endPoint = id.get("id");

const url = "https://api.potterdb.com/v1/movies";


const MovieHead = document.querySelector("h1");
const copyRight = document.querySelector(".copyright");
const moviename = document.querySelectorAll(".moviename");
const aboutMovie = document.querySelector(".about-movie");
const aboutTeam = document.querySelector(".about-team");
const poster = document.querySelector(".poster");

const loader = document.querySelector(".loader");
const allContainer = [
  document.querySelector("header"),
  document.querySelector("main"),
  document.querySelector("footer"),
];
allContainer.forEach((container) => {
  container.style.display = "none";
});

(async function fetchData() {
  const jsonData = await fetch(url + "/" + endPoint);
  const finalData = await jsonData.json();
  const dataObject = finalData.data;
  console.log(dataObject);
  console.log(dataObject.attributes.slug);
  document.querySelector("title").innerHTML = dataObject.attributes.title;




  const movieTitle = dataObject.attributes.title.toUpperCase();

  // writing movie name to every moviename span
  moviename.forEach((movie, idx) => {
    movie.innerHTML = movieTitle;
  });

  // h1 in webpage
  MovieHead.innerHTML = movieTitle;

  // title of webpage
  document.querySelector("title").innerHTML = movieTitle;

  // setting up a strinf which has multiple names.
  let producersString = "";
  dataObject.attributes.producers.forEach((Name, idx) => {
    if (idx == dataObject.attributes.producers.length - 1) {
      producersString = producersString + " and " + Name;
    } else if (Name) {
      producersString = producersString + ", " + Name;
    }
  });

  // setting about para for webpage

  aboutMovie.innerHTML = `${movieTitle} was released on ${dataObject.attributes.release_date}. The film has a runtime of ${dataObject.attributes.running_time} and received a ${dataObject.attributes.rating} rating. It was a major box office success, grossing over ${dataObject.attributes.box_office} worldwide against a budget of ${dataObject.attributes.budget}. The movie is widely regarded as one of the best science fiction films of its era, praised for its complex plot and stunning visual effects.`;

  aboutTeam.innerHTML = `The film was directed by ${dataObject.attributes.directors}. And this movie was produced by ${producersString}. The cinematography was handled by ${dataObject.attributes.cinematographers[0]}, while the editing was done by ${dataObject.attributes.editors[0]}. The film's music was composed by ${dataObject.attributes.music_composers[0]}. It was distributed by Warner Bros. Pictures, contributing to its widespread global success.`;

  // setting poster of movie
  poster.src = dataObject.attributes.poster;
  poster.alt = movieTitle;

  // setting copy right info for footer
  copyRight.innerHTML = ` &copy; All right reserved by Team Harry Potter`;

  poster.style.height = "485px";

})().then(() => {
  allContainer.forEach((container) => {
    container.style.display = "block";
  });
  loader.style.display = "none";
});
