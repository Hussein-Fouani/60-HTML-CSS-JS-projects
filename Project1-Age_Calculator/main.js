const btn = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn"); // Added reset button
const birthdayss = document.getElementById("birthDay");
let results = document.getElementById("result");
function calculateAge() {
    const val = birthdayss.value;
    if (val == "") {
        alert("Can't submit Empty Data");
    } else {
        const age = getAge(val);
        results.innerHTML = `Your Age is ${age} ${age > 1 ? "year" : "years"} old`;
    }
}
function getAge(vale) {
    const currdate = new Date();
    const birth = new Date(vale);
    let age = currdate.getFullYear() - birth.getFullYear();
    const month = currdate.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && currdate.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

btn.addEventListener("click", calculateAge);

resetBtn.addEventListener("click", function() {
    birthdayss.value = ""; 
    results.innerHTML = ""; 
});
