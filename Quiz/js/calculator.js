const calculatorBox = document.querySelector(".calculator")
function open_cal() {
    calculatorBox.classList.remove("hide");
    setTimeout(() => { calculatorBox.classList.add("hide"); }, 1500);
}