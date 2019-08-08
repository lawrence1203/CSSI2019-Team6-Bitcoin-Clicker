const currency = document.querySelector(".Currency")

let total = 0

const redDwarf_upgrade = document.querySelector(".Upgrade_Sect1")
const redDwarf = document.querySelector(".ItemPicture_Sect1")
const redDwarf_Stats = document.querySelector(".Stats_Sect1")

let redDwarf_cost = 10;
let redDwarf_amount = 1;
let redDwarf_add = 1;
let redDwarf_plus = 1;

const yellowDwarf_upgrade = document.querySelector(".Upgrade_Sect2")
const yellowDwarf = document.querySelector(".ItemPicture_Sect2")
const yellowDwarf_Stats = document.querySelector(".Stats_Sect2")

let yellowDwarf_cost = 10;
let yellowDwarf_amount = 1;
let yellowDwarf_add = 1;
let yellowDwarf_plus = 1;

const blueGiant_upgrade = document.querySelector(".Upgrade_Sect3")
const blueGiant = document.querySelector(".ItemPicture_Sect3")
const blueGiant_Stats = document.querySelector(".Stats_Sect3")

let blueGiant_cost = 10;
let blueGiant_amount = 1;
let blueGiant_add = 1;
let blueGiant_plus = 1;

const blueSuperGiant_upgrade = document.querySelector(".Upgrade_Sect4")
const blueSuperGiant = document.querySelector(".ItemPicture_Sect4")
const blueSuperGiant_Stats = document.querySelector(".Stats_Sect4")

let blueSuperGiant_cost = 10;
let blueSuperGiant_amount = 1;
let blueSuperGiant_add = 1;
let blueSuperGiant_plus = 1;

const redSuperGiant_upgrade = document.querySelector(".Upgrade_Sect5")
const redSuperGiant = document.querySelector(".ItemPicture_Sect5")
const redSuperGiant_Stats = document.querySelector(".Stats_Sect5")

let redSuperGiant_cost = 10;
let redSuperGiant_amount = 1;
let redSuperGiant_add = 1;
let redSuperGiant_plus = 1;

const neutronStar_upgrade = document.querySelector(".Upgrade_Sect6")
const neutronStar = document.querySelector(".ItemPicture_Sect6")
const neutronStar_Stats = document.querySelector(".Stats_Sect6")

let neutronStar_cost = 10;
let neutronStar_amount = 1;
let neutronStar_add = 1;
let neutronStar_plus = 1;

const blackDwarf_upgrade = document.querySelector(".Upgrade_Sect7")
const blackDwarf = document.querySelector(".ItemPicture_Sect7")
const blackDwarf_Stats = document.querySelector(".Stats_Sect7")

let blackDwarf_cost = 10;
let blackDwarf_amount = 1;
let blackDwarf_add = 1;
let blackDwarf_plus = 1;

const blackHole_upgrade = document.querySelector(".Upgrade_Sect8")
const blackHole = document.querySelector(".ItemPicture_Sect8")
const blackHole_Stats = document.querySelector(".Stats_Sect8")

let blackHole_cost = 10;
let blackHole_amount = 1;
let blackHole_add = 1;
let blackHole_plus = 1;

const superNova_upgrade = document.querySelector(".Upgrade_Sect9")
const superNova = document.querySelector(".ItemPicture_Sect9")
const superNova_Stats = document.querySelector(".Stats_Sect9")

let superNova_cost = 10;
let superNova_amount = 1;
let superNova_add = 1;
let superNova_plus = 1;

const redDwarf_manager = document.querySelector(".manager1")
const yellowDwarf_manager = document.querySelector(".manager2")
const blueGiant_manager = document.querySelector(".manager3")
const blueSuperGiant_manager = document.querySelector(".manager4")
const redSuperGiant_manager = document.querySelector(".manager5")
const neutronStar_manager = document.querySelector(".manager6")
const blackDwarf_manager = document.querySelector(".manager7")
const blackHole_manager = document.querySelector(".manager8")
const superNova_manager = document.querySelector(".manager9")

function redDwarf_managerBuy() {
  setInterval(harvest(redDwarf_manager), 1000);
}

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
      redDwarf_Stats.innerHTML = "Red Dwarf Count: " + redDwarf_amount;
    } else {
      redDwarf_upgrade.innerHTML = "Not Enough StarDust! You need: " + redDwarf_cost;
    }
};

function yellowDwarf_upgrader() {  // this should be yellow dwarf our own sun is one of these
    if (total >= yellowDwarf_cost) {
      total = total - yellowDwarf_cost;
      yellowDwarf_amount = yellowDwarf_amount + 1;
      yellowDwarf_cost = yellowDwarf_cost + yellowDwarf_add;
      yellowDwarf_add = yellowDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      yellowDwarf_upgrade.innerHTML = "Upgrade: " + yellowDwarf_cost + " StarDust";
      yellowDwarf_Stats.innerHTML = "Yellow Dwarf Count: " + yellowDwarf_amount;
    } else {
      yellowDwarf_upgrade.innerHTML = "Not Enough StarDust! You need: " + yellowDwarf_cost;
    }
};

function blueGiant_upgrader() { // this should ba a blue giant above ten thousand degrees kelvin
    if (total >= redDwarf_cost) {
      total = total - blueGiant_cost;
      blueGiant_amount = blueGiant_amount + 1;
      blueGiant_cost = blueGiant_cost + redDwarf_add;
      blueGiant_add = blueGiant_add + 1;
      currency.innerHTML = total + " StarDust";
      blueGiant_upgrade.innerHTML = "Upgrade: " + blueGiant_cost + " StarDust";
      blueGiant_Stats.innerHTML = "Blue Giant Count: " + blueGiant_amount;
    } else {
      blueGiant_upgrade.innerHTML = "Not Enough StarDust! You need: " + blueGiant_cost;
    }
};

function blueSuperGiant_upgrader() {   //blue supergiant so large they fade very quickly
    if (total >= blueSuperGiant_cost) {
      total = total - redDwarf_cost;
      blueSuperGiant_amount = blueSuperGiant_amount + 1;
      blueSuperGiant_cost = blueSuperGiant_cost + blueSuperGiant_add;
      blueSuperGiant_add = blueSuperGiant_add + 1;
      currency.innerHTML = total + " StarDust";
      blueSuperGiant_upgrade.innerHTML = "Upgrade: " + blueSuperGiant_cost + " StarDust";
      blueSuperGiant_Stats.innerHTML = "Blue Super Giant Count: " + blueSuperGiant_amount;
    } else {
      blueSuperGiant_upgrade.innerHTML = "Not Enough StarDust! You need: " + blueSuperGiant_cost;
    }
};

function redSuperGiant_upgrader() { // red super giant have spent all the hydrogen in their cores
    if (total >= redDwarf_cost) {
      total = total - redSuperGiant_cost;
      redSuperGiant_amount = redSuperGiant_amount + 1;
      redSuperGiant_cost = redSuperGiant_cost + redSuperGiant_add;
      redSuperGiant_add = redSuperGiant_add + 1;
      currency.innerHTML = total + " StarDust";
      redSuperGiant_upgrade.innerHTML = "Upgrade: " + redSuperGiant_cost + " StarDust";
      redSuperGiant_Stats.innerHTML = "Red Super Giant Count: " + redSuperGiant_amount;
    } else {
      redSuperGiant_upgrade.innerHTML = "Not Enough StarDust! You need: " + redSuperGiant_cost;
    }
};

function neutronStar_upgrader() { // neutron stars the collapsed cores of stars a sinle tea spoon of iron wwieghs a billion tons
    if (total >= neutronStar_cost) {
      total = total - neutronStar_cost;
      neutronStar_amount = neutronStar_amount + 1;
      neutronStar_cost = neutronStar_cost + neutronStar_add;
      neutronStar_add = neutronStar_add + 1;
      currency.innerHTML = total + " StarDust";
      neutronStar_upgrade.innerHTML = "Upgrade: " + neutronStar_cost + " StarDust";
      neutronStar_Stats.innerHTML = "Neutron Star Count: " + neutronStar_amount;
    } else {
      neutronStar_upgrade.innerHTML = "Not Enough StarDust! You need: " + neutronStar_cost;
    }
};

function blackDwarf_upgrader() {
    if (total >= blackDwarf_cost) { // black dwarfs theoroetical white stars with no more engery left
      total = total - blackDwarf_cost;
      blackDwarf_amount = blackDwarf_amount + 1;
      blackDwarf_cost = blackDwarf_cost + blackDwarf_add;
      blackDwarf_add = blackDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      blackDwarf_upgrade.innerHTML = "Upgrade: " + blackDwarf_cost + " StarDust";
      blackDwarf_Stats.innerHTML = "Black Dwarf Count: " + blackDwarf_amount;
    } else {
      blackDwarf_upgrade.innerHTML = "Not Enough StarDust! You need: " + blackDwarf_cost;
    }
};

function blackHole_upgrader() {  // black holes so massive that light cant escape
    if (total >= blackHole_cost) {
      total = total - blackHole_cost;
      blackHole_amount = blackHole_amount + 1;
      blackHole_cost = blackHole_cost + blackHole_add;
      blackHole_add = blackHole_add + 1;
      currency.innerHTML = total + " StarDust";
      blackHole_upgrade.innerHTML = "Upgrade: " + blackHole_cost + " StarDust";
      blackHole_Stats.innerHTML = "Black Hole Count: " + blackHole_amount;
    } else {
      blackHole_upgrade.innerHTML = "Not Enough StarDust! You need: " + blackHole_cost;
}
};

function superNova_upgrader() {   //  super nova  the bueatiful death of a star:
    if (total >= superNova_cost) {
      total = total - superNova_cost;
      superNova_amount = superNova_amount + 1;
      rsuperNova_cost = superNova_cost + superNova_add;
      superNova_add = superNova_add + 1;
      currency.innerHTML = total + " StarDust";
      superNova_upgrade.innerHTML = "Upgrade: " + superNova_cost + " StarDust";
      superNova_Stats.innerHTML = "Super Nova Count: " + superNova_amount;
    } else {
      superNova_upgrade.innerHTML = "Not Enough StarDust! You need: " + superNova_cost;
}
};



redDwarf.addEventListener("click", (event) => {
  harvest(redDwarf_amount);
});

redDwarf_upgrade.addEventListener("click", (event) => {
  redDwarf_upgrader();
});

yellowDwarf.addEventListener("click", (event) => {
  harvest(yellowDwarf_amount);
});

yellowDwarf_upgrade.addEventListener("click", (event) => {
  yellowDwarf_upgrader();
});

blueGiant.addEventListener("click", (event) => {
  harvest(blueGiant_amount);
});

blueGiant_upgrade.addEventListener("click", (event) => {
  blueGiant_upgrader();
});

blueSuperGiant.addEventListener("click", (event) => {
  harvest(blueSuperGiant_amount);
});

blueSuperGiant_upgrade.addEventListener("click", (event) => {
  blueSuperGiant_upgrader();
});

redSuperGiant.addEventListener("click", (event) => {
  harvest(redSuperGiant_amount);
});

redSuperGiant_upgrade.addEventListener("click", (event) => {
  redSuperGiant_upgrader();
});

neutronStar.addEventListener("click", (event) => {
  harvest(neutronStar_amount);
});

neutronStar_upgrade.addEventListener("click", (event) => {
  neutronStar_upgrader();
});

blackDwarf.addEventListener("click", (event) => {
  harvest(blackDwarf_amount);
});

blackDwarf_upgrade.addEventListener("click", (event) => {
  blackDwarf_upgrader();
});

blackHole.addEventListener("click", (event) => {
  harvest(blackHole_amount);
});

blackHole_upgrade.addEventListener("click", (event) => {
  blackHole_upgrader();
});

superNova.addEventListener("click", (event) => {
  harvest(superNova_amount);
});

superNova_upgrade.addEventListener("click", (event) => {
  superNova_upgrader();
});

redDwarf_manager.addEventListener("click", (event) => {
  redDwarf_managerBuy()
})
