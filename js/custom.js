let header = document.querySelector(".header");
let start_input = document.querySelector(".start_input");
let start_btn = document.querySelector(".start_btn");
let error = document.querySelector(".error");
// ========================================
let playeroneheader = document.querySelector(".playeroneheader");
let playerone_input = document.querySelector(".playerone_input");
let playerone_btn = document.querySelector(".playerone_btn");
let playeroneerroror = document.querySelector(".playeroneerror");
// =========================================
let playertwoheader = document.querySelector(".playertwoheader");
let playertwo_input = document.querySelector(".playertwo_input");
let playertwo_btn = document.querySelector(".playertwo_btn");
let playertwoerroror = document.querySelector(".playertwoerror");
let count = 5;
// =========================================
let playerthreeheader = document.querySelector(".playerthreeheader");
let playerthree_input = document.querySelector(".playerthree_input");
let playerthree_btn = document.querySelector(".playerthree_btn");
let playerthreeerror = document.querySelector(".playerthreeerror");

let result = document.querySelector(".result");
// ============== page one ================

start_btn.addEventListener("click", function () {
  if (start_input.value == "" || start_input.value == Number) {
    error.innerHTML = "Please Type Your Name";
  } else {
    console.log(start_input.value);
    error.style.display = "none";
    start_btn.style.display = "none";
    start_input.style.display = "none";
    header.style.display = "none";
    playeroneheader.style.display = "block";
    playerone_input.style.display = "block";
    playerone_btn.style.display = "block";
  }
});

// =============== page two ================

playerone_btn.addEventListener("click", function () {
  if (playerone_input.value < 1 || playerone_input.value > 10) {
    playeroneerroror.innerHTML = "Your Number Up to 10";
  } else {
    if (playerone_input.value - 7) {
      playerone_btn.style.display = "none";
      playeroneheader.style.display = "none";
      playeroneheader.innerHTML = "none" + input.value;
      playertwo_input.style.display = "block";
      playertwo_btn.style.display = "block";
      playerone_input.style.display = "none";
      playertwo_btn.style.display = "block";
      playertwoheader.style.display = "block";
    } else {
      console.log("Please type only Number");
      playeroneerroror.style.display = "none";
    }
  }
});

// ====================================
playertwo_btn.addEventListener("click", function () {
  if (playerone_input.value < 1 || playerone_input.value > 10) {
    playeroneerroror.innerHTML = "Your Number Up to 10";
  } else {
    if (playerone_input.value - 7) {
      playerone_btn.style.display = "none";
      playeroneheader.style.display = "none";
      playertwo_input.style.display = "none";
      playertwo_btn.style.display = "none";
      playerone_input.style.display = "none";
      playertwo_btn.style.display = "none";
      playertwoheader.style.display = "none" + input.value;

      playerthreeheader.style.display = "block";
      playerthree_input.style.display = "block";
      playerthree_btn.style.display = "block";
      playerthreeerror.style.display = "block";
    } else {
      console.log("Please type only Number");
      playeroneerroror.style.display = "none" + input.value;
    }
  }
});

playerthree_btn.addEventListener("click", function () {
  if (playertwo_input.value == playerone_input.value) {
    console.log("mile geche");
  } else {
    playerone_input.innerHTML = "Mile geche ";
    count--;
    console.log(count);
    if (count == 0) {
      result.innerHTML = "Game Over";
    }
  }
});
