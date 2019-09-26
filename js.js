'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    newDiv(height, width, bg, fontSize, textAlign) {
        let div = document.createElement('div');

        div.textContent = 'Какой-то текст....';
        div.style.height = height + 'px';
        div.style.width = width + 'px';
        div.style.backgroundColor = bg;
        div.style.fontSize = fontSize + 'px';
        div.style.textAlign = textAlign;
        document.body.appendChild(div);
    }
}

let newdiv = new Options();
newdiv.newDiv(100, 400, 'red', 12, 'center');
