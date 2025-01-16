const id = new URLSearchParams(window.location.search);
const endPoint = id.get("id");

const url = "https://api.potterdb.com/v1/spells";


const cardcontanier = document.querySelector(".card-img");
const cardimg = document.querySelector(".card-img > img");