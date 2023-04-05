
const harvardUrl = "https://api.harvardartmuseums.org/object?q=dress&size=20&apikey=12403398-3c09-42ff-af07-f434bfd000a1&hasimage=true&permissionlevel=0"

// https://api.harvardartmuseums.org/object?apikey=YOUR_API_KEY&hasimage=true&permissionlevel=0

export const harvard = async (e) => {
    let output = [];

    let res = await fetch(harvardUrl, {
        headers: { "Accept": "application/json" }
    })

    let data = await res.json()

    for (let i = 0; i < data.records.length; i++) {

        if (data.records[i].primaryimageurl) {
            let dateCheck = data.records[i].datebegin
            if (dateCheck === 0) {
                dateCheck = 1
            }
            output.push({ url: data.records[i].primaryimageurl, date: dateCheck })
            // data.records[i].datebegin
        }
    }

    return output;
}

// things to group by: color date 
//  data.records[0].colors[0].hue
// https://github.com/harvardartmuseums/api-docs

const clevelandURL = "https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=10"

export const cleveland = async (e) => {
    let output = [];

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
            let dateCheck = data.data[i].creation_date_earliest
            if (dateCheck === 0) {
                dateCheck = 1
            }
            output.push({ url: data.data[i].images.web.url, date: dateCheck })
        }
    }

    return output;
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
    let dateInfo =  data.data.date_start
    let linkStr = `${data.config.iiif_url}/${data.data.image_id}/full/843,/0/default.jpg`
    // console.log(linkStr, "link")
    return {url: linkStr, date: dateInfo}
}

// ^^to get each img link

export const chicago = async (e) => {
    let output = []

    let res = await fetch(chicagoURL, {
        headers: { "Accept": "application/json" }
    })

    // console.log(res, "response")
    let data = await res.json()
    // console.log(data, "data")
  
    // console.log(link)
    for (let i = 0; i < data.data.length; i++) {

        const link = await data.data[i].api_link
            
        let infoObj = await chicago2(link)
        output.push(infoObj);
    }

    return output
}

// https://api.artic.edu/docs/#iiif-image-api


