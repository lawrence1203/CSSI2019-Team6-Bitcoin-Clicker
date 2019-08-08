(function() {
  for (var i=0; i<50; i++){
    var delay = i*2;
    var my_bar_div = document.getElementById("myBarDiv");
    var div_temp = document.createElement("DIV");   // Create a <button> element
    div_temp.classList.add("loading-bar");
    div_temp.style.WebkitAnimationDelay = ""+delay+"s";
    div_temp.style.animationDelay = ""+delay+"s";

    my_bar_div.appendChild(div_temp);               // Append <button> to <body>

  }

})();
