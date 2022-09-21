import React, { useState } from 'react';
import './App.css';
//import { CreatePost } from './Pages/Login/CreatePost';
import { Route ,Routes, BrowserRouter} from 'react-router-dom';


// Importing pages 
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import { NotFound } from './Pages/NotFound/noftfound';
import Index from './Pages/Index/Index';
import Profile from './Pages/Profile/Profile';
import EditUser from './components/EditUser';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';

//

function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes >
      <Route path='/login' element={ <Login/>} />
      <Route path='/register' element={ <Register />} />
      <Route path='/index' element={ <Index />} />
      <Route path='/profile' element={ <Profile />} />
      <Route path='*' element={ <NotFound />} />
      <Route path='/edit/:id' element={ <EditUser /> } />
      <Route path='/Dashboard' element={ <Dashboard /> } />
      <Route path='/Preferences' element={ <Preferences /> } />
    </Routes>
    </BrowserRouter>
    </div>
    );
    
  }
  
  export default App;