// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const header = document.querySelector(".header-container");
// console.log(header);
header.appendChild(createHeader());

function createHeader() {
  //setting elements
  const header = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temperature = document.createElement("span");

  //setting classlist
  header.classList.add("header");
  date.classList.add("date");
  title.classList.add("h1");
  temperature.classList.add("temp");

  //setting structure or append to parent
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temperature);

  //add text
  date.textContent = "MARCH 28, 2019";
  title.textContent = "Lambda Times";
  temperature.textContent = "98°";

  return header;
}
