import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Layout from './components/Layout';
import Psychology from './components/Psychology';



const App = () => {
 

  return (
  
    <Router>
    
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/psychology" element={<Psychology />} />
        
        </Routes>
      </Layout>
    </Router>
   
  );
}

export default App;
