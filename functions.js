const getConversion = (from) => {

    const convert = (value) => {
        switch (from) {
            case "cToF":
                return (value * 9 / 5) + 32;
            case "fToC":
                return (value - 32) * 5 / 9;

            case "kmToMi":
                return value / 1.60934;
            case "miToKm":
                return value * 1.60934;

            case "kgToLb":
                return value * 2.20462;
            case "lbToKg":
                return value / 2.20462;
        }
    };

    return (values) => {

        return values.map(val => convert(val));
    };
}

document.getElementById("calc").addEventListener("click", (event) => {

    event.preventDefault();

    const kgToLbValue = (document.getElementById("kgToLb").value);
    const lbToKgValue = (document.getElementById("lbToKg").value);

    let result = [];

    const isKgToLb = document.getElementById("default-radio-2").checked;

    if (isKgToLb) {

        const kgValues = kgToLbValue.split(',').map(val => parseFloat(val.trim()));
        if (kgValues.every(val => !isNaN(val))) {
            const kgToLbConverter = getConversion("kgToLb");
            result = kgToLbConverter(kgValues);
        } else {
            result = ["Invalid input for KG"];
        }
    } else {
        const lbValues = lbToKgValue.split(',').map(val => parseFloat(val.trim()));
        if (lbValues.every(val => !isNaN(val))) {
            const lbToKgConverter = getConversion("lbToKg");
            result = lbToKgConverter(lbValues);
        }
    }


    document.getElementById("result").value = result.join(', ');

});

document.getElementById("default-radio-1").addEventListener("click", (event) => {

    if (event.target.checked) {
        document.getElementById("kgToLb").readOnly = true;
        document.getElementById("lbToKg").removeAttribute("readonly");
        document.getElementById("kgToLb").value = "";
        document.getElementById("result").value = "";
    }

});

document.getElementById("default-radio-2").addEventListener("click", (event) => {
    if (event.target.checked) {
        document.getElementById("kgToLb").readOnly = false;
        document.getElementById("lbToKg").readOnly = true;
        document.getElementById("lbToKg").value = "";
        document.getElementById("result").value = "";
    }
})

function openTab(tabId) {
    let tabs = document.querySelectorAll('div[id^="tab"]');
    tabs.forEach(tab => tab.style.display = "none");

    document.getElementById(tabId).style.display = "block";
}

function convertTemperature() {
    let input = parseFloat(document.getElementById('cToF').value) || parseFloat(document.getElementById('fToC').value);
    if (isNaN(input)) {
        document.getElementById('result3').value = "Please enter a valid number.";
        return;
    }

    let conversionType = document.querySelector('input[name="default-radio"]:checked').nextElementSibling.innerText.trim() === "C to F" ? "cToF" : "fToC";

    let convertFunc = getConversion(conversionType);
    let result = convertFunc([input])[0];

    let resultField = document.getElementById('result3');
    resultField.value = `${input}° ${conversionType.startsWith("c") ? "C" : "F"} = ${result.toFixed(2)}° ${conversionType.endsWith("F") ? "F" : "C"}`;
}
    
document.getElementById("default-radio-2").addEventListener("click", () => {
    document.getElementById("cToF").readOnly = true;
    document.getElementById("fToC").removeAttribute("readonly");
    document.getElementById("cToF").value = "";
    document.getElementById("result3").value = "";
});

document.getElementById("default-radio-1").addEventListener("click", () => {
    document.getElementById("cToF").readOnly = false;
    document.getElementById("fToC").readOnly = true;
    document.getElementById("fToC").value = "";
    document.getElementById("result3").value = "";
});

document.getElementById("calc").addEventListener("click", (event) => {
    event.preventDefault();
    convertTemperature();
});

document.getElementById("calc").addEventListener("click", (event) => {

    event.preventDefault();

    const kgToLbValue = (document.getElementById("kgToLb").value);
    const lbToKgValue = (document.getElementById("lbToKg").value);

    let result = [];

    const isKgToLb = document.getElementById("default-radio-2").checked;

    if (isKgToLb) {

        const kgValues = kgToLbValue.split(',').map(val => parseFloat(val.trim()));
        if (kgValues.every(val => !isNaN(val))) {
            const kgToLbConverter = getConversion("kgToLb");
            result = kgToLbConverter(kgValues);
        } else {
            result = ["Invalid input for KG"];
        }
    } else {
        const lbValues = lbToKgValue.split(',').map(val => parseFloat(val.trim()));
        if (lbValues.every(val => !isNaN(val))) {
            const lbToKgConverter = getConversion("lbToKg");
            result = lbToKgConverter(lbValues);
        }
    }


    document.getElementById("result").value = result.join(', ');

});

document.getElementById("default-radio-1").addEventListener("click", (event) => {

    if (event.target.checked) {
        document.getElementById("kgToLb").readOnly = true;
        document.getElementById("lbToKg").removeAttribute("readonly");
        document.getElementById("kgToLb").value = "";
        document.getElementById("result").value = "";
    }

});

document.getElementById("default-radio-2").addEventListener("click", (event) => {
    if (event.target.checked) {
        document.getElementById("kgToLb").readOnly = false;
        document.getElementById("lbToKg").readOnly = true;
        document.getElementById("lbToKg").value = "";
        document.getElementById("result").value = "";
    }
})
