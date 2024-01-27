const btnclick = document.getElementsByClassName("roll-button");
const diceimg = document.getElementById("dice");
function rollDice(){
    
}
btnclick.addEventListener("click", () => {
  diceimg.classList.add("roll-animation");
  setTimeout(() => {
    diceimg.classList.remove("roll-animation");
  }, 1000);
});
