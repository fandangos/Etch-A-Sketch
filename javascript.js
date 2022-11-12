const app = document.getElementById('app');
const buttons = document.querySelectorAll('.buttons');
const blackBtn = document.getElementById('button1');
const rainbowBtn = document.getElementById('button2');
const reset = document.getElementById('button3');
const gridSlider = document.getElementById('gridSlider');
const sliderValue = document.getElementById('sliderValue');

let rainbow = false;

function makeGrid(value) {
    removeAllChildNodes(app);
    app.style.setProperty('--grid-rows', value);
    app.style.setProperty('--grid-cols', value);
    for (c = 0; c < (value * value); c++) {
        let cell = document.createElement("div");
        app.appendChild(cell).className = "grid-item";
    };
    paintDivs();
};

makeGrid(16);

const resetGrid = function () {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.background = '';
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomColor() {
    return Math.floor(Math.random() * 256);
}

function paintDivs() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('mouseover', event => {
            if (rainbow) {
                item.style.background = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
            } else {
                item.style.background = '#000';
            }
        })
    })
}

buttons.forEach(btn => {
    btn.addEventListener('mouseover', event => {
        btn.style.backgroundColor = 'rgb(15, 124, 255)'
    })
})

buttons.forEach(btn => {
    btn.addEventListener('mouseleave', event => {
        btn.style.backgroundColor = 'rgb(115, 124, 255)'
    })
})

buttons.forEach(btn => {
    btn.addEventListener('mousedown', event => {
        btn.style.transform = 'scale(1.15)';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('mouseup', event => {
        btn.style.transform = 'none';
    })
})

reset.addEventListener('click', resetGrid);

rainbowBtn.addEventListener('click', event => {
    rainbow = true;
});

blackBtn.addEventListener('click', event => {
    rainbow = false;
})

gridSlider.addEventListener('input', function () {
    let sliderNum = gridSlider.value;
    sliderValue.textContent = sliderNum + ' x ' + sliderNum;
    makeGrid(sliderNum);
});