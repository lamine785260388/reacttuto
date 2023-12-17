import React, {FunctionComponent} from 'react';

import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';

import PokemonsDetail from './pages/pokemon-detail';
import PokemonsAjout from './pages/pokemon-ajout';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

  
const App: FunctionComponent = () => {


    
 return (
  <Router>
    <div>
    {/* la barre de navigation commun à toutees les pages */}
    <nav>
      <div className='nav-wrapper teal'>
        <Link to="/" className='brand-logo center'>Pokédex</Link>
      </div>
    </nav>
    {/* Le systéme de gestion es routes de notre application*/}
    <Switch>

   
    <PrivateRoute exact path='/' component={PokemonList} />
    <PrivateRoute exact path='/pokemons' component={PokemonList} />
    <PrivateRoute path='/pokemons/ajout' component={PokemonsAjout} />
    <PrivateRoute path='/pokemons/edit/:id' component={PokemonEdit} />
    <Route path='/login' component={Login} />
    <PrivateRoute path='/pokemons/:id' component={PokemonsDetail} />
    
   
    <Route component={PageNotFound} />
    </Switch>
    </div>

  </Router>

 )
}
  
export default App;