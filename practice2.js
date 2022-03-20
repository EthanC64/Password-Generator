var choices = ["r", "p", "s"];

var randomIndex = Math.floor(Math.random() * 3);
var computerPick = choices[randomIndex];

console.log("computerPick", computerPick);

var userPick = prompt("please pick r p s ...");

console.log("userPick", userPick);

if (userPick === "r" && computerPick === "r") {
  alert("tie");
}

if (userPick === "r" && computerPick === "p") {
  alert("computer wins");
}

if (userPick === "r" && computerPick === "s") {
  alert("user wins");
}

if (userPick === "p" && computerPick === "r") {
  alert("user wins");
}

if (userPick === "p" && computerPick === "p") {
  alert("tie");
}

if (userPick === "p" && computerPick === "s") {
  alert("computer wins");
}

if (userPick === "s" && computerPick === "r") {
  alert("computer wins");
}

if (userPick === "s" && computerPick === "p") {
  alert("user wins");
}

if (userPick === "s" && computerPick === "s") {
  alert("tie");
}
