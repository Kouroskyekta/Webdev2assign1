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


document.getElementById("calc").addEventListener("click", (event) => {
    event.preventDefault();

    const kmToMiValue = (document.getElementById("kmToMi").value);
    const miToKmValue = (document.getElementById("miToKm").value);


    let result2 = [];

    const isKmToMi = document.getElementById("default-radio-1").checked;

    if (isKmToMi) {
        const kmValues = kmToMiValue.split(',').map(val => parseFloat(val.trim()))
        if (kmValues.every(val => !isNaN(val))) {
            const kmToMiConverter = getConversion("kmToMi");
            result2 = kmToMiConverter(kmValues);
        } else {
            result2 = ["Invalid input for KM"];
        }
    } else {
        const miValues = miToKmValue.split(',').map(val => parseFloat(val.trim()));
        if (miValues.every(val => !isNaN(val))) {
            const miToKmConverter = getConversion("miToKm");
            result2 = miToKmConverter(miValues);
        }
    }

    document.getElementById("result2").value = result2.join(', ');

});




document.getElementById("calc").addEventListener("click", (event) => {
    event.preventDefault();

    const cToFValue = (document.getElementById("cToF").value);
    const fToCValue = (document.getElementById("fToC").value);

    let result3 = [];

    const isCToF = document.getElementById("default-radio-1").checked;

    if (isCToF) {
        const cValues = cToFValue.split(',').map(val => parseFloat(val.trim()))
        if (cValues.every(val => !isNaN(val))) {
            const cToFConverter = getConversion("cToF");
            result3 = cToFConverter(cValues);
        } else {
            result3 = ["Invalid input for KM"];
        }
    } else {
        const fValues = fToCValue.split(',').map(val => parseFloat(val.trim()));
        if (fValues.every(val => !isNaN(val))) {
            const fToCConverter = getConversion("fToC");
            result3 = fToCConverter(fValues);
        }
    }

    document.getElementById("result3").value = result3.join(', ');

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


document.getElementById("default-radio-2").addEventListener("click", (event) => {

    if (event.target.checked) {
        document.getElementById("kmToMi").readOnly = true;
        document.getElementById("miToKm").removeAttribute("readonly");
        document.getElementById("kmToMi").value = "";
        document.getElementById("result2").value = "";
    }
})

document.getElementById("default-radio-1").addEventListener("click", (event) => {

    if (event.target.checked) {
        document.getElementById("kmToMi").readOnly = false;
        document.getElementById("miToKm").readOnly = true;
        document.getElementById("miToKm").value = "";
        document.getElementById("result2").value = "";
    }
})


document.getElementById("default-radio-2").addEventListener("click", (event) => {

    if (event.target.checked) {
        document.getElementById("cToF").readOnly = true;
        document.getElementById("fToC").removeAttribute("readonly");
        document.getElementById("cToF").value = "";
        document.getElementById("result3").value = "";
    }
})

document.getElementById("default-radio-1").addEventListener("click", (event) => {

    if (event.target.checked) {
        document.getElementById("cToF").readOnly = false;
        document.getElementById("fToC").readOnly = true;
        document.getElementById("fToC").value = "";
        document.getElementById("result3").value = "";
    }
})
