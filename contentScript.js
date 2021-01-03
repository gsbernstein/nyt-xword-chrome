var button = document.getElementsByClassName("ButtonBar-button--3wfc3")[0];
var title = document.getElementsByClassName("PuzzleDetails-title--iv1IG")[0];
var main = document.getElementsByClassName("Layout-unveilable--3OmrG")[0];
title.addEventListener("click", function() {
  // alert(".");
  // console.log("The color is green.");
  main.requestFullscreen()
}, false);