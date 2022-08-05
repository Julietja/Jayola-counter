
function welcome(){
 alert('Hello. Welcome!')
}


let count = 0
let countEl = document.getElementById('count')
let saveEl = document.getElementById('show')

function startCount(){
 let counting = count += 1;
countEl.innerText = counting
}

function saveCount(){
 let countStr = " " + count + " " + "-"
 saveEl.innerText += countStr;
 countEl.innerText = 0
 count = 0
 }









