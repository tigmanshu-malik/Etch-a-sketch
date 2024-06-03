let dimension = 400
let box_no = 4


function build(){

    box_no = prompt("Enter number of boxes (At max 100)")

    let dim = dimension/box_no

    let container = document.querySelector("#main");
    let htmlContent = '';

    for (let i = 1; i <= box_no; i++) {
        htmlContent += `<div style="display: flex">`;

        for (let j = 1; j <= box_no; j++) {
            htmlContent += `<div style="width:${dim}px; height:${dim}px;" 
            onmouseover="this.style.backgroundColor = 'black'"></div>`;
        }

        htmlContent += `</div>`;
}

container.innerHTML = htmlContent;
}

build(4)
