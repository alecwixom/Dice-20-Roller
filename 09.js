let random = 1
function roll(){
let dice20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
random = Math.floor(Math.random() * dice20.length);
}

function printMessage(){
    document.getElementById('output').innerHTML = random + 1
}