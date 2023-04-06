import * as TEST from './scripts/testFetch.js';
import Photo from './scripts/photo.js';
import * as d3 from 'd3';
import { async } from 'regenerator-runtime';

const imgNum = 24;

let width = window.innerWidth * 0.67;

const height = 350;

const photos = {};

function createPhotos(input) {
    for (let i = 0; i < input.length; i++) {
        photos[i] = new Photo(input[i])
    }
}

(Promise.all([TEST.cleveland(), TEST.chicago(), TEST.harvard()]).then((values) => {
    // shuffle will take place here
    createPhotos(values.flat())
    render()
}));

const display = document.querySelector('#img-container')

const createCanvas = d3.select('div#img-container')
    .append('canvas')
    .attr('width', width)
    .attr('height', 350)
    .attr('id', 'canvas');

addEventListener("resize", (e) => {
    width = window.innerWidth * 0.67;
    createCanvas
        .attr('width', width);

    render();
})

const render = () => {
    const ctx = createCanvas.node().getContext('2d')
    let lowerText = document.getElementById("below-display-text")
    lowerText.innerHTML = "Once you move your mouse away from the photo array, <br> it will reset and the description will disappear."
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    for (let i = 0; i < imgNum; i++){
        let imgTest = new Image()
        imgTest.onload = () => {
            ctx.drawImage(imgTest, 
                300, 100, width / imgNum - 3, height,
                i * (width / imgNum), 0, width / imgNum - 4, height)
        }
        imgTest.src = photos[i].url
    }
}

function mousePos(canvas, e) {
    let bRect = canvas.getBoundingClientRect();
    let xCord = e.clientX - bRect.x;
    return xCord
}

function redraw(focus) {
    const ctx = createCanvas.node().getContext('2d')
    let lowerText = document.getElementById("below-display-text")
    
    ctx.clearRect(0 ,0, ctx.canvas.width, ctx.canvas.height)
    let x = 0;

    for (let j = 0; j < imgNum; j++) {
        let imgTest = new Image("auto", height)

        if (j === focus) {
            imgTest.onload = () => {
                ctx.drawImage(imgTest,
                    200, 100, (width * 0.3) - 3, height,
                    x, 0, (width * 0.3) - 4, height);
                x += (width * 0.3);
            }
            lowerText.innerHTML = photos[j].description + "<br><br>" + photos[j].source;
            imgTest.src = photos[j].url;
        } else if (j === focus - 1 || j === focus + 1) {
            imgTest.onload = () => {
                ctx.drawImage(imgTest,
                    250, 100, (width * 0.1) - 3, height,
                    x, 0, (width * 0.1) - 4, height);
                x += (width * 0.1);
            }
            imgTest.src = photos[j].url;
        } else if (j === focus - 2 || j === focus + 2) {
            imgTest.onload = () => {
                ctx.drawImage(imgTest,
                   250, 100, (width * 0.07) - 3, height,
                    x, 0, (width * 0.07) - 4, height)
                x += (width * 0.07);
            }
            imgTest.src = photos[j].url;
        } else {
            imgTest.onload = () => {
                ctx.drawImage(imgTest,
                    300, 150, (width * 0.0189) - 3, height,
                    x, 0, (width * 0.0189) - 4, height);
                x += (width * 0.0189);
            }
            imgTest.src = photos[j].url;
        }
    }
}

const icons = [];

function createIcon(idx) {

    let bar = document.getElementById('icons')
    let aArr = bar.getElementsByTagName("a")
    if (aArr.length >= 6) {
        bar.removeChild(bar.firstChild);
    }

    let sideBar = d3.select("div#icons")
        .append("a")
        .attr("href", photos[idx].url)
        .attr("target", "_blank")
        .append("img")
        .attr("src", photos[idx].url);

}

let clicked = false


// work on next time with animations
// display.addEventListener("mousemove", (e) => {
//     let x = mousePos(createCanvas.node(), e)
//     let zone = width / imgNum
//     let focus;
//     for (let i = 0; i < imgNum; i++) {
//         if (x > (i * zone) && i < ((i + 1) * zone)) {
//             focus = i;
//         }
//     }
//     // createIcon(focus)
//     redraw(focus)
//     clicked = true;

// })

display.addEventListener("click", (e) => {
    let x = mousePos(createCanvas.node(), e)
    let zone = width / imgNum
    let focus;
    for (let i = 0; i < imgNum; i++) {
        if (x > (i * zone) && i < ((i + 1) * zone)) {
            focus = i;
        }
    }
    createIcon(focus)
    redraw(focus)
    clicked = true;

})

display.addEventListener("mouseout", (e) => {
    if (clicked){
        setTimeout(render, 500)
        clicked = false;
    }
})


