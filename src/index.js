import * as TEST from './scripts/testFetch.js';
import Photo from './scripts/photo.js';
import * as d3 from 'd3';
import { async } from 'regenerator-runtime';



let query = "";

const savedPhotos = [];
let currentSearch = [];
let view = [];
let viewName = 'dress';
let clickedPhoto = null;
const searchHistory = {};
let open = false;

const getImgNum = (photos) => (Object.keys(photos).length);

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
        const saveCheck = document.createElement('input');
        saveCheck.type = 'checkbox';
        saveCheck.addEventListener("change", checkboxHandler)

        saveCheck.className = 'save-checkbox';

        const saveLabel = document.createElement('label');
        saveLabel.textContent = 'saved';
        saveLabel.htmlFor = 'save-checkbox';
        if (savedPhotos.includes(obj[i])) {
            saveCheck.checked = true;
        }
        saveLabel.appendChild(saveCheck)
        const info = document.createElement('div');
        info.className = "img-info"
        info.appendChild(desc);
        info.appendChild(source);
        info.appendChild(date);
        info.appendChild(saveLabel);
        newElement.appendChild(img);
        newElement.appendChild(info);
        display.appendChild(newElement);
    }
    view = obj;
}

const checkboxHandler = (e) => {
    if (e.target.checked) {
        savedPhotos.push(clickedPhoto)
    } else {
        const idx = savedPhotos.indexOf(clickedPhoto)
        savedPhotos.splice(idx, 1);
    }
};

(Promise.all([TEST.harvard("dress"), TEST.cleveland("dress"), TEST.chicago("dress")]).then((values) => {
    // shuffle will take place here
    const photos =createPhotos(values.flat())
    currentSearch = photos;
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

    if (e.target.id === "search-toggle") {
        // if (searchToggle.checked ) return;
        clickModal.classList.add('hidden');
        open = false;

        title.innerHTML = viewName;
        lowerText.innerHTML = `Depictions of "${viewName}" in art from Museum Open APIs.`;

        savedToggle.checked = false;
        searchToggle.checked = true;

        while (display.firstChild) {
            display.removeChild(display.firstChild);
        }

        render(currentSearch);

    } else if (e.target.id === "saved-toggle") {

        clickModal.classList.add('hidden');
        open = false;

        if (savedPhotos.length === 0) {
            savedToggle.checked = true;
            searchToggle.checked = false;
            title.innerHTML = "saved photos";
            lowerText.innerHTML = `Depictions of "saved photos" in art from Museum Open APIs.`;

            while (display.firstChild) {
                display.removeChild(display.firstChild);
            }
            
            const newElement = document.createElement('div');
            newElement.className = "error-card"
            const message = document.createElement('p');
            message.innerHTML = "nothing saved yet!";

            const icon = document.createElement('div');
            icon.className = "bi bi-folder-x";
            
            newElement.appendChild(icon);
            newElement.appendChild(message);
            display.appendChild(newElement);
        } else {
            title.innerHTML = "saved photos";
            lowerText.innerHTML = `Depictions of "saved photos" in art from Museum Open APIs.`;
            savedToggle.checked = true;
            searchToggle.checked = false;
            view = savedPhotos;

            while (display.firstChild) {
                display.removeChild(display.firstChild);
            }

            render(savedPhotos)

        }

    }
})

clickModal.addEventListener('click', e => {
    const target = e.target
    if (target.id === "close-modal" || target.closest("#close-modal")) {
        const openCard = document.querySelector('#clicked')
        openCard.removeAttribute('id');
        clickModal.removeAttribute('id');
        clickModal.classList.add('hidden');
        open = false;
    } 
})



display.addEventListener('click',  e => {

    if (e.target.tagName !== 'IMG') return;

    const card = e.target.parentNode;

    if (!open) {
        card.id = 'clicked';
        clickedPhoto = view[card.dataset.id]
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


const historyContainer = document.getElementById('history-container');


historyContainer.addEventListener("click", e => {
    const query = e.target.textContent.trim()

    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }

    render(searchHistory[query])
    currentSearch = searchHistory[query]
    viewName = query;
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

        Promise.all(fetchArr)
            .then((values) => {
               const photos = createPhotos(values.flat());
               return photos
            }).then((photos)=>{
                viewName = query;
                title.innerHTML = query;
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
    input.map(data => photos.push(new Photo(data)))
    return photos
}


