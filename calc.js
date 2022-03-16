// import Swup from 'swup';
const swup = new Swup();


var n1 = document.getElementById('Num1');
var n2 = document.getElementById('Num2');
var res = document.getElementById('result');

document.getElementById('add').addEventListener("click", function () {
    res.value =
        parseInt(n1.value) + parseInt(n2.value);
});
document.getElementById('sub').addEventListener("click", function () {
    res.value =
        parseInt(n1.value) - parseInt(n2.value);
});
document.getElementById('mul').addEventListener("click", function () {
    res.value =
        parseInt(n1.value) * parseInt(n2.value);
});
document.getElementById('div').addEventListener("click", function () {
    res.value =
        parseInt(n1.value) / parseInt(n2.value);
});
document.getElementById('clear_res').addEventListener("click", function () {
    res.value = ''
});
document.getElementById('clear_all').addEventListener("click", function () {
    res.value = '', n1.value = '', n2.value = ''
});


