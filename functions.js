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
