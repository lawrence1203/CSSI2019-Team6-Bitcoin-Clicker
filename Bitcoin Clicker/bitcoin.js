const redDwarf_upgrade = document.querySelector(".Upgrade_Sect1")

let total = 0
let red

function harvest(add) {
    total += add
};

function upgrade(cost, amount, add, name) {
    if (total >= cost) {
      total -= cost;
      amount += 1;
      add += 1;
      cost += add;
      document.querySelector(Currency).innerHTML = "$" + total + " StarDust"
      redDwarf_upgrade.innerHTML = "Upgrade: $" + cost + " StarDust"
      console.log(total, cost, amount, add)
    }
};
