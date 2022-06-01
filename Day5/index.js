function randomNum() {
    var min, max;
    min=undefined;
    max=undefined;
    min =parseInt(document.getElementById('minimum').value);
    max =parseInt(document.getElementById('maximum').value);
    document.getElementById('num').innerHTML = Math.floor(Math.random() * max) + min;
    console.log(min,max, (Math.floor(Math.random() * max) + min));
    min=undefined;
    max=undefined;
}
