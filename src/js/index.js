import { setSearchFocus, showClearTextButton, clearSearchText, clearPushListener } from "./searchBar.js"; 

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

  const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);

  const clear = document.getElementById("clear");
  clear.addEventListener("click", clearSearchText);
  clear.addEventListener("keydown", clearPushListener);
  
  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

// Procedural "workflow" function and active search

const submitTheSearch = (event) => {
    event.preventDefault(); 
    deleteSearchResults(); 
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
