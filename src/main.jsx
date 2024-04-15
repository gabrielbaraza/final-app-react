import React from 'react'
import ReactDOM from 'react-dom/client'
import { Flowbite  } from 'flowbite-react'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

import NavbarApp from "./pages/NavbarApp";
import FooterApp from "./pages/FooterApp";
import {
  HashRouter as Router,
  Routes, 
  Route
}

from "react-router-dom";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Flowbite >
   <Router>
    <Routes>
        {/* App component wraps around all the 'pages'. */}
        <Route path="*" element={<App />} />
        
    </Routes>
</Router>    
    </Flowbite>

  </React.StrictMode>,
)
