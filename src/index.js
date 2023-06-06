import * as TEST from './scripts/testFetch.js';
import Photo from './scripts/photo.js';
import * as d3 from 'd3';
import { async } from 'regenerator-runtime';



let query = "";

const savedPhotos = [];
let currentSearch = [];
let clickedPhoto = null;


const getImgNum = (photos) => (Object.keys(photos).length);

(Promise.all([TEST.harvard("dress"), TEST.cleveland("dress"), TEST.chicago("dress")]).then((values) => {
    // shuffle will take place here
    console.log("in here")
    const photos =createPhotos(values.flat())
    currentSearch = photos;
    console.log(photos, "initial photos")
    render(photos)
    searchHistory["dress"] = photos;
}));

(Promise.all([TEST.harvard("boots",10), TEST.cleveland("boots",10), TEST.chicago("boots",10)]).then((values) => {
    const photos = createPhotos(values.flat())
    searchHistory["boots"] = photos;
}));

(Promise.all([TEST.harvard("suit",7), TEST.cleveland("suit",7), TEST.chicago("suit",7)]).then((values) => {
    const photos = createPhotos(values.flat())
    searchHistory["suit"] = photos;
}));

const viewToggle = document.querySelector('#view-toggle');
const searchToggle = document.querySelector('#search-toggle');
const savedToggle = document.querySelector('#saved-toggle');
const display = document.querySelector('#img-container')
const clickModal = document.querySelector('.click-modal');

viewToggle.addEventListener("click", e => {
    console.log(e.target)

    if (e.target.id === "search-toggle") {
        // if (searchToggle.checked ) return;

        clickModal.classList.add('hidden');

        savedToggle.checked = false;
        searchToggle.checked = true;

        while (display.firstChild) {
            display.removeChild(display.firstChild);
        }

        render(currentSearch);

    } else if (e.target.id === "saved-toggle") {

        clickModal.classList.add('hidden');

        if (savedPhotos.length === 0) {
            savedToggle.checked = false;
            console.log("error")
        } else {
            savedToggle.checked = true;
            searchToggle.checked = false;

            while (display.firstChild) {
                display.removeChild(display.firstChild);
            }

            render(savedPhotos)

        }

    }
})

clickModal.addEventListener('click', e => {
    const target = e.target
    console.log(target)
    if (target.id === "close-modal" || target.closest("#close-modal")) {
        console.log("closemodal")
        const openCard = document.querySelector('#clicked')
        console.log(openCard, "opencard")
        openCard.removeAttribute('id');
        clickModal.removeAttribute('id');
        clickModal.classList.add('hidden');
        open = false;
    } else if (target.id === "add-button" || target.closest("#add-button")) {
        savedPhotos.push(clickedPhoto)
       console.log(savedPhotos)
       clickedPhoto = null;
    }
})
let open = false;
display.addEventListener('click',  e => {

    if (e.target.tagName !== 'IMG') return;

    const card = e.target.parentNode;
    console.log(card, "card")

    if (!open) {
        card.id = 'clicked';
        clickedPhoto = currentSearch[card.dataset.id]
        clickModal.id = "open";
        clickModal.classList.remove('hidden');
        open = true;
    } else if (open && card.id === "clicked") {
        card.removeAttribute('id');
        clickModal.removeAttribute('id');
        clickModal.classList.add('hidden');
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
const searchHistory = {};

historyContainer.addEventListener("click", e => {
    const query = e.target.textContent.trim()
    console.log(searchHistory[query]);

    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }

    render(searchHistory[query])
    title.innerHTML = query;
    lowerText.innerHTML = `Depictions of "${query}" in art from Museum Open APIs.`;
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
                currentSearch = photos
                render(photos);
                attachHistory(query, photos)
            }).then(()=> {
                lowerText.innerHTML = `Depictions of "${query}" in art from Museum Open APIs.`;
                searchBar.value = '';
            })
    } else {
        searchBar.placeholder = "please type a query first"
    }
});

function createPhotos(input) {
    const photos = []
    // for (let i = 0; i < input.length; i++) {
    //     photos[i] = new Photo(input[i])
    // }
    input.map(data => photos.push(new Photo(data)))
    return photos
}


