import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Sidebar from './Components/Sidebar'
// import Header from './Components/Header'
// import Dashboard from './pages/Dashboard.jsx'
// import Patients from './pages/Patients.jsx'
// import DataVisualization from './pages/DataVisualization.jsx'
// import AdvancedSearch from './pages/AdvancedSearch.jsx'
// import Doctors from './pages/Doctors.jsx'
// import Settings from './pages/Settings.jsx'
import Login from './Components/Login'
import Signup from './Components/Signup'

const App = () => {
  const [state, updateState] = useState([1, 0])
  const handleClick = value => {
    updateState([value[0], value[1]])
    console.log(value)
  }
  return (
    <BrowserRouter>
      {state[0] === 1 && <Signup handleClick={handleClick} />}
      {state[1] === 1 && <Login handleClick={handleClick} />}
      {/* <Header />
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/patients' element={<Patients />} />
          <Route path='/datavisualization' element={<DataVisualization />} />
          <Route path='/advancedsearch' element={<AdvancedSearch />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Sidebar> */}
    </BrowserRouter>
  )
}

export default App
