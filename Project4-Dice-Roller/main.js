const btnclick = document.getElementById("roll-button");
const diceimg = document.getElementById("dice");
const rollhistory = document.getElementById("roll-history");
let historylist = [];

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  const diceface = getDiceFace(roll);
  historylist.push(diceface);
  updaterollhistory();
}

function updaterollhistory() {
  rollhistory.innerHTML = "";
  for (let i = 0; i < historylist.length; i++) {
    const listitem = document.createElement("li");
    listitem.innerHTML = `Roll ${i + 1}: <span>${historylist[i]}</span>`;
    rollhistory.appendChild(listitem);
  }
}

function rollDices() {
  const roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

function getDiceFace(element) {
  return String.fromCodePoint(0x267f + element);
}

btnclick.addEventListener("click", () => {
  diceimg.classList.add("roll-animation");
  setTimeout(() => {
    diceimg.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
