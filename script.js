const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBTn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//fetch random and user add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name} ${user.name.last}`,
    money: Math.floor(Math.random() * 100000),
  };

  addData(newUser);
}

//add new obj to data arr
function addData(obj) {
  data.push(obj);
  updateDOM();
}

//update DOM
function updateDOM(providedData = data) {
  //clear main div
  main.innerHTML = "  <h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong> ${item.name}</strong> ${item.money}`;
    main.appendChild(element);
  });
}

//format number as money
function formatMoney() {}
