import * as TEST from './scripts/testFetch.js';
import Photo from './scripts/photo.js';
import * as d3 from 'd3';
import { async } from 'regenerator-runtime';



const height = 350;

let query = "dress";

const photos = {};
const getImgNum = () => (Object.keys(photos).length);
let width = window.innerWidth * 0.67;


(Promise.all([TEST.cleveland("dress"), TEST.chicago("dress"), TEST.harvard("dress")]).then((values) => {
    // shuffle will take place here
    createPhotos(values.flat())
    render()
}));

const display = document.querySelector('#img-container')


const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // Handle the changes to the DOM here
            const imgCardCount = document.querySelectorAll('.img-card').length;
            document.documentElement.style.setProperty('--img-card-count', imgCardCount);
        }
    }
});

observer.observe(document, { subtree: true, childList: true });

addEventListener("resize", (e) => {
    width = window.innerWidth * 0.67;
    createCanvas
    .attr('width', width);

    render();
})



const render = () => {
    // const ctx = createCanvas.node().getContext('2d')
    let lowerText = document.getElementById("below-display-text")
    lowerText.innerHTML = "Once you move your mouse away from the photo array, <br> it will reset and the description will disappear."
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const imgNum = getImgNum()
    const cardWidth = width / imgNum
    console.log(cardWidth, "cardWidth")
    for (let i = 0; i < imgNum; i++) {
        const newElement = document.createElement('div');
        // newElement.style.width = `${cardWidth}px`;
        newElement.className = "img-card"
        const img = document.createElement('img');
        img.src = photos[i].url;
        newElement.appendChild(img)
        display.appendChild(newElement)

        // let imgTest = new Image()
        // imgTest.onload = () => {
        //     ctx.drawImage(imgTest,
        //         300, 100, width / imgNum - 3, height,
        //         i * (width / imgNum), 0, width / imgNum - 4, height)
        // }
        // imgTest.src = photos[i].url
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
const searchBar = document.querySelector('#query-input');
const title = document.querySelector('#query-title');
searchBar.placeholder = "type to search the 3 databases"


searchBar.addEventListener("input", (e) => {
    query = e.target.value;
    console.log(query, "query");
});

console.log(query, "query");

const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    searchBar.value = '';

    title.innerHTML = query

    Promise.all([TEST.cleveland(query), TEST.chicago(query), TEST.harvard(query)]).then((values) => {
        createPhotos(values.flat())
        render()
    })
});

function createPhotos(input) {
    for (let i = 0; i < input.length; i++) {
        photos[i] = new Photo(input[i])
    }
}

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


