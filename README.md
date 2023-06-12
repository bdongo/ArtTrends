# Art Fashion Trends
[Art and Trends](https://bdongo.github.io/fashiontrends/), is a image data visualization project. Taking on the challenge of dealing with multiple data API sources. The main functionality of the site is to have a light front-end site that abstracts the images of the certain topic and can display a large array of pictures where the user can expand and inspect by clicking. 

__Technologies, Libraries, APIs:__

This project uses [Harvard Art Museums API](https://github.com/harvardartmuseums/api-docs), [The Cleveland Museum of Art API](https://openaccess-api.clevelandart.org/), [Art Institute of Chicago API](https://api.artic.edu/docs/#introduction) to fetch, manipulate and compile image data.


The challenge was to study the fetch request formatting and returned API response of each API. Each fetch is tailored to return the same infromation from different keys of the API response. With the creation of a new Photo object class. These are made into new Photo objects to be stored client side in a cache to be called any time to render the display.

```javascript
function Photo(input){
    this.date = input.date 
    this.url = input.url
    this.source = input.source
    this.description = input.description
}
```
Example of the data scraping from one fetch response.

```javascript
export const harvard = async (query, num = 5) => {
    let output = [];

    let res = await fetch(`https://api.harvardartmuseums.org/image?q=${query}&size=${num}&apikey=12403398-3c09-42ff-af07-f434bfd000a1&hasimage=true&permissionlevel=0`, {
        headers: { "Accept": "application/json" }
    })

    if (res.ok) {
        let data = await res.json()
    
        for (let i = 0; i < data.records.length; i++) {
    
            if (data.records[i].baseimageurl) {
                let dateCheck = parseInt(data.records[i].date?.split("-")[0])
                if (dateCheck === 0) {
                    dateCheck = 1
                }
    
                let sourceInfo;
                if (data.records[i].copyright) {
                    sourceInfo = `Harvard Art Museums API/ ${data.records[i].copyright}`
                } else {
                    sourceInfo = "Harvard Art Museums API"
                }
                let desc;
                if (data.records[i].description) {
                    desc = data.records[i].description;
                } else {
                    desc = 1;
                }
    
                output.push({ 
                    url: data.records[i].baseimageurl,
                    date: dateCheck,
                    source: sourceInfo,
                    description: desc
                })
            }
        }
    
        return output;
    }
}
```

This simple line allows me to wait and unpack all promise reponses given by the fetches.

```javascript
(Promise.all([TEST.cleveland(), TEST.chicago(), TEST.harvard()]).then((values) => {
    createPhotos(values.flat())
    render()
}));
```

To keep my website display layout dynamic sized, all display elements are sized to the view size and use it as a reference in creating new elements. There is an event listener for resize to render the page once the window has been changed.

```javascript
addEventListener("resize", (e) => {
    width = window.innerWidth * 0.67;
    createCanvas
        .attr('width', width);

    render();
});
```


__Initial Project Design:__

![wireframe image](assets/wireframe.png)
