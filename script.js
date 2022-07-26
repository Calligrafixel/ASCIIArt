const wUnit = window.innerWidth / 5;
const hUnit = window.innerHeight / 10;

const _body = document.querySelector("body");
const _ctn = document.querySelector("#container");
const posters = document.getElementsByClassName("poster");
const poster1 = posters[0];
const poster2 = posters[1];
const poster3 = posters[2];       
const poster4 = posters[3];
const poster5 = posters[4];

window.addEventListener("mousemove", e => {
    const mX = e.clientX;
    const mY = e.clientY;

    if(mX < wUnit) {
        poster1.style.display = "block";

        _body.style.cursor = "zoom-in";
    }
    else if(wUnit <= mX && mX < wUnit * 2) {
        poster1.style.display = "none";
        poster2.style.display = "block";

        _body.style.cursor = "zoom-out";
    }
    else if(wUnit * 2 <= mX && mX < wUnit * 3) {
        poster2.style.display = "none";
        poster3.style.display = "block";

        _body.style.cursor = "w-resize";
    }
    else if(wUnit * 3 <= mX && mX < wUnit * 4) {
        poster3.style.display = "none";
        poster4.style.display = "block";

        _body.style.cursor = "nw-resize";
    }
    else if(wUnit * 4 <= mX && mX <= wUnit * 5) {
        poster4.style.display = "none";
        poster5.style.display = "block";

        _body.style.cursor = "n-resize";
    }
    
    level = 255 * Math.min(1,
        (Math.max(0, mY - 4 * hUnit)) / hUnit / 2
    );
    
    poster1.style.color = `rgb(${level}, ${level}, ${level})`;
    poster2.style.color = `rgb(${level}, ${level}, ${level})`;
    poster3.style.color = `rgb(${level}, ${level}, ${level})`;
    poster4.style.color = `rgb(${level}, ${level}, ${level})`;
    poster5.style.color = `rgb(${level}, ${level}, ${level})`;
    _body.style.background = `rgb(${255 - level}, ${255 - level}, ${255 - level})`;
});