

const header = document.querySelector("header");
const mainplay = document.createElement("div");
mainplay.className = "display display1";
header.prepend(mainplay);
function Callcontai() {
    const displaycreate = document.createElement("div");
    displaycreate.className = "cards";

    mainplay.append(displaycreate);
    // cards create 

    const createcard = document.createElement("div");
    createcard.className = "card";
    // card create 

    const createimg = document.createElement("img");
    createcard.append(createimg);

    // img create 
    const disul = document.createElement("ul");
    // ul create 
    const disli = document.createElement("li");
    disli.className = "name";
    // li1 create 

    const disli1 = document.createElement("li");
    disli1.className = "charm";
    // li2 create 

    const disli2 = document.createElement("li");
    disli2.className = "topi";
    // li3 create 

    const anker1 = document.createElement("a");
    anker1.className = "anker";
    // anker create 

    anker1.href = "viewspells.html";
    anker1.innerHTML = "View spells";
    disul.append(disli, disli1, disli2, anker1);
    displaycreate.append(createcard, disul);

}


// create data 


for (let i = 1; i <= 40; i++) {
    Callcontai();
};


let displayIndex = 1;


const loadmore = document.querySelector(".load");
loadmore.addEventListener("click", myFunction);
function myFunction() {
    
    for (let i = 1; i <= 20; i++) {
        Callcontai();
    };


    // if (displayIndex == display.length) {
    //     loadmore.removeEventListener("click", myFunction)
    //     console.log("removeEventListener");

    // }
    // else {
    //     display[displayIndex].setAttribute("style", "display:flex");
    //     displayIndex++
    //     console.log(displayIndex);

    // }

};



// end 


// apis 

const url1 = "https://api.potterdb.com/v1/spells?page[number]=1&page[size]=100";
const url2 = "https://api.potterdb.com/v1/spells?page[number]=2&page[size]=100";
const url3 = "https://api.potterdb.com/v1/spells?page[number]=3&page[size]=100";
const url4 = "https://api.potterdb.com/v1/spells?page[number]=3&page[size]=16";

// apis end

// card Select

const cardsimage = document.querySelectorAll(".card > img");
const cardsname = document.querySelectorAll(".name");
const cardscharm = document.querySelectorAll(".charm");
const cardstpoi = document.querySelectorAll(".topi");
const hloworld = document.querySelector(".hlo-world >li");
const ankerlink = document.querySelectorAll(".anker")
// end


async function getData(url) {
    let jsonData = await fetch(url);
    let jsObject = await jsonData.json();
    return jsObject.data;



}

(async function getFullData() {
    let data1 = await getData(url1)
    let data2 = await getData(url2)
    let data3 = await getData(url3)
    let data4 = await getData(url4)

    let datafull = [data1, data2, data3, data4].flat()
    datafull.forEach((datas, idx) => {

        if (datas.attributes.image) {
            cardsimage[idx].src = datas.attributes.image;

        }
        else {
            cardsimage[idx].src = "https://potterdb.com/images/missing_spell.svg";

        }
        cardsname[idx].innerHTML = datas.attributes.name;
        cardscharm[idx].innerHTML = datas.attributes.category;
        cardstpoi[idx].innerHTML = datas.attributes.incantation;
        hloworld.innerHTML = datafull.length;
        ankerlink[idx].href = ankerlink[idx].href + `?id=${datas.links.self}`;




    });

}
)()

// end

















// addEventListener

const liicon = document.querySelector(".licontainer");
const svgicon = document.querySelector(".svg");
svgicon.addEventListener("click", svgfuntion)
function svgfuntion() {
    svgicon.setAttribute("style", "display:none");
    liicon.setAttribute("style", "display:flex");

};
liicon.addEventListener("click", cutmark)
function cutmark() {
    svgicon.setAttribute("style", "display:flex");
    liicon.setAttribute("style", "display:none");

};

// end 




