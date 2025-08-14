import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='grow ml-60 md:ml-64 lg:h-screen bg-gray-100 text-gray-900 '>
        <Navbar />
        <div>
          <Dashboard />
        </div>
      </div>

      
    </div>
  )
}

export default App
