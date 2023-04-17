/*now the d20 */
let random20 = 1
function roll20(){
let dice20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
random20 = Math.floor(Math.random() * dice20.length);
console.log(random20);
}

function printMessage2(){
    document.getElementById('d20-out').innerHTML = random20 + 1
}
