
let arr = [
  {
    id: document.getElementById("cardHeading1").src,
    title: "IPHONE",
    image: document.getElementById("cardImage1").src,
    price: document.getElementById("price1"),
    description: document.getElementById("cardDescription1"),
  },
  {
    id: document.getElementById("cardHeading2").src,
    title: "SAMSUNG",
    image: document.getElementById("cardImage2").src,
    price: document.getElementById("price2"),
    description: document.getElementById("cardDescription2"),
  },
  {
    id: document.getElementById("cardHeading3").src,
    title: "NOKIA",
    image: document.getElementById("cardImage3").src,
    price: document.getElementById("price3"),
    description: document.getElementById("cardDescription3"),
  },
];

let form = document.getElementById("form");
let search = document.getElementById("search");
let para1 = document.getElementById("para1");
let found = false;
let cardContainer = document.getElementById("cardContainer");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  para1.innerHTML = " ";
  cardContainer.remove();

  for (i of arr) {
    if (
      i.title.toLowerCase() === search.value.toLowerCase() || i.title.toLowerCase().includes(search.value.toLowerCase())) {
      found = true;
      // let heading =  document.getElementById("cardHeading1").textContent
      // let displayImg =  document.getElementById("cardImage1").src

      let card = document.createElement("div");
      let headingText = document.createElement("h3");
      headingText.textContent = i.title;

      let displayImg = document.createElement("img");
      displayImg.src = i.image;
      displayImg.width = 200;

      let price = document.createElement("h3");
      price.innerText = i.price.textContent;

      let descriptionText = document.createElement("p");
      descriptionText.textContent = i.description.textContent;

      card.appendChild(headingText);
      card.appendChild(displayImg);
      card.appendChild(price);
      card.appendChild(descriptionText);
      para1.appendChild(card);

      break;

      //         para1.innerHTML = `Hello! Here is ${i.title}`
      //         let card = document.createElement("div")
      //         let image = document.createElement("img")
      //         image.style.height = "200px"
      //         image.setAttribute("src",`${i.image}`)
      //         card.appendChild(image)
      // card.style.height = "200px"
      // card.style.width = "300px"
      // card.style.backgroundColor = "green"
      // document.body.appendChild(card)
    }
  }
  if (!found) {
    let notFound = document.createElement("h3");
    notFound.textContent = "NO RESULTS FOUND";
    para1.appendChild(notFound);
  }
});
