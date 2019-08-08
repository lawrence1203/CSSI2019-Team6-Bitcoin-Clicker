const redDwarf_upgrade = document.querySelector(".Upgrade_Sect1")
const redDwarf = document.querySelector(".ItemPicture_Sect1")
const currency = document.querySelector(".Currency")

let total = 0

let redDwarf_cost = 10;
let redDwarf_amount = 1;
let redDwarf_add = 1;
let redDwarf_plus = 1;

function harvest(plus) {
    total += plus;
    currency.innerHTML = total + " StarDust";
};

function redDwarf_upgrader() {   //red dwarf are the most common type of star
    if (total >= redDwarf_cost) {
      total = total - redDwarf_cost;
      redDwarf_amount = redDwarf_amount + 1;
      redDwarf_cost = redDwarf_cost + redDwarf_add;
      redDwarf_add = redDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust";
    } else {
      redDwarf_upgrade.innerHTML = "Not Enough StarDust!";
      setTimeout(name.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust", 1000);
    }
};

function redDwarf_upgrader() {  // this should be yellow dwarf our own sun is one of these
    if (total >= redDwarf_cost) {
      total = total - redDwarf_cost;
      redDwarf_amount = redDwarf_amount + 1;
      redDwarf_cost = redDwarf_cost + redDwarf_add;
      redDwarf_add = redDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust";
    } else {
      name.innerHTML = "Not Enough StarDust, you're too poor!";
      setTimeout(name.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust", 1000);
    }
};

function redDwarf_upgrader() { // this should ba a blue giant above ten thousand degrees kelvin
    if (total >= redDwarf_cost) {
      total = total - redDwarf_cost;
      redDwarf_amount = redDwarf_amount + 1;
      redDwarf_cost = redDwarf_cost + redDwarf_add;
      redDwarf_add = redDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust";
    } else {
      name.innerHTML = "Not Enough StarDust, you're too poor!";
      setTimeout(name.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust", 1000);
    }
};

function redDwarf_upgrader() {   //blue supergiant so large they fade very quickly
    if (total >= redDwarf_cost) {
      total = total - redDwarf_cost;
      redDwarf_amount = redDwarf_amount + 1;
      redD warf_cost = redDwarf_cost + redDwarf_add;
      redDwarf_add = redDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust";
    } else {
      name.innerHTML = "Not Enough StarDust, you're too poor!";
      setTimeout(name.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust", 1000);
    }
};

function redDwarf_upgrader() { // red super giant have spent all the hydrogen in their cores
    if (total >= redDwarf_cost) {
      total = total - redDwarf_cost;
      redDwarf_amount = redDwarf_amount + 1;
      redDwarf_cost = redDwarf_cost + redDwarf_add;
      redDwarf_add = redDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust";
    } else {
      name.innerHTML = "Not Enough StarDust, you're too poor!";
      setTimeout(name.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust", 1000);
    }
};

function redDwarf_upgrader() { // nuetron stars the collapsed cores of stars a sinle tea spoon of iron wwieghs a billion tons
    if (total >= redDwarf_cost) {
      total = total - redDwarf_cost;
      redDwarf_amount = redDwarf_amount + 1;
      redDwarf_cost = redDwarf_cost + redDwarf_add;
      redDwarf_add = redDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust";
    } else {
      name.innerHTML = "Not Enough StarDust, you're too poor!";
      setTimeout(name.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust", 1000);
    }
};

function redDwarf_upgrader() {
    if (total >= redDwarf_cost) { // black dwarfs theoroetical white stars with no more engery left
      total = total - redDwarf_cost;
      redDwarf_amount = redDwarf_amount + 1;
      redDwarf_cost = redDwarf_cost + redDwarf_add;
      redDwarf_add = redDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust";
    } else {
      name.innerHTML = "Not Enough StarDust, you're too poor!";
      setTimeout(name.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust", 1000);
    }
};

function redDwarf_upgrader() {  // black holes so massive that light cant escape
    if (total >= redDwarf_cost) {
      total = total - redDwarf_cost;
      redDwarf_amount = redDwarf_amount + 1;
      redDwarf_cost = redDwarf_cost + redDwarf_add;
      redDwarf_add = redDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust";
    } else {
      name.innerHTML = "Not Enough StarDust, you're too poor!";
      setTimeout(name.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust", 1000);
    }
};

function redDwarf_upgrader() {   //  super nova  the bueatiful death of a star:
    if (total >= redDwarf_cost) {
      total = total - redDwarf_cost;
      redDwarf_amount = redDwarf_amount + 1;
      redDwarf_cost = redDwarf_cost + redDwarf_add;
      redDwarf_add = redDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust";
    } else {
      name.innerHTML = "Not Enough StarDust, you're too poor!";
      setTimeout(name.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust", 1000);
    }
};


redDwarf.addEventListener("click", (event) => {
  harvest(redDwarf_amount);
});

redDwarf_upgrade.addEventListener("click", (event) => {
  redDwarf_upgrader()
});
