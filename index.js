let screen1 = document.getElementsByClassName("display")[0];
let screen2 = document.getElementsByClassName("display")[1];
console.log(screen1.innerText);
console.log(screen2.innerText);

let count = 0;
function oneh(){
    count += 1;
    screen1.textContent = count;
}
function twoh(){
    count += 2;
    screen1.textContent = count;
}
function threeh(){
    count += 3;
    screen1.textContent = count;
}

let count2 = 0;
function one(){
    count2 += 1;
    screen2.textContent = count2;
}

function two(){
    count2 += 2;
    screen2.textContent = count2;
}
function three(){
    count2 += 3;
    screen2.textContent = count2;
}