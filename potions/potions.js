const url = "https://api.potterdb.com/v1/potions?page[number]=1&page[size]=100";
const url2 = "https://api.potterdb.com/v1/potions?page[number]=2&page[size]=68";

const potionimg = document.querySelectorAll(".potion-img > img");
const potionName = document.querySelectorAll(".potion-name");
const potionDiff = document.querySelectorAll(".difficulty");
const potioneffect = document.querySelectorAll(".effect");
const potionChar = document.querySelectorAll(".character");

async function getData(url) {
  let jsonData = await fetch(url);
  let jsObject = await jsonData.json();
  return jsObject.data;
}

(async function getFullData() {
  let data1 = await getData(url);
  let data2 = await getData(url2);

  let data = [data1, data2].flat();
  data.forEach((datas, idx) => {
    if (datas.attributes.image) {
      potionimg[idx].src = datas.attributes.image;
    } else {
      potionimg[idx].src =
        "https://m.media-amazon.com/images/I/71EIXccMpZL._AC_UF350,350_QL80_.jpg";
    }

    potionName[idx].innerHTML = datas.attributes.name;
    potionDiff[idx].innerHTML = datas.attributes.difficulty;
    potioneffect[idx].innerHTML = datas.attributes.effect;
    potionChar[idx].innerHTML = datas.attributes.characteristics;
  });

  console.log(data1);
  console.log(data2);
})();

let displayIndex = 1;

const display = document.querySelectorAll(".display");
const loadmore = document.querySelector(".load");
loadmore.addEventListener("click", myFunction);
function myFunction() {
  if (displayIndex == display.length) {
    loadmore.removeEventListener("click", myFunction);
    console.log("removeEventListener");
  } else {
    display[displayIndex].setAttribute("style", "display:flex");
    displayIndex++;
    console.log(displayIndex);
  }
}
