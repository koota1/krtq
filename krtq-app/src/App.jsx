import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.jsx';
import Landing from './components/Landing/Landing.jsx';



function App() {
  return (
    <div className='App'>
      <Router>
        <div className='nav-bar'>
          <NavLink className='nav-bar_link' exact activeClassName="active" to="/">Landing</NavLink>
          <NavLink className='nav-bar_link' activeClassName="active" to="/home">Home</NavLink>
        </div>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
