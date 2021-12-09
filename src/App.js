import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App(){
    return(
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    );
}

export default App;
