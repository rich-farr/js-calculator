// var toDisplay = "";

// var test = $(".calc-key").click(function () {
//   var id = this.id;
//   toDisplay += id;
//   document.getElementById("display").innerHTML = toDisplay;
// toDisplay = Number(toDisplay);
// console.log(toDisplay);
// console.log(typeof(toDisplay));
// return toDisplay;
// });

// console.log(test);

var toDisplay = "";

var updateDisplay = function () {
  console.log(this.value);
  var id = this.id;
  if (id == "AC") {
    toDisplay = "0"
  }
  else if (id == "CE") {
    if (toDisplay === 0 || toDisplay.length === 1) {
      toDisplay = "0"
    } else {
      toDisplay = toDisplay.substring(0, toDisplay.length - 1);
    }
  }
  else {
    toDisplay += id;
  }
  document.getElementById("display").innerHTML = toDisplay;
}

var grabNum = function () {
  toDisplay = Number(toDisplay);
  console.log(toDisplay);
  console.log(typeof(toDisplay));
  return toDisplay;
}

$(".calc-key").click(updateDisplay);
//$("#\=").click(grabNum);