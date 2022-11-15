let count_l = document.getElementById("count");
let save_l= document.getElementById("save");
let count = 0;

function inc() {
    count +=1;
    count_l.innerHTML = count;
}
function save() {
    let countSTR=count + " - ";
    save_l.innerText+=countSTR;
    count=0;
    count_l.textContent=0;
}