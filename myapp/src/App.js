// import React, { useState } from 'react';
//import { CreatePost } from './Pages/Login/CreatePost';
import './App.css';
import { Route ,Routes} from 'react-router-dom';
import useToken from './components/App/useToken';


// Importing pages 
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import { NotFound } from './Pages/NotFound/noftfound';
import Index from './Pages/Index/Index';
import Profile from './Pages/Profile/Profile';
import EditUser from './components/EditUser';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Logout from './components/Logout/Logout';

//

function App() {
  
  const { token, setToken, deleteToken } = useToken();

  if(!token)   {
    return(
      <div>
      <Routes >
      <Route path='/login' element={ <Login setToken={setToken}/>} />
      <Route path='/register' element={ <Register />} />
      <Route path='/Preferences' element={ <Login setToken={setToken}/> }  />
      <Route path='/index' element={ <Login setToken={setToken}/>}/>
      <Route path='/profile' element={ <Login setToken={setToken}/>}/>
      <Route path='*' element={ <NotFound setToken={setToken}/>} />
      <Route path='/edit/:id' element={ <Login setToken={setToken}/> }/>
      <Route path='/Dashboard' element={ <Login setToken={setToken}/> }/>
      </Routes>
      </div>)
    }
    else {
    return (
      <div>
      <Routes>
      <Route path='/Logout' element={ <Logout deleteToken={deleteToken}/> } />  
      <Route path='/index' element={ <Index />} />
      <Route path='/profile' element={ <Profile />} />
      <Route path='*' element={ <NotFound />} />
      <Route path='/edit/:id' element={ <EditUser /> } />
      <Route path='/Dashboard' element={ <Dashboard /> } />
      <Route path='/Preferences' element={ <Preferences /> } />
      </Routes>
      </div>
      );
    }
    }
    
    export default App;