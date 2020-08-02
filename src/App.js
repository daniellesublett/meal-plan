import React, { Component } from 'react';
import {fetchTrending} from './fetch';
import {fetchRecipeList} from './fetch';
import RecipeList from './components/RecipeList/RecipeList';
class App extends Component{
  state = {
    trendingRecipes:[],
    userInput: '',
    suggestionsList: []
  }

  componentDidMount() {
    fetchTrending().then(data => {
      return this.setState({ trendingRecipes: data.results });
    }); 
  } 

  inputChangedHandler = ( event ) => {
    this.setState( { userInput: event.target.value } );
  } 

  displayRecipeList(){
    let recipeList;
    const baseUrl = "https://spoonacular.com/recipeImages/";
    if(this.state.userInput === ""){
      recipeList = this.state.trendingRecipes.map(({title, image}) => <li>{title}<img src = {baseUrl + image}/></li>)
    } else {
      recipeList = this.state.suggestionsList.map(({title, image}) => <li>{title}<img src = {baseUrl + image}/></li>);
    }
    return recipeList;

  }

  componentDidUpdate(_, prevState) {
    if (prevState.userInput !== this.state.userInput){
      const { userInput: keyWord} = this.state;
      fetchRecipeList(keyWord).then(data => this.setState({ suggestionsList: data.results || []}));
    } 
  }



  render () {
    const {trendingRecipes, suggestionsList, userInput} = this.state;
    const baseUrl = "https://spoonacular.com/recipeImages/";
    return(
      <div className = "wrapper-div">
        <div className="search-field">
          <input 
            type="text"
            onChange={this.inputChangedHandler}
            value={userInput} />                            
        </div>     
        <RecipeList 
            list={userInput == "" ? trendingRecipes : suggestionsList}
          />        

        <ul>
          {trendingRecipes.map(({title, image}) => <li>
            {title}
            <img src = {baseUrl + image}/>
            </li>)}
        </ul>
        <div>
          {this.state.suggestionsList.map(({title, image}) => 
          <li>
            {title}
            <img src = {baseUrl + image}/>
          </li>)}
        </div>


      </div>
    )
  }

}

export default App;
