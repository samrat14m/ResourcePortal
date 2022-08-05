import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AddItem from './components/AddItem';
import {Routes,Route} from 'react-router-dom';
import Resource from './components/Resource';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {

  return (

    <div className="App">
      <Header/>
            <div className='content'> 
      <Routes>
          <Route path='/' element={<Login/>} /> 
          <Route path ='/resource' element={<Home/>}/>
          <Route path='/resource/:id' element={<Resource/>}/>
          <Route path='resource/:id/add' element={<AddItem/>}/>
      </Routes> 
            </div> 
      <Footer/>         
    </div>
  );
}

export default App;
