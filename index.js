// Generate and display random pin
let rand;
let pin = "";
let tryLeft = 3;
document.getElementById("generate-pin").addEventListener("click", function () {
  rand = Math.floor(Math.random() * 10000);
  if (rand < 1000) rand += 1000;
  tryLeft = 3;
  document.getElementById("display-generate").setAttribute("placeholder", rand);
  document.getElementById("display-pin").setAttribute("placeholder", "");
  document.getElementById("try-left").innerHTML = 3;
  document.getElementById("submit-pin").disabled = false;
  document.getElementById("notify-wrong").style.display = "none";
  document.getElementById("notify-right").style.display = "none";
});

// Matching pin

const nums = document.getElementsByClassName("num");

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];

  num.addEventListener("click", function () {
    pin += num.innerHTML;
    document.getElementById("display-pin").setAttribute("placeholder", pin);
  });
}

document.getElementById("submit-pin").addEventListener("click", function () {
  if (rand == pin) {
    document.getElementById("notify-wrong").style.display = "none";
    document.getElementById("notify-right").style.display = "block";
    pin = "";
  } else {
    document.getElementById("notify-right").style.display = "none";
    document.getElementById("notify-wrong").style.display = "block";
    pin = "";
    tryLeft--;
    console.log(tryLeft);
    if (tryLeft == 0) {
      document.getElementById("submit-pin").disabled = true;
    }
    document.getElementById("try-left").innerHTML = tryLeft;
  }
});

// Back button operation

document.getElementById("back").addEventListener("click", function () {
  pin = pin.substring(0, pin.length - 1);
  document.getElementById("display-pin").setAttribute("placeholder", pin);
});

// Clear button

document.getElementById("clear").addEventListener("click", function () {
  pin = "";
  document.getElementById("display-pin").setAttribute("placeholder", "");
});
