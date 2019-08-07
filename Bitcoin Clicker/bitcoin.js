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

function redDwarf_upgrader() {
    if (total >= redDwarf_cost) {
      total = total - redDwarf_cost;
      redDwarf_amount = redDwarf_amount + 1;
      redDwarf_cost = redDwarf_cost + redDwarf_add;
      redDwarf_add = redDwarf_add + 1;
      currency.innerHTML = total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust";
    } else {
      redDwarf_upgrade.innerHTML = "Not Enough StarDust, you're too poor!";
      setTimeout(name.innerHTML = "Upgrade: " + redDwarf_cost + " StarDust", 1000);
    }
};

function redDwarf_upgrader() {
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

function redDwarf_upgrader() {
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
