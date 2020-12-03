function toHumanYears() {
    let dogAge = document.getElementById("dogYearsInput").value;
    let humanAge = dogAge * 7;
    let lifeStage;
    if (humanAge > 18) {
        lifeStage = "an adult";
    }
    else {
        lifeStage = "a pup";
    }
    let outputString = "In human years your dog is " + humanAge + " years old and is considered " + lifeStage + ".";
    document.getElementById("output").innerHTML = outputString;
}
