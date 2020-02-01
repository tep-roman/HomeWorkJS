function addElement(a, b) {
    a.append(b)
}

function createElement(a,b){
    let app = document.querySelector("#app");
    let field = document.createElement(a);
    field.className = b;
    addElement(app, field);
}

for (let i = 0; i < 64; i++) {
    let color = "white";
    if (i % 2){
        color = "white";
    }else {
        color = "black";
    }
    createElement("div", color);
}