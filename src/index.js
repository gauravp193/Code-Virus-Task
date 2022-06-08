import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './App';
import Contact from './components/Contact'
import About from './components/About';

ReactDOM.render(
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
    </Router>,
  document.getElementById('root')
);

