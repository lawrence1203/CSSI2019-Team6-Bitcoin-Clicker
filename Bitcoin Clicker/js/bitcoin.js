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

let yellowDwarf_cost = 100;
let yellowDwarf_amount = 0;
let yellowDwarf_add = 5;
let yellowDwarf_plus = 1;

const blueGiant_upgrade = document.querySelector(".Upgrade_Sect3")
const blueGiant = document.querySelector(".ItemPicture_Sect3")
const blueGiant_Stats = document.querySelector(".Stats_Sect3")

let blueGiant_cost = 1000;
let blueGiant_amount = 0;
let blueGiant_add = 10;
let blueGiant_plus = 1;

const blueSuperGiant_upgrade = document.querySelector(".Upgrade_Sect4")
const blueSuperGiant = document.querySelector(".ItemPicture_Sect4")
const blueSuperGiant_Stats = document.querySelector(".Stats_Sect4")

let blueSuperGiant_cost = 10000;
let blueSuperGiant_amount = 0;
let blueSuperGiant_add = 25;
let blueSuperGiant_plus = 1;

const redSuperGiant_upgrade = document.querySelector(".Upgrade_Sect5")
const redSuperGiant = document.querySelector(".ItemPicture_Sect5")
const redSuperGiant_Stats = document.querySelector(".Stats_Sect5")

let redSuperGiant_cost = 100000;
let redSuperGiant_amount = 0;
let redSuperGiant_add = 50;
let redSuperGiant_plus = 1;

const neutronStar_upgrade = document.querySelector(".Upgrade_Sect6")
const neutronStar = document.querySelector(".ItemPicture_Sect6")
const neutronStar_Stats = document.querySelector(".Stats_Sect6")

let neutronStar_cost = 1000000;
let neutronStar_amount = 0;
let neutronStar_add = 75;
let neutronStar_plus = 1;

const blackDwarf_upgrade = document.querySelector(".Upgrade_Sect7")
const blackDwarf = document.querySelector(".ItemPicture_Sect7")
const blackDwarf_Stats = document.querySelector(".Stats_Sect7")

let blackDwarf_cost = 10000000;
let blackDwarf_amount = 0;
let blackDwarf_add = 100;
let blackDwarf_plus = 1;

const blackHole_upgrade = document.querySelector(".Upgrade_Sect8")
const blackHole = document.querySelector(".ItemPicture_Sect8")
const blackHole_Stats = document.querySelector(".Stats_Sect8")

let blackHole_cost = 100000000;
let blackHole_amount = 1;
let blackHole_add = 500;
let blackHole_plus = 1;

const superNova_upgrade = document.querySelector(".Upgrade_Sect9")
const superNova = document.querySelector(".ItemPicture_Sect9")
const superNova_Stats = document.querySelector(".Stats_Sect9")

let superNova_cost = 1000000000;
let superNova_amount = 1;
let superNova_add = 1000;
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
  if (total > 100) {
    total -= 100;
    redDwarf_manager.value = "Bought!";
    setInterval(function() {
      total += redDwarf_amount
      currency.innerHTML = total + " StarDust";
    }, 1000);
  } else {
    redDwarf_manager.value = "Need More Stardust! (100)"
  }
};

function yellowDwarf_managerBuy() {
  if (total > 1000) {
    total -= 1000;
    yellowDwarf_manager.value = "Bought!";
    setInterval(function() {
      total += yellowDwarf_amount
      currency.innerHTML = total + " StarDust";
    }, 1000);
  } else {
    yellowDwarf_manager.value = "Need More Stardust! (1000)";
  }
};

function blueGiant_managerBuy() {
  if (total > 10000) {
    total -= 10000;
    blueGiant_manager.value = "Bought!";
    setInterval(function() {
      total += blueGiant_amount
      currency.innerHTML = total + " StarDust";
    }, 1000);
  } else {
    blueGiant_manager.value = "Need More Stardust! (10000)";
  }
};

function blueSuperGiant_managerBuy() {
  if (total > 100000) {
    total -= 100000;
    blueSuperGiant_manager.value = "Bought!";
    setInterval(function() {
      total += blueSuperGiant_amount
      currency.innerHTML = total + " StarDust";
    }, 1000);
  } else {
    blueSuperGiant_manager.value = "Need More Stardust! (100000)";
  }
};

function redSuperGiant_managerBuy() {
  if (total > 1000000) {
    total -= 1000000;
    redSuperGiant_manager.value = "Bought!";
    setInterval(function() {
      total += redSuperGiant_amount
      currency.innerHTML = total + " StarDust";
    }, 1000);
  } else {
    redSuperGiant_manager.value = "Need More Stardust! (1000000)";
  }
};

function neutronStar_managerBuy() {
  if (total > 10000000) {
    total -= 10000000;
    neutronStar_manager.value = "Bought!";
    setInterval(function() {
      total += neutronStar_amount
      currency.innerHTML = total + " StarDust";
    }, 1000);
  } else {
    neutronStar_manager.value = "Need More Stardust! (10000000)";
  }
};

function blackDwarf_managerBuy() {
  if (total > 100000000) {
    total -= 100000000;
    blackDwarf_manager.value = "Bought!";
    setInterval(function() {
      total += blackDwarf_amount
      currency.innerHTML = total + " StarDust";
    }, 1000);
  } else {
    blackDwarf_manager.value = "Need More Stardust! (100000000)";
  }
};

function blackHole_managerBuy() {
  if (total > 1000000000) {
    total -= 1000000000;
    blackHole_manager.value = "Bought!";
    setInterval(function() {
      total += blackHole_amount
      currency.innerHTML = total + " StarDust";
    }, 1000);
  } else {
    blackHole_manager.value = "Need More Stardust! (1000000000)";
  }
};

function superNova_managerBuy() {
  if (total > 10000000000) {
    total -= 10000000000;
    superNova_manager.value = "Bought!";
    setInterval(function() {
      total += superNova_amount
      currency.innerHTML = total + " StarDust";
    }, 1000);
  } else {
    superNova_manager.value = "Need More Stardust! (10000000000)";
  }
};


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
      redDwarf_Stats.innerHTML = "Red Dwarf Power: " + redDwarf_amount;
    } else {
      redDwarf_upgrade.innerHTML = "Not Enough StarDust! You need: " + redDwarf_cost;
    }
};

function yellowDwarf_upgrader() {  // this should be yellow dwarf our own sun is one of these
    if (total >= yellowDwarf_cost) {
      total = total - yellowDwarf_cost;
      yellowDwarf_amount = yellowDwarf_amount + 5;
      yellowDwarf_cost = yellowDwarf_cost + yellowDwarf_add;
      yellowDwarf_add = yellowDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      yellowDwarf_upgrade.innerHTML = "Upgrade: " + yellowDwarf_cost + " StarDust";
      yellowDwarf_Stats.innerHTML = "Yellow Dwarf Power: " + yellowDwarf_amount;
    } else {
      yellowDwarf_upgrade.innerHTML = "Not Enough StarDust! You need: " + yellowDwarf_cost;
    }
};

function blueGiant_upgrader() { // this should ba a blue giant above ten thousand degrees kelvin
    if (total >= redDwarf_cost) {
      total = total - blueGiant_cost;
      blueGiant_amount = blueGiant_amount + 10;
      blueGiant_cost = blueGiant_cost + redDwarf_add;
      blueGiant_add = blueGiant_add + 1;
      currency.innerHTML = total + " StarDust";
      blueGiant_upgrade.innerHTML = "Upgrade: " + blueGiant_cost + " StarDust";
      blueGiant_Stats.innerHTML = "Blue Giant Power: " + blueGiant_amount;
    } else {
      blueGiant_upgrade.innerHTML = "Not Enough StarDust! You need: " + blueGiant_cost;
    }
};

function blueSuperGiant_upgrader() {   //blue supergiant so large they fade very quickly
    if (total >= blueSuperGiant_cost) {
      total = total - redDwarf_cost;
      blueSuperGiant_amount = blueSuperGiant_amount + 25;
      blueSuperGiant_cost = blueSuperGiant_cost + blueSuperGiant_add;
      blueSuperGiant_add = blueSuperGiant_add + 1;
      currency.innerHTML = total + " StarDust";
      blueSuperGiant_upgrade.innerHTML = "Upgrade: " + blueSuperGiant_cost + " StarDust";
      blueSuperGiant_Stats.innerHTML = "Blue Super Giant Power: " + blueSuperGiant_amount;
    } else {
      blueSuperGiant_upgrade.innerHTML = "Not Enough StarDust! You need: " + blueSuperGiant_cost;
    }
};

function redSuperGiant_upgrader() { // red super giant have spent all the hydrogen in their cores
    if (total >= redDwarf_cost) {
      total = total - redSuperGiant_cost;
      redSuperGiant_amount = redSuperGiant_amount + 50;
      redSuperGiant_cost = redSuperGiant_cost + redSuperGiant_add;
      redSuperGiant_add = redSuperGiant_add + 1;
      currency.innerHTML = total + " StarDust";
      redSuperGiant_upgrade.innerHTML = "Upgrade: " + redSuperGiant_cost + " StarDust";
      redSuperGiant_Stats.innerHTML = "Red Super Giant Power: " + redSuperGiant_amount;
    } else {
      redSuperGiant_upgrade.innerHTML = "Not Enough StarDust! You need: " + redSuperGiant_cost;
    }
};

function neutronStar_upgrader() { // neutron stars the collapsed cores of stars a sinle tea spoon of iron wwieghs a billion tons
    if (total >= neutronStar_cost) {
      total = total - neutronStar_cost;
      neutronStar_amount = neutronStar_amount + 75;
      neutronStar_cost = neutronStar_cost + neutronStar_add;
      neutronStar_add = neutronStar_add + 1;
      currency.innerHTML = total + " StarDust";
      neutronStar_upgrade.innerHTML = "Upgrade: " + neutronStar_cost + " StarDust";
      neutronStar_Stats.innerHTML = "Neutron Star Power: " + neutronStar_amount;
    } else {
      neutronStar_upgrade.innerHTML = "Not Enough StarDust! You need: " + neutronStar_cost;
    }
};

function blackDwarf_upgrader() {
    if (total >= blackDwarf_cost) { // black dwarfs theoroetical white stars with no more engery left
      total = total - blackDwarf_cost;
      blackDwarf_amount = blackDwarf_amount + 100;
      blackDwarf_cost = blackDwarf_cost + blackDwarf_add;
      blackDwarf_add = blackDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      blackDwarf_upgrade.innerHTML = "Upgrade: " + blackDwarf_cost + " StarDust";
      blackDwarf_Stats.innerHTML = "Black Dwarf Power: " + blackDwarf_amount;
    } else {
      blackDwarf_upgrade.innerHTML = "Not Enough StarDust! You need: " + blackDwarf_cost;
    }
};

function blackHole_upgrader() {  // black holes so massive that light cant escape
    if (total >= blackHole_cost) {
      total = total - blackHole_cost;
      blackHole_amount = blackHole_amount + 500;
      blackHole_cost = blackHole_cost + blackHole_add;
      blackHole_add = blackHole_add + 1;
      currency.innerHTML = total + " StarDust";
      blackHole_upgrade.innerHTML = "Upgrade: " + blackHole_cost + " StarDust";
      blackHole_Stats.innerHTML = "Black Hole Power: " + blackHole_amount;
    } else {
      blackHole_upgrade.innerHTML = "Not Enough StarDust! You need: " + blackHole_cost;
}
};

function superNova_upgrader() {   //  super nova  the bueatiful death of a star:
    if (total >= superNova_cost) {
      total = total - superNova_cost;
      superNova_amount = superNova_amount + 1000;
      rsuperNova_cost = superNova_cost + superNova_add;
      superNova_add = superNova_add + 1;
      currency.innerHTML = total + " StarDust";
      superNova_upgrade.innerHTML = "Upgrade: " + superNova_cost + " StarDust";
      superNova_Stats.innerHTML = "Super Nova Power: " + superNova_amount;
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
  redDwarf_managerBuy();
});

yellowDwarf_manager.addEventListener("click", (event) => {
  yellowDwarf_managerBuy();
});

blueGiant_manager.addEventListener("click", (event) => {
  blueGiant_managerBuy();
});

blueSuperGiant_manager.addEventListener("click", (event) => {
  blueSuperGiant_managerBuy();
});

redSuperGiant_manager.addEventListener("click", (event) => {
  redSuperGiant_managerBuy();
});

neutronStar_manager.addEventListener("click", (event) => {
  neutronStar_managerBuy();
});

blackDwarf_manager.addEventListener("click", (event) => {
  blackDwarf_managerBuy();
});

blackHole_manager.addEventListener("click", (event) => {
  blackHole_managerBuy();
});

superNova_manager.addEventListener("click", (event) => {
  superNova_managerBuy();
});
