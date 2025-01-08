const url = "https://api.potterdb.com/v1/books";
const bookCard = document.querySelectorAll(".book-card");
const imgLink = document.querySelectorAll(".img-link");
const bookName = document.querySelectorAll(".book-name");
const release = document.querySelectorAll(".release-date");
const author = document.querySelectorAll(".author");

(async function fetchData() {
   const jsonData = await fetch (url);
   const finalData = await jsonData.json();
   const dataObject = finalData.data;

   dataObject.forEach((data,idx)=> {
      console.log(data.attributes);
     console.log(imgLink[idx]);
     imgLink[idx].src = data.attributes.cover;      
     bookName[idx].innerHTML= data.attributes.title;
     release[idx].innerHTML= "Release-Date: " + data.attributes.release_date;
     author[idx].innerHTML = "Author: "+data.attributes.author;
   });
})()