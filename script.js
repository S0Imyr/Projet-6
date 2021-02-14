

left_arrows = document.getElementsByClassName("left_scroll")
right_arrows = document.getElementsByClassName("right_scroll")

for (let left_arrow of left_arrows) {
  left_arrow.onclick = function() {left_arrow.parentElement.children[1].scrollBy(-202,0);};
};

for (let right_arrow of right_arrows) {
  right_arrow.onclick = function() {right_arrow.parentElement.children[1].scrollBy(202,0)};
};





// Get the modal
let BestRatedModals = [];
BestRatedModals.push(document.getElementById("BestRatedModalFilm1"));
BestRatedModals.push(document.getElementById("BestRatedModalFilm2"));
BestRatedModals.push(document.getElementById("BestRatedModalFilm3"));
BestRatedModals.push(document.getElementById("BestRatedModalFilm4"));
BestRatedModals.push(document.getElementById("BestRatedModalFilm5"));
BestRatedModals.push(document.getElementById("BestRatedModalFilm6"));
BestRatedModals.push(document.getElementById("BestRatedModalFilm7"));

// Get the button that opens the modal
let BestRatedButtons = [];
BestRatedButtons.push(document.getElementById("BestRatedBtn1"));
BestRatedButtons.push(document.getElementById("BestRatedBtn2"));
BestRatedButtons.push(document.getElementById("BestRatedBtn3"));
BestRatedButtons.push(document.getElementById("BestRatedBtn4"));
BestRatedButtons.push(document.getElementById("BestRatedBtn5"));
BestRatedButtons.push(document.getElementById("BestRatedBtn6"));
BestRatedButtons.push(document.getElementById("BestRatedBtn7"));

// Get the <span> element that closes the modal
let spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
for (let i = 0; i < BestRatedButtons.length; i++) {
  BestRatedButtons[i].onclick = function() {
    BestRatedModals[i].style.display = "block";
  }
}





for (let i = 0; i < BestRatedModals.length; i++) {
// When the user clicks on <span> (x), close the modal
  spans[i].onclick = function() {
    BestRatedModals[i].style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === BestRatedModals[i]) {
      BestRatedModals[i].style.display = "none";
    }
  }
}