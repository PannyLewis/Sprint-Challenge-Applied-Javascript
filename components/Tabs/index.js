// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector(".tabs");
console.log(tabs);
tabs.appendChild(createTab());

// function getMyData(i) {
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((res) => {
    // deal with the response data in here
    console.log(res.data);

    const tabList = res.data.topics;
    tabList.forEach((i) => {
      const newTab = createTab(i);
      tabs.appendChild(newTab);
    });
  })

  //   })

  .catch((err) => {
    // deal with the error in here
    // console.log('You hit an error: ', err);
  });

// }

function createTab(i) {
  const tab = document.createElement("div");
  tab.classList.add("tabs");
  tab.textContent = i;

  return tab;
}
