import React, {FunctionComponent,useState,useEffect} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
import PokemonList from './pages/pokemon-list';
  
const App: FunctionComponent = () => {

const [pokemons,setPokemons]= useState<Pokemon[]>([]);
useEffect(()=>{
  setPokemons(POKEMONS);
},[]);
    
 return (
<PokemonList />
 )
}
  
export default App;