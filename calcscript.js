var holder = ""
var storeVal = [];
var calcDisp = document.getElementById("display");

$(".calc-key.number").click(buildNum);
$(".calc-key.symbol").click(modifier);

//Takes num keypresses and builds initNum; displays string on calc screen.
function buildNum() {
  holder += this.value;
  calcDisp.innerHTML = holder;
}

//Appends display with symbol; turns holder into an integer and stores in storeVal, then resets holder.
function modifier() {
  if (this.value === '=') {
    storeVal.push(holder);
    var calc = storeVal.join(" ");
    total = eval(calc);
    calcDisp.innerHTML = total;
    storeVal = [];
    holder = String(total);
  }

  if (this.value === 'AC') {
    holder = "";
    storeVal = [];
    calcDisp.innerHTML = "0";
  }

  if (this.value === 'CE') {
    if (calcDisp.innerHTML === '0' || calcDisp.innerHTML.length === 1) {
      calcDisp.innerHTML = '0'
      holder = "";
    } else {
      calcDisp.innerHTML = calcDisp.innerHTML.substring(0, calcDisp.innerHTML.length - 1)
      holder = holder.substring(0, holder.length -1);
    }
  }

  else if (this.value !== '=' && this.value !== 'AC' && this.value !== 'CE') {
  storeVal.push(holder);
  storeVal.push(this.value);
  calcDisp.innerHTML += this.value;
  holder = "";
  }
}