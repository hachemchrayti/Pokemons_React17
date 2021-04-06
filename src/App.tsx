import React,{FunctionComponent,useEffect,useState} from 'react';
import { Link, BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-details';
import PokemonList from './pages/pokemon-list';
import PageNotFound from './pages/page-not-found'
import PokemonEdit from './pages/pokemon-edit'
import PokemonAdd from './pages/pokemon-add'
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';
const App: FunctionComponent= () => {
// const[name]=useState<String>('hachem')
// const[pokemons,setPokemons]=useState<Pokemon[]>([])


// useEffect(()=>{
//     setPokemons(POKEMONS)
// },[])


 return (
     <>
  {/* <h1>Hello, {name} !</h1>
  <h3>{pokemons.length}</h3> */}
  {/* <h3>{JSON.stringify(pokemons)}</h3> */}

{/* <PokemonList></PokemonList> */}
  <Router>
      <div>
          {/* La barre de navigation */}
          <nav>
              <div className='nav-wrapper teal'>
                  <Link to='/' className='brand-logo center'>Pokédéx</Link>
              </div>
          </nav>
          {/* le systèm de gestion des routes de  notre application*/ }
            <Switch>
                <PrivateRoute exact path='/' component={PokemonList} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path='/pokemons' component={PokemonList} />
                <PrivateRoute exact path='/pokemons/add' component={PokemonAdd} />
                <PrivateRoute exact path='/pokemons/edit/:id' component={PokemonEdit} />
                <PrivateRoute exact path='/pokemons/:id' component={PokemonsDetail} />
                <PrivateRoute component={PageNotFound} />
            </Switch>


      </div>
  </Router>
  </>
 )
}

  
export default App;