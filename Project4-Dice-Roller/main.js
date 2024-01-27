const btnclick = document.getElementById("roll-button");
const diceimg = document.getElementById("dice");
const rollhistory = document.getElementById("roll-history");
let historylist = [];

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  const diceface = getDiceFace(roll);
  historylist.add(diceface);
  updaterollhistory();
}
function updaterollhistory(){
    rollhistory.innerHTML ="";
    for(let i =0;i<historylist.length;i++){
        const listitem = document.createElement("li");
        listitem.innerHTML=`Roll ${i+1}: <span>${getDiceFace(historylist[i])}</span>`;
    }
}
function rollDices() {
  const roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

function getDiceFace(element) {
  const rols = "&#985" + rollDices();
}
btnclick.addEventListener("click", () => {
  diceimg.classList.add("roll-animation");
  setTimeout(() => {
    diceimg.classList.remove("roll-animation");
  }, 1000);
});
