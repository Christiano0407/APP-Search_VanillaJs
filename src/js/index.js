import { setSearchFocus } from "./searchBar.js"; 
import { getSearchTerm } from ".dataFunctions.js"; 

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
    // clear the stats line
    const searchTerm = getSearchTerm(); 
    if(searchTerm === "") return; 
    const resultArray = await retrieveSearchResults(searchTerm); 
}

// 3 => ============ dataFunction.js
