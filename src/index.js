import * as TEST from './scripts/testFetch.js';
import Photo from './scripts/photo.js';
import * as d3 from 'd3';
import { async } from 'regenerator-runtime';



let query = "";

const pinnedPhotos = {}


const getImgNum = (photos) => (Object.keys(photos).length);

(Promise.all([TEST.harvard("dress"), TEST.cleveland("dress"), TEST.chicago("dress")]).then((values) => {
    // shuffle will take place here
    console.log("in here")
    const photos =createPhotos(values.flat())
    console.log(photos, "initial photos")
    render(photos)
}));

const display = document.querySelector('#img-container')
let open = false;
display.addEventListener('click',  e => {

    if (e.target.tagName !== 'IMG') return;

    const parentDiv = e.target.parentNode;

    if (!open) {
        parentDiv.id = 'clicked';
        open = true;
    } else if (open && parentDiv.id === "clicked") {
        parentDiv.removeAttribute('id');
        open = false;
    }
        
});


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

const render = (obj) => {
    // let lowerText = document.getElementById("below-display-text")
    // lowerText.innerHTML = "Once you move your mouse away from the photo array, <br> it will reset and the description will disappear."
    const imgNum = getImgNum(obj)

    for (let i = 0; i < imgNum; i++) {
        const newElement = document.createElement('div');
        newElement.dataset.id = i;
        newElement.className = "img-card"
        const img = document.createElement('img');
        img.src = obj[i].url;
        const desc = document.createElement('p');
        desc.innerHTML = obj[i].description;
        const source = document.createElement('p');
        source.innerHTML = obj[i].source;
        const date = document.createElement('p');
        date.innerHTML = obj[i].date;
        const info = document.createElement('div');
        info.className = "img-info"
        info.appendChild(desc);
        info.appendChild(source);
        info.appendChild(date);
        newElement.appendChild(img);
        newElement.appendChild(info);
        display.appendChild(newElement);
    }
}
const historyContainer = document.getElementById('history-container');
const searchHistory = {
    "boots": [TEST.harvard("boots"), TEST.cleveland("boots"), TEST.chicago("boots")],
    "suit": [TEST.harvard("suit"), TEST.cleveland("suit"), TEST.chicago("suit")],
    "dress": [TEST.harvard("dress"), TEST.cleveland("dress"), TEST.chicago("dress")]
};

historyContainer.addEventListener("click", e => {
    const query = e.target.textContent.trim()
    console.log(searchHistory[query]);
})
const attachHistory = (query, fetchArr) => {
    searchHistory[query] = fetchArr
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    svg.setAttribute("fill", "rgb(67, 66, 66)");
    svg.setAttribute("class", "bi bi-search");
    svg.setAttribute("viewBox", "0 0 16 16");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0");

    svg.appendChild(path);

    const searchDiv = document.createElement("div")
    searchDiv.className = "search-link"
    searchDiv.innerHTML = query;
    searchDiv.appendChild(svg);
    historyContainer.appendChild(searchDiv)
}

// form elements
const searchBar = document.querySelector('#query-input');
const title = document.querySelector('#query-title');
searchBar.placeholder = "search and select from museum databases..."
const harvardCheck = document.getElementById('harvard-check');
const harvardSelect = document.getElementById('harvard-select');
const clevelandCheck = document.getElementById('cleveland-check');
const clevelandSelect = document.getElementById('cleveland-select')
const chicagoCheck = document.getElementById('chicago-check');
const chicagoSelect = document.getElementById('chicago-select')
// 
const aboveText = document.getElementById("above-display-text")
const lowerText = document.getElementById("below-display-text")


searchBar.addEventListener("input", (e) => {
    query = e.target.value;
});


const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (query !== '') {
        title.innerHTML = "loading..."

        const fetchArr = []

        if (harvardCheck.checked) fetchArr.push(TEST.harvard(query, harvardSelect.value));
        if (clevelandCheck.checked) fetchArr.push(TEST.cleveland(query, clevelandSelect.value))
        if (chicagoCheck.checked) fetchArr.push(TEST.chicago(query, chicagoSelect.value))

        while (display.firstChild) {
            display.removeChild(display.firstChild);
        }

        console.log(fetchArr, "fetchArr")

        Promise.all(fetchArr)
            .then((values) => {
                console.log(values, "values")
               const photos = createPhotos(values.flat());
               return photos
            }).then((photos)=>{
                title.innerHTML = query;
                console.log(title, "title")
                console.log(photos, "photos")
                render(photos);
                attachHistory(query, fetchArr)
            }).then(()=> {
                lowerText.innerHTML = `Depictions of "${query}" in art from Museum Open APIs.`;
                searchBar.value = '';
            })
    } else {
        searchBar.placeholder = "please type a query first"
    }
});

function createPhotos(input) {
    const photos = {}
    for (let i = 0; i < input.length; i++) {
        photos[i] = new Photo(input[i])
    }
    return photos
}


