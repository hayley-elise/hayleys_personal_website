// -----------------------------------------
// global constants

// API endpoints
const q = ""                                                // search phrase/word
const limit = 8                                             // number of search result objects to return
const offset = 0                                            // starting position of results
const rating = "g"                                          // content rating
const lang = "en"                                           // default language
const api_key = "z9qEJKCAcrrMCA7q77qHJXLDkv111Kra"          // API key
// search
const apiUrl = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}`.toLowerCase()

// form
const form_Element = document.getElementById("Form-Tag")
const searchLabel_Element = document.getElementById("Search-Label")
const searchBar_Element = document.getElementById("Search-Bar")
const searchButton_Element = document.getElementById("Search-Button")

// results div
const resultsDiv_Element = document.getElementById("results-Div")

// -----------------------------------------
// results logic

const getResults = form_Element.addEventListener("submit", async (API_results) => {
    API_results.preventDefault()

    let response = await fetch(apiUrl)
    let responseData = await response.json()

    displayResults(responseData)
})

// -----------------------------------------
// display logic

function displayResults(responseData) {
    responseData.forEach(resultsDiv_Element => {
        imgURL = responseData.images.fixed_height.url
        resultsDiv_Element.innerHTML +=  `
        <img src="${imgURL}" alt="Result GIF" /> 
    `
    }) 
}

// -----------------------------------------
// search form submit logic

form_Element.addEventListener("submit", (submission) => {
    
})