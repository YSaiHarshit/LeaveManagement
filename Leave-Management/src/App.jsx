import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage'
import Dashboard from './components/Dashboard'
import LeaveManagementDetails from './components/LeaveManagementDetails';
import LeaveHistory from './pages/Leave History';
import LeaveRecall from './pages/Leave Recall';
import LeaveSettings from './pages/Leave Settings';
import Board from './pages/Board';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
    <Routes>
      <Route path='/' element= {< Login/>}></Route>
      <Route path='/dashboard' element= {< Dashboard />}>
      <Route path='board' element = {< Board/>}></Route>
      <Route path='leave-management' element={< LeaveManagementDetails/>}>
      <Route path='leave-history' element={< LeaveHistory />}></Route>
      <Route path='leave-recall' element={< LeaveRecall />}></Route>
      <Route path='leave-settings' element={< LeaveSettings />}></Route>
      </Route>
      </Route>
      
    </Routes> 
         
    </>
  )
}

export default App
