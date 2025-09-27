function operation(opt) {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter a number");
        return;
    }

    let result = 0;
    if (opt == "add") {
        result = add(num1, num2);
    } else if (opt == "sub") {
        result = sub(num1, num2);
    } else if (opt == "mul") {
        result = mul(num1, num2);
    } else if (opt == "div") {
        result = div(num1, num2);
    } else if (opt == "squ") {
        result = squ(num1, num2);
    }

    document.getElementById("result").value = result;
    document.getElementById("result").style.display = "block";
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function squ(num1, num2) {
    return Math.pow(num1, num2);
}