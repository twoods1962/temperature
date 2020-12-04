function selectUnit() {
    let outputTemp;
    let isChecked = document.getElementById("tempF").checked;
    let tempInput = document.getElementById("tempInput").value;
    if (isChecked == true) {
        // C = (5/9) * (F-32)

        outputTemp = (5/9) * (tempInput-32);
    }
    else {
        // (0 C x 9/5) + 32 = 32 F

        outputTemp = (tempInput*(9/5)) + 32;
    }
    document.getElementById("tempOutput").value = outputTemp;
}
