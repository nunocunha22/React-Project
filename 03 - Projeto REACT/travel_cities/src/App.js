import { Link, Outlet } from 'react-router-dom';
import {Provider} from 'react-redux'
import './App.css';
import { store } from './store';
import { useState } from 'react';
import CitiesDashboard from './components/CitiesDashboard';


function App() {

  

    return (
      
    <div className="App">
    

     <Provider store={store}> 
        <CitiesDashboard></CitiesDashboard>
      {/*<Link to='/citiesDashboard'></Link>
       <Link to='/citiesList'></Link>
       <Link to='/cities'></Link>*/}
     </Provider>
     
     <Outlet />

    </div>
  );
  
}


export default App;

