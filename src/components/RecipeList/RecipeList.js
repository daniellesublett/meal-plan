import React from 'react';
import "./RecipeList.css";

const recipeList = ({list}) => {
    const baseUrl = "https://spoonacular.com/recipeImages/";
    return (
        <div className="list-container">
            <ul>  
                {list.map(({title, image}) => <li>{title}<img src = {baseUrl + image}/></li>)}
            </ul>
              
        </div>
    );
};

export default recipeList;