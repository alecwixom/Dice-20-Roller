/*now the d10 */
let random10 = 1
function roll10(){
let dice10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
random10 = Math.floor(Math.random() * dice10.length);
console.log(random10);
}

function printMessage1(){
    document.getElementById('d10-out').innerHTML = random10 + 1
}
