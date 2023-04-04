
const harvardUrl = "https://api.harvardartmuseums.org/object?size=10&apikey=12403398-3c09-42ff-af07-f434bfd000a1"

// https://api.harvardartmuseums.org/object?apikey=YOUR_API_KEY&hasimage=true&permissionlevel=0

export const harvard = async (e) => {

    let res = await fetch(harvardUrl, {
        headers: { "Accept": "application/json" }
    })

    // console.log(res, "response")
    let data = await res.json()
    // console.log(data, "data")
    // console.log(data.records[0].primaryimageurl)
    // console.log(data.response[0])
    for (let i = 0; i < data.records.length; i++) {

        if (data.records[i].primaryimageurl) {
            let newImg = document.createElement("img")
            newImg.src = data.records[i].primaryimageurl
            document.querySelector("#img-container").appendChild(newImg)
        }
    }

}

// things to group by: color date 
//  data.records[0].colors[0].hue
// https://github.com/harvardartmuseums/api-docs

const clevelandURL = "https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=10"

export const cleveland = async (e) => {

    let res = await fetch(clevelandURL, {
        headers: { "Accept": "application/json" }
    })

    console.log(res, "response")
    let data = await res.json()
    console.log(data, "data")
    console.log(data.data[0].images.web.url)
    // console.log(data.response[0])
    for (let i = 0; i < data.data.length; i++) {

        if (data.data[i].images.web.url) {
            let newImg = document.createElement("img")
            newImg.src = data.data[i].images.web.url
            document.querySelector("#img-container").appendChild(newImg)
        }
    }

}
// no color attribute but had date in a aproxomate format


const chicagoURL = "https://api.artic.edu/api/v1/artworks/search?q=cats/manifest.json"

const chicagoURL2 = "https://api.artic.edu/api/v1/artworks/656"

export const chicago2 = async (url) => {

    let res = await fetch(url, {
        headers: { "Accept": "application/json" }
    })

    // console.log(res, "chicago2 response")
    let data = await res.json()
    // console.log(data, "chicago2 data")
    let linkStr = `${data.config.iiif_url}/${data.data.image_id}/full/843,/0/default.jpg`
    // console.log(linkStr, "link")
    return linkStr
}

// ^^to get each img link

export const chicago = async (e) => {

    let res = await fetch(chicagoURL, {
        headers: { "Accept": "application/json" }
    })

    // console.log(res, "response")
    let data = await res.json()
    // console.log(data, "data")
  
    // console.log(link)
    for (let i = 0; i < data.data.length; i++) {

     
            const link = await data.data[i].api_link
            let newImg = document.createElement("img")
            let imgURL = await chicago2(link)
            newImg.src = imgURL
        document.querySelector("#img-container").appendChild(newImg)
        
    }
}

// https://api.artic.edu/docs/#iiif-image-api


