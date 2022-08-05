import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import Resource from './components/Resource';

function App() {

  return (

    <div className="App">
      <Header/> 
      <div className='content'>
        <Routes>
          <Route exact path ='/resource' element={<Home/>}/>
          <Route path='/resource/:id' element={<Resource/>}/> 
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
