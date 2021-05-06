import { setSearchFocus } from "./searchBar.js"; 

// Import dataFunction
import { getSearchTerm, retrieveSearchResults } from "./dataFunctions.js"; 

// Import searchResults
import { deleteSearchResults , buildSearchResults, clearStatsLine, setStatsLine } from "./searchResults.js";

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        initApp(); 
    }
})

const initApp = () => {
    setSearchFocus(); 

    // 3 listener clear text
    const form = document.getElementById("searchBar"); 
    
    form.addEventListener("submit", submitTheSearch); 
}

// Procedural "workflow" function and active search

const submitTheSearch = (event) => {
    event.preventDefault(); 
    // delete search result
    processTheSearch(); 
    setSearchFocus(); 
}

// 2 =>   ============ searchBar.js

// API / Process

const processTheSearch = async () => {
    clearStatsLine(); 
    const searchTerm = getSearchTerm(); 
    if(searchTerm === "") return; 
    const resultArray = await retrieveSearchResults(searchTerm); 
    if(resultArray.length) buildSearchResults(resultArray); 
    setStatsLine(resultArray.length); 
}; 

// 3 => ============ dataFunction.js
