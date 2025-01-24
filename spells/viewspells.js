const id = new URLSearchParams(window.location.search);
const endPoint = id.get("id");

const url1 = "https://api.potterdb.com/v1/spells?page[number]=1&page[size]=100";
const url2 = "https://api.potterdb.com/v1/spells?page[number]=2&page[size]=100";
const url3 = "https://api.potterdb.com/v1/spells?page[number]=3&page[size]=100";
const url4 = "https://api.potterdb.com/v1/spells?page[number]=3&page[size]=16";


const cardcontanier = document.querySelector(".card-img");
const cardimg = document.querySelector(".card-img > img");
const cardh1 = document.querySelector(".book-name");
const nameli = document.querySelector(".name");
const effectli = document.querySelector(".effect");
const categoryli = document.querySelector(".category");
const lightli = document.querySelector(".light");



async function getData(url) {
    let jsonData = await fetch(url + `/` + endPoint);
    let jsObject = await jsonData.json();
    return jsObject.data;



}

(async function getFullData() {
    let data1 = await getData(url1 + `/` + endPoint)
    let data2 = await getData(url2 + `/` + endPoint)
    let data3 = await getData(url3 + `/` + endPoint)
    let data4 = await getData(url4 + `/` + endPoint)

    let data = [data1, data2, data3, data4].flat()
    data.forEach((datas) => {
        if (datas.attributes.image) {
            cardimg.src = datas.attributes.image;
        }
        else {
            cardimg.src = "https://potterdb.com/images/missing_spell.svg";

        }
        nameli.innerHTML = "Name &nbsp;: &nbsp;&nbsp&nbsp;&nbsp;" + datas.attributes.name;
        effectli.innerHTML = "Effect  &nbsp;: &nbsp;&nbsp&nbsp;&nbsp;" + datas.attributes.effect;
        categoryli.innerHTML = "category &nbsp;: &nbsp;&nbsp&nbsp;&nbsp;" + datas.attributes.category;
        lightli.innerHTML = "Name &nbsp;: &nbsp;&nbsp&nbsp;&nbsp;" + datas.attributes.light;
        cardh1.innerHTML = datas.attributes.name;


    });

}
)();
















