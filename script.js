let container = document.querySelector("#main");
let htmlContent = '';

for (let i = 1; i < 20; i++) {
    htmlContent += `<div style="display: flex">`;

    for (let j = 1; j < 20; j++) {
        htmlContent += `<div class="grid-item" onmouseover="this.style.backgroundColor = 'black'"></div>`;
    }

    htmlContent += `</div>`;
}

container.innerHTML = htmlContent;
