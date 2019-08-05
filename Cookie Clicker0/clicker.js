mainbutton = document.querySelector("button")
dirtTotal = document.querySelector(".total_dirt")
woodbutton = document.querySelector("#woodshovel")
stonebutton = document.querySelector("#stoneshovel")

var total = 0

var clicklvl = 1

var woodshovels = 0
var woodCost = 10
var woodAdd = 1

var stoneshovels = 0
var stoneCost = 100
var stoneAdd = 1

function wood_digger() {
  if (woodshovels > 0) {
      dirtTotal = dirtTotal + woodshovels;
      dirtTotal.innerHTML = total + " bitcoin";
      console.log(total)
  }
};

mainbutton.addEventListener("click", function() {
  total = total + clicklvl;
  dirtTotal.innerHTML = total + " dirt";
});

woodbutton.addEventListener("click", function() {
  if (total >= woodCost) {
    total = total - woodCost;
    woodCost = woodCost + woodAdd;
    woodAdd = woodAdd + 1;
    woodshovels = woodshovels + 1;
    clicklvl = clicklvl + 1;
    document.querySelector("#WoodShovelCost").innerHTML = "Cost: " + woodCost + " bitcoin";
    dirtTotal.innerHTML = total + " dirt";
    document.querySelector("#WoodShovelNum").innerHTML = woodshovels + " Wood Shovels";
    document.querySelector("#lvl").innerHTML = clicklvl + " dirt/click";

} else {
  document.querySelector("#WoodShovelCost").innerHTML = "Not Enough Dirt!";
  setInterval(function() {document.querySelector("#WoodShovelCost").innerHTML = "Cost: " + woodCost + " bitcoin"}, 1000);
}
});

stonebutton.addEventListener("click", function() {
  if (total >= stoneCost) {
    total = total - stoneCost;
    stoneCost = stoneCost + stoneAdd;
    stoneAdd = stoneAdd + 1;
    stoneshovels = stoneshovels + 1;
    clicklvl = clicklvl + 5;
    document.querySelector("#StoneShovelCost").innerHTML = "Cost: " + stoneCost + " dirt";
    dirtTotal.innerHTML = total + " dirt";
    document.querySelector("#StoneShovelNum").innerHTML = stoneshovels + " Stone Shovels";
    document.querySelector("#lvl").innerHTML = clicklvl + " bitcoin/click";

} else {
  document.querySelector("#StoneShovelCost").innerHTML = "Not Enough Dirt!";
  setInterval(function() {document.querySelector("#StoneShovelCost").innerHTML = "Cost: " + stoneCost + " bitcoin"}, 1000);
}
});
