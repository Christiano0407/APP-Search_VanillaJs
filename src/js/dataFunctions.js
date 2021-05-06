export const getSearchTerm = () => {
    const rawSearchTerm = document.getElementById("search").value.trim(); 
    const regex = /[ ]{2,}/gi; //Buscar varios espacios/ gi = global.
    const searchTerm = rawSearchTerm.replaceAll(regex, " "); 
    return searchTerm; 
}

export const retrieveSearchResults = async (searchTerm) => {
    const wikiSearchString = getWikiSearchString(searchTerm); 
}

const getWikiSearchString = (searchTerm) => {
    const maxChars = getMaxChars(); // Máximo de caracteres
}

const getMaxChars = () => {
    const width = window.innerWidth || document.body.clientWidth; 
    let maxChars; 
    if(width < 414) maxChars = 65; 
    if(width >= 414 && width < 1400) maxChars = 100; 
    if(width >= 1400) maxChars  =  130; 
    return maxChars; 
}