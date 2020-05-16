/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
/* */
/* */

/*  1) CREATE FUNCTION TO DISPLAY THE CAROUSEL ON THE BROWSER:
        a. document.createElement()
        b. appendchild
        c. .classList.add()
        d. .textContent and/or .src
        e. .addEventListener()
  */
function carouselMaker() {
  // create elements:  assign variables to the html tags.
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const rightButton = document.createElement("div");
  const img = document.createElement("img");
  // or
  /* 
  const mountains = document.createElement("img");
  const computer = document.createElement("img");
  const trees = document.createElement("img");
  const turntable = document.createElement("img");
*/

  // append elements to the parent:  the buttons and the images will all be inside the carousel div.
  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);
  carousel.appendChild(img);

  //  create classlist:  they should match with the css.
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");
  img.classList.add("img");

  // add text content or image source:
  /*  this way is repetitive and is time consuming when we need to change images
  mountains.src = "./assets/carousel/mountains.jpeg";
  computer.src = "./assets/carousel/computer.jpeg";
  trees.src = "./assets/carousel/trees.jpeg";
  turntable.src = "./assets/carousel/turntable.jpeg";
  */

  // create an array for the image names then use the template literal to insert the name into the url:
  const imgNames = ["mountains", "computer", "trees", "turntable"];
  let i = 0;
  img.src = `../assets/carousel/${imgNames[i]}.jpeg`;
  // img.src = "../assets/carousel/mountains.jpeg";
  console.log(img);
  // add event listeners:  the i is for the index of the array of imgNames.  Set the i to 0 which would be the 1st image.

  leftButton.addEventListener("click", () => {
    img.src = `../assets/carousel/${imgNames[i]}.jpeg`; /* when they left button is clicked, it is going to show images*/
    i =
      i -
      1; /* this is saing which direction to move on the array of images, to move left we subract or decrement */
    if (i < 0) {
      i =
        imgNames.length -
        1; /* so i is initiated to 0, so no matter what i is always going to be negative therefore <0, so as long as i<0, then do this:  lenghth is 4 so index=4-1 so display turntable, 3-1=2 so display trees, 2-1=1 so display computer, 1-1=0 so display mountains.  */
    }
  });

  rightButton.addEventListener("click", () => {
    img.src = `./assets/carousel/${imgNames[i]}.jpeg`; /* when the right button is clicked, it is going to show images*/
    i =
      i +
      1; /* this is saing which direction to move on the array of images, to move right we increment */
    if (i >= imgNames.length) {
      i = 0; /* so you start with 0+1 display computer, next 1+1 display trees, next 2+1 display turntable, next 3+1 oops there is no index 4 so i=0, this is saying go back to 0 and display mountains  */
    }
  });

  // return the carousel because it is the parent div that houses all the buttons and images.
  return carousel;
}

// put everything from the carousel div into the carousel container div
/* <div class="carousel-container">
</div> */
const myCarousel = document.querySelector(".carousel-container");
console.log(myCarousel);
myCarousel.appendChild(carouselMaker());
