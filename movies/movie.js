console.log(window.location.search);
const id = new URLSearchParams(window.location.search);

const endPoint = id.get("id");

const url = "https://api.potterdb.com/v1/movies";

(async function fetchData() {
  const jsonData = await fetch(url + "/" + endPoint);
  const finalData = await jsonData.json();
  const dataObject = finalData.data;
  console.log(dataObject);
  console.log(dataObject.attributes.slug);
})();
