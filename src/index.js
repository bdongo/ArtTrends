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
        // console.log(input[i], "input i")
        photos[i] = new Photo(input[i])
    }
}

(Promise.all([TEST.harvard(), TEST.cleveland(), TEST.chicago()]).then((values) => {
    console.log(values.flat(), "values")
    // shuffle will take place here
    createPhotos(values.flat())
    render()
}));

console.log(photos, "objARR");

const display = document.querySelector('#img-container')

const createCanvas = d3.select('div#img-container')
    .append('canvas')
    .attr('width', width)
    .attr('height', 350)
    .attr('id', 'canvas');

addEventListener("resize", (e) => {
    // console.log(window.innerWidth, "assigning innerwidth");
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
        
        // imgTest.src = "https://openaccess-cdn.clevelandart.org/1922.1133/1922.1133_web.jpg"
        // console.log(imgTest)
    }
}

// render()

function mousePos(canvas, e) {
    let bRect = canvas.getBoundingClientRect();
    // console.log(e)
    // console.log(bRect, "brect")
    let xCord = e.clientX - bRect.x;
    console.log(xCord, "xcord")
    return xCord
}
// let lowerText = document.getElementById("below-display-text")
// console.log(lowerText)

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
            // imgTest.src = "https://openaccess-cdn.clevelandart.org/1922.1133/1922.1133_web.jpg"
        } else if (j === focus - 1 || j === focus + 1) {
            imgTest.onload = () => {
                ctx.drawImage(imgTest,
                    250, 100, (width * 0.1) - 3, height,
                    x, 0, (width * 0.1) - 4, height);
                x += (width * 0.1);
            }
            imgTest.src = photos[j].url;
            // imgTest.src = "https://openaccess-cdn.clevelandart.org/1922.1133/1922.1133_web.jpg"
        } else if (j === focus - 2 || j === focus + 2) {
            imgTest.onload = () => {
                ctx.drawImage(imgTest,
                   250, 100, (width * 0.07) - 3, height,
                    x, 0, (width * 0.07) - 4, height)
                x += (width * 0.07);
            }
            imgTest.src = photos[j].url;
            // imgTest.src = "https://openaccess-cdn.clevelandart.org/1922.1133/1922.1133_web.jpg"
        } else {
            imgTest.onload = () => {
                ctx.drawImage(imgTest,
                    300, 150, (width * 0.0189) - 3, height,
                    x, 0, (width * 0.0189) - 4, height);
                x += (width * 0.0189);
            }
            imgTest.src = photos[j].url;
            // imgTest.src = "https://openaccess-cdn.clevelandart.org/1922.1133/1922.1133_web.jpg"
        }
    }
}

let clicked = false



display.addEventListener("click", (e) => {
    // console.log(e.target, "target");
    let x = mousePos(createCanvas.node(), e)
    let zone = width / imgNum
    let focus;
    for (let i = 0; i < imgNum; i++) {
        if (x > (i * zone) && i < ((i + 1) * zone)) {
            focus = i;
        }
    }
    // console.log(focus)

    redraw(focus)
    clicked = true;

})

display.addEventListener("mouseout", (e) => {
    if (clicked){
        setTimeout(render, 500)
        // render()
        clicked = false;
    }
})


