const redDwarf_upgrade = document.querySelector(".Upgrade_Sect1")
const redDwarf = document.querySelector(".ItemPicture_Sect1")
const currency = document.querySelector(".Currency")

let total = 0

let redDwarf_cost = 10;
let redDwarf_amount = 0
let redDwarf_add = 1
let redDwarf_name = redDwarf
let redDwarf_plus = 1

function harvest(plus) {
    total += plus;
    currency.innerHTML = "$" + total + " StarDust";
};

function upgrade(cost, amount, add, name) {
    if (total >= cost) {
      total -= cost;
      amount += 1;
      add += 1;
      cost += add;
      document.querySelector(currency).innerHTML = "$" + total + " StarDust";
      redDwarf_upgrade.innerHTML = "Upgrade: $" + cost + " StarDust";
      console.log(total, cost, amount, add);
    } else {
      name.innerHTML = "Not Enough StarDust, you're too poor!";
      setTimeout(name.innerHTML = "Upgrade: $" + cost + " StarDust");
    }
};


redDwarf.addEventListener("click", harvest(redDwarf_plus))
redDwarf_upgrade.addEventListener("click", console.log('jksegbuhwebfhab'))
