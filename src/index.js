import * as TEST from './scripts/testFetch.js';
import Photo from './scripts/photo.js';
import * as d3 from 'd3';
import { async } from 'regenerator-runtime';



let query = "";

const pinnedPhotos = {}

const photos = {};
const getImgNum = () => (Object.keys(photos).length);

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

const render = () => {
    let lowerText = document.getElementById("below-display-text")
    lowerText.innerHTML = "Once you move your mouse away from the photo array, <br> it will reset and the description will disappear."
    const imgNum = getImgNum()
    for (let i = 0; i < imgNum; i++) {
        const newElement = document.createElement('div');
        newElement.className = "img-card"
        const img = document.createElement('img');
        img.src = photos[i].url;
        newElement.appendChild(img)
        display.appendChild(newElement)
    }
}

const searchBar = document.querySelector('#query-input');
const title = document.querySelector('#query-title');
searchBar.placeholder = "type to search the 3 databases"


searchBar.addEventListener("input", (e) => {
    query = e.target.value;
});

console.log(query, "query");

const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (query !== '') {
        title.innerHTML = "loading..."
    
        Promise.all([TEST.cleveland(query), TEST.chicago(query), TEST.harvard(query)]).then((values) => {
            title.innerHTML = query
            searchBar.value = '';
            createPhotos(values.flat())
            render()
        })
    } else {
        searchBar.placeholder = "please type a query first"
    }
});

function createPhotos(input) {
    for (let i = 0; i < input.length; i++) {
        photos[i] = new Photo(input[i])
    }
}


