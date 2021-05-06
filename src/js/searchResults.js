
export const buildSearchResults = (resultArray) => {
    resultArray.forEach((result) => {
        const resultItem = createResultItem(result); 
        const resultContents = document.createElement("div"); 
        resultContents.classList.add("resultContents"); 
        if(result.img) {
            const resultImage = createResultImage(result); 
            resultContents.append(resultImage); 
        }
        const resultText = createResultText(result); 
        resultContents.append(resultText); 
        resultItem.append(resultContents); 
        const searchResults = document.getElementById("searchResults"); 
        searchResults.append(resultItem); 
    })
}

const createResultItem = (result) => {
    const resultImage = document.createElement("div"); 
    resultImage.classList.add("resultImage"); 
    const img = document.createElement("img"); 
    img.src = result.img; 
    img.alt = result.title; 
    resultImage.append(img); 
    return resultImage; 
}

