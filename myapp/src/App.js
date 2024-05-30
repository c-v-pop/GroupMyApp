import React from 'react';
import './App.css';
import { Route ,Routes} from 'react-router-dom';
import useToken from './components/App/useToken';


// Importing pages 
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import { NotFound } from './Pages/NotFound/noftfound';
import Index from './Pages/Index/Index';
import Profile from './Pages/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import Logout from './components/Logout/Logout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
//

function App() {
  
  const { setToken, deleteToken } = useToken();
  
  return(
    <div>
    <Routes>
    <Route path='/login' element={ <Login setToken={setToken}/>} />
    <Route path='/register' element={ <Register />} />
    <Route path='/index' element={<ProtectedRoute> <Index /></ProtectedRoute>}/>
    <Route path='/profile' element={<ProtectedRoute> <Profile /></ProtectedRoute>}/>
    <Route path='*' element={ <NotFound />} />
    <Route path='/Dashboard' element={ <ProtectedRoute><Dashboard /></ProtectedRoute>}/>
    <Route path='/Logout' element={ <Logout deleteToken={deleteToken}/> }/>
    </Routes>
    </div>)
  }
  
  export default App;