const total = document.querySelector(".btncalc");
const reset = document.querySelector(".btncal");
const totalspan = document.getElementById("total");
const billAmountInput = document.getElementById("billamount");
const tipPercentageInput = document.getElementById("tippercentage");

total.addEventListener("click", function () {
    const billAmount = billAmountInput.value;
    const tipPercentage = tipPercentageInput.value;
    const totalAmount = Math.round(billAmount * (1 + tipPercentage / 100));
    totalspan.innerHTML = `Your Total is: ${totalAmount}$ `;
});

reset.addEventListener("click", function () {
    billAmountInput.value = "";
    tipPercentageInput.value = "";
    totalspan.innerHTML = "";
});
