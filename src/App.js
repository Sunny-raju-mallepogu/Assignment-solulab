import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css'
import Sidebar from './Components/Sidebar';
import New from './Pages/New'
import Patient from './Pages/Patient'
const App = () => {
  return (
    <div>
      
<BrowserRouter>
<Sidebar/>
<Routes>
  <Route  path='/' element={<New/>}/>
  {/* <Route  path='/patient' element={<Patient/>}/> */}
</Routes>

</BrowserRouter>
     
    </div>
  )
}

export default App