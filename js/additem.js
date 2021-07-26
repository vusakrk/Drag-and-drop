const form = document.querySelector('form');
const items = document.querySelector('#itemName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
const input = document.querySelector("#add");
const btn = document.querySelector("#btnAdd");
const drag = document.querySelector('.drag');
var list = document.getElementsByTagName("p");
var i;
for (i = 0; i < list.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";

    span.appendChild(txt);
    list[i].appendChild(span);
}
btnAdd.onclick = function() {
    var txt = input.value;
    if (txt === '') {
        alert('Please write text')
    } else {
        var li = document.createElement('li');
        li.innerHTML = txt;
        drag.insertBefore(li, drag.childNodes[0]);
        input.value = '';
    }

};

var close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function removeAll() {
    var lst = document.querySelectorAll(".drag");
    lst[0].innerHTML = "";
}