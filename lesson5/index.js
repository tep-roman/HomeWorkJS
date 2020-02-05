function addElement(a, b) {
    a.append(b);
    b.addEventListener('click', cell =>{
        console.log(cell.target.classList.toggle('green'))
    })
}

function createElement(a,b,){
    let app = document.querySelector("#app");
    let field = document.createElement(a);
    field.className = b;
    addElement(app, field);
}

function addElement2(a, b) {
    a.before(b);
}

function createElement2(a,b){
    let app = document.querySelector("#app");
    let number = document.createElement(a);
    number.className = b;
    number.innerHTML = " A B C D E F G H ";
    addElement2(app, number);
}

function createElement3(a,b){
    let app = document.querySelector("#app");
    let number = document.createElement(a);
    number.className = b;
    number.innerHTML = " 1 2 3 4 5 6 7 8 ";
    addElement2(app, number);
}

let color = "white";


for (let j = 0; j < 10; j++){
    if (j === 0){
        color = "letters";
        createElement2("div", color);
    } else if (j === 1){
        color = "number";
        createElement3("div", color);
    }
    else if (j % 2){
        for (let i = 0; i < 8; i++) {
            if (i % 2){
                color = "white";
            }else {
                color = "black";
            }
            createElement("div", color);
        }
    } else {
        for (let i = 0; i < 8; i++) {
            if (i % 2){
                color = "black";
            }else {
                color = "white";
            }
            createElement("div", color);
        }
    }
}

let green = document.querySelector(".green");

function whiteGreen() {
    if (color === 'white') {
        color = 'green'
    } else {
        color = 'white'
    }
}

green.addEventListener("click", whiteGreen);