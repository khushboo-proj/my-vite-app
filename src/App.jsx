import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import Dashboard from './components/Dashboard.jsx'

import "./stylesheets/App.css"
export default function App() {
  const [activeModule, setActiveModule] = useState("patients")
  return (
    <div className='app-container'>
      <Sidebar setActiveModule={setActiveModule}/>
      <div className='main-content'>
 <Navbar/>
 <div className="dashboard-container">


       <Dashboard activeModule={activeModule}/>
       </div>
       </div>
      
    </div>
  )
}