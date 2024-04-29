import React from 'react' ; 
import  {useEffect , useState} from 'react' ; 
import Recipe from './Recipe'; 

import './App.css' ; 



const  App = () =>  { 
  const [recipes , SetRecipes]= useState([]) ;  
  const [search ,SetSearch] = useState("") ;  
  const APP_ID = '5241c805';   
  const APP_KEY = 'b44f450ba8934eb947ecab8d21df6958' ;  
  
 
  const [ query ,  setQuery] = useState("chicken ") ; 

  useEffect (()=> {  
    getRecipes() ;  

  }, query) 

  const getRecipes = async () => {  
    const response = await fetch 
    (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`) ;  
    const data = await response.json() ; 
    SetRecipes(data.hits) ; 

    console.log(data)  ;  

  } 

  const updateSearch = e => { 
    SetSearch(e.target.value); 
  }; 
  const getSearch = e => { 
    e.preventDefault(); 
    setQuery(search); 
    SetSearch(""); 
  } 


  return (
    <div className="App">
         <form className='search-form' onSubmit={getSearch}> 
          <input className='search-bar' type='text' value={search} onChange={updateSearch} />
             <button className='search-button' type='submit' > Search </button>             
             
          </form>   

          <div className="recipes"> 
             <Recipe/>
  
      
      </div>
              
    </div>
  );
}

export default App;
