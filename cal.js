let masterCal = "";

function calDisplay(value) {
    masterCal += value;
    document.getElementById("prob-screen").value = masterCal;
}

function bckSpace () {
    masterCal = "";
    document.getElementById("prob-screen").value = document.getElementById("prob-screen").value.slice(0,-1);
}

function equalTo () {
    let equalAnswer = eval(masterCal);
    document.getElementById("soln-screen").value = equalAnswer;
    masterCal = equalAnswer();
}

function resetAll () {
    masterCal = "";
    document.getElementById("prob-screen").value = "";
    document.getElementById("soln-screen").value = "";
}

function calculatePercent(percentage) {
    const expression = masterCal;
    const percentValue = eval(expression) / 100;
    document.getElementById("soln-screen").value = percentValue;
    masterCal = percentValue.toString();
}

function toggleDarkMode() {
    let calculator = document.querySelector('.calculator');
    calculator.classList.toggle('dark');
  }