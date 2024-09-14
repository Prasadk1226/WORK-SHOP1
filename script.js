let arr = [
  {
    id: 1,
    title: "IPHONE",
    image:
      "https://i.pinimg.com/564x/a4/cf/db/a4cfdb1d7745e89403bcaa19f14f0b94.jpg",
    price: "$1099/-",
    description:
      "DESCRIPTION:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae natus adipisci ratione, corporis voluptates eum pariatur optio repellendus dolorem vero explicabo praesentium ipsum itaque magnam asperiores quisquam consectetur fugiat cum!",
  },
  {
    id: 1,
    title: "SAMSUNG",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSYQkAKnz0bv6V9HToBcvW-28Hg2S0ouXrGXSLmZr1h8VCVFuaNxVAL6S9JEQYbJk9HEMXt5O7OHEcm4Dq8nF7XRDMPbrInButxHQRMktjPKjabhRWKCG4W7MX8CFLbMvgQtrBLkzU&usqp=CAc",
    price: "$1399/-",
    description:
      "DESCRIPTION:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae natus adipisci ratione, corporis voluptates eum pariatur optio repellendus dolorem vero explicabo praesentium ipsum itaque magnam asperiores quisquam consectetur fugiat cum!",
  },
  {
    id: 1,
    title: "NOKIA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqnO1YsydpUfcVXq-YcGcxrFf07hLUK2MGCw&s",
    price: "$199/-",
    description:
      "DESCRIPTION:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae natus adipisci ratione, corporis voluptates eum pariatur optio repellendus dolorem vero explicabo praesentium ipsum itaque magnam asperiores quisquam consectetur fugiat cum!",
  },
  {
    id: 1,
    title: "IQOO",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2cGFPvKL-j9zWxp0er-dZdLydtiXsJ54lBmLN0cn1a9-vTUXeTVAAVk08MvuAbv8vIBzO_OkyiI_7rbUBLp6d3tJ1KoJ_eaMUfr6W8tQTWdAYoZkZxMkDUOj-OGN-ukc-3OBI1Q&usqp=CAc",
    price: "$499/-",
    description:
      "DESCRIPTION:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae natus adipisci ratione, corporis voluptates eum pariatur optio repellendus dolorem vero explicabo praesentium ipsum itaque magnam asperiores quisquam consectetur fugiat cum!",
  },
  {
    id: 1,
    title: "RED MI",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQyy3yiKE7U3WRc-GyYe2xZ77dKC4en9gHLzc6oMuqV-yB2SXjVgAZkvWJpHTjZ1Upstuyrc4ULMb1rlz54KPRT_HlA33v17KtwzfOqm6huocfZWxZJkrXH4OQbj2LTAcPeDc43UQ&usqp=CAc",
    price: "$399/-",
    description:
      "DESCRIPTION:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae natus adipisci ratione, corporis voluptates eum pariatur optio repellendus dolorem vero explicabo praesentium ipsum itaque magnam asperiores quisquam consectetur fugiat cum!",
  },
  {
    id: 1,
    title: "MOTOROLA",
    image:
      "https://motorolauk.vtexassets.com/arquivos/ids/159388/motorola-edge-40-ecom-render-16-viva-magenta-94frjr94.png?v=638182889675600000",
    price: "$399/-",
    description:
      "DESCRIPTION:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae natus adipisci ratione, corporis voluptates eum pariatur optio repellendus dolorem vero explicabo praesentium ipsum itaque magnam asperiores quisquam consectetur fugiat cum!",
  },
  {
    id: 1,
    title: "MOTOROLA",
    image:
      "https://motorolauk.vtexassets.com/arquivos/ids/159388/motorola-edge-40-ecom-render-16-viva-magenta-94frjr94.png?v=638182889675600000",
    price: "$399/-",
    description:
      "DESCRIPTION:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae natus adipisci ratione, corporis voluptates eum pariatur optio repellendus dolorem vero explicabo praesentium ipsum itaque magnam asperiores quisquam consectetur fugiat cum!",
  },
  {
    id: 1,
    title: "MOTOROLA",
    image:
      "https://motorolauk.vtexassets.com/arquivos/ids/159388/motorola-edge-40-ecom-render-16-viva-magenta-94frjr94.png?v=638182889675600000",
    price: "$399/-",
    description:
      "DESCRIPTION:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae natus adipisci ratione, corporis voluptates eum pariatur optio repellendus dolorem vero explicabo praesentium ipsum itaque magnam asperiores quisquam consectetur fugiat cum!",
  },
];

let form = document.getElementById("form");
let search = document.getElementById("search");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let cardContainer = document.getElementById("cardContainer");

for (i of arr) {
  let card = document.createElement("div");
  card.style.border = "1px solid";
  card.style.padding = "2px";
  card.style.width = "400px";
  let heading = document.createElement("h3");
  heading.textContent = i.title;
  let image = document.createElement("img");
  image.src = i.image;
  image.style.height = "200px";
  image.style.width = "200px";

  let price = document.createElement("h4");
  price.innerHTML = "Price: " + i.price;

  let description = document.createElement("p");
  description.textContent = i.description;

  card.appendChild(heading);
  card.appendChild(image);
  card.appendChild(price);
  card.appendChild(description);
  para1.appendChild(card);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  para1.innerHTML=" ";
  para2.innerHTML=" ";
  let found = false;

  for (i of arr) {
    if (
      i.title.toUpperCase() === search.value.toUpperCase() ||
      i.title.toUpperCase().includes(search.value.toUpperCase())
    ) {
      let card = document.createElement("div");
      card.style.border = "1px solid";
      card.style.width = "400px";
      let title = document.createElement("h2");
      title.textContent = i.title;
      let images = document.createElement("img");
      images.style.width = "200px";
      images.src = i.image;
      let description = document.createElement("p");
      description.textContent = i.description;
      card.appendChild(title);
      card.appendChild(images);
      card.appendChild(description);
      para2.appendChild(card);
      found = true
    }
     
  }
  if(!found){
    let notFound = document.createElement("h2")
    notFound.textContent = "NO DATA FOUND"
    para2.appendChild(notFound)
   }
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   para1.innerHTML = " ";
//   cardContainer.remove();

// if (
//         i.title.toLowerCase() === search.value.toLowerCase() ||
//         i.title.toLowerCase().includes(search.value.toLowerCase())
//       ) {
//      found = true;

//   for (i of arr) {
//     if (
//       i.title.toLowerCase() === search.value.toLowerCase() ||
//       i.title.toLowerCase().includes(search.value.toLowerCase())
//     ) {
//       // found = true;
//       // let heading =  document.getElementById("cardHeading1").textContent
//       // let displayImg =  document.getElementById("cardImage1").src

//       // let card = document.createElement("div");
//       // let headingText = document.createElement("h3");
//       // headingText.textContent = i.title;

//       // let displayImg = document.createElement("img");
//       // displayImg.src = i.image;
//       // displayImg.width = 200;

//       // let price = document.createElement("h3");
//       // price.innerText = i.price.textContent;

//       // let descriptionText = document.createElement("p");
//       // descriptionText.textContent = i.description.textContent;

//       // card.appendChild(headingText);
//       // card.appendChild(displayImg);
//       // card.appendChild(price);
//       // card.appendChild(descriptionText);
//       // para1.appendChild(card);

// break;
// }
// }
//   if (!found) {
//     let notFound = document.createElement("h3");
//     notFound.textContent = "NO RESULTS FOUND";
//     para1.appendChild(notFound);
//   }
// });
