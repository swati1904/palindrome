
const bmiCalculator = () => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const heightInMtrSq = (height * height / 10000);
    const bmi = weight / heightInMtrSq
    if (bmi <= 18) {
        document.getElementById("msg").innerHTML = "Hello  you are very thin & your bmi is " + `${bmi}.`;
    }
    else if (bmi > 18 && bmi < 25) {
        document.getElementById("msg").innerHTML = "Hello  you are Healthly & your bmi is " + `${bmi}.`;
    }
    else {
        document.getElementById("msg").innerHTML = "Hello  you are OverWeight & your bmi is " + `${bmi}.`;
    }
}