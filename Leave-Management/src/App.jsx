import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage'
import Dashboard from './components/Dashboard'
import LeaveManagementDetails from './components/LeaveManagementDetails';
// import Board from './pages/board';
import LeaveHistory from './pages/Leave History';
import LeaveRecall from './pages/Leave Recall';
import LeaveSettings from './pages/Leave Settings';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path='/' element= {< Login/>}></Route>
      <Route path='/dashboard' element= {< Dashboard />}></Route>
      <Route path='/leavemanagement' element={< LeaveManagementDetails />}></Route>
      <Route path='/leavemanagement/leavehistory' element={< LeaveHistory />}></Route>
      <Route path='/leavemanagement/leaverecall' element={< LeaveRecall />}></Route>
      <Route path='/leavemanagement/leavesettings' element={< LeaveSettings />}></Route>
      {/* <Route path='/board' element={< Board />}></Route> */}
    </Routes> 

     
    </>
  )
}

export default App
