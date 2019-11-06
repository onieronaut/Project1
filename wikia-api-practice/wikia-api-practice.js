// These are the page IDs of the wiki, using the API in your browser you can see I just took the first result in a search of Wookiepedia
// https://starwars.fandom.com/api/v1/Search/List?query=tatooine&limit=25&minArticleQuality=10&batch=1&namespaces=0%2C14

//Using the following link with the corresponding page ID will give you another JSON that you can use to pull the written description of the planet

//https://starwars.fandom.com/api/v1/Articles/AsSimpleJson?id=[INSERT ID HERE]

//So basically you could place this number IDs into our already existing planet array and call them when you're trying to populate the modal
let dagobah = 452956;
let bespin = 453786;
let coruscant = 452675;
let endor = 456136;
let felucia = 465003;
let geonosis = 457990;
let hoth = 451989;
let kamino = 453917;
let kashyyyk = 455688;
let mustafar = 453226;
let naboo = 451978;
let tatooine = 452688;

let planetArray = [dagobah, bespin, coruscant, endor, felucia, geonosis, hoth, kamino, kashyyyk, mustafar, naboo, tatooine]

//Simple click button to perform the API request
$("#search").on("click", function () {

    // Looping through the array of IDs to display each one
    for (let i = 0; i < planetArray.length; i++ ) {

    // This is a proxy to allow us to bypass CORS, only play with the url variable
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://starwars.fandom.com/api/v1/Articles/AsSimpleJson?id=${planetArray[i]}`; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .then(contents => {
            
            //This is where we are console logging the results and parsing them into JSON
            console.log(JSON.parse(contents))
            let data = JSON.parse(contents);

            //This specifically is where the planet description lies
            console.log(data.sections[0].content[0].text)

        })
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }

})




