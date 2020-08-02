const ApiConfig = {
    KEY: "d22a29fb0c9c439eb7fe8d28b2c54aa7",
    BASE_URL: "https://api.spoonacular.com/"
};

export function fetchTrending() { 
    return fetch('https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=d22a29fb0c9c439eb7fe8d28b2c54aa7')
      .then(response => response.json())    
}

export function fetchRecipeList(keyWord) { 
    return fetch(`${ApiConfig.BASE_URL}/recipes/search?query=${keyWord}&number=6&apiKey=${ApiConfig.KEY}`)
      .then(response => response.json())    
}