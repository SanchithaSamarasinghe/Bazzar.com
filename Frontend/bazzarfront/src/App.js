import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login1 from './home/Login';
import HomePage from './home/HomePage';
import Register from './home/Register';
import Forgot_Password from './home/Forgot_Password';
import { Toaster } from 'react-hot-toast';


function App() {
  
  return (
    <>
    <Toaster/>
<Router>

     <Routes>
      <Route path = "/" element={<HomePage />} />
      <Route path = "/register" element = {<Register/>}/>
      <Route path = '/login' element = {<Login1/>}/>
      <Route path = '/forgot' element = {<Forgot_Password/>}/>
   </Routes>
  </Router>
  </>
  );
}

export default App;
