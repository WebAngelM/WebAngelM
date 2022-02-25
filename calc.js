var n1 = document.getElementById('Num1');
var n2 = document.getElementById('Num2');
var res = document.getElementById('result');

document.getElementById('add').addEventListener("click", function () {
    res.value =
        parseInt(n1.value) + parseInt(n2.value);
});