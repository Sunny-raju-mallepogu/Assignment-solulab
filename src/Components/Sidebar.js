import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=''>
       
       
        <div className='green-b'>

        </div>
        <div className='ms-3 '>
        <Link to='/' className='none'> <div className='ms-2'>
       <i className="bi bi-plus-lg"></i>
          <p>NEW</p>
         
      </div>
      </Link>
      
     <div>
      <i className="bi bi-person ms-2"></i>
         <p className='text'>PATIENT</p>
      </div>
      
      <div>
      <i className="bi bi-folder2 ms-2"></i>
          <p>FOLDER</p>
      </div>
      <div>
      <i className="bi bi-file-earmark-arrow-up ms-2"></i>
          <p>UPLOAD</p>
      </div>
      <div>
      <i className="bi bi-file-earmark-text ms-2"></i>
          <p>REPORT</p>
      </div>
      <div>
      <i className="bi bi-gear ms-2"></i>
          <p>SETTING</p>
      </div>
      <div>
      <i className="bi bi-box-arrow-right ms-2"></i>
          <p>LOGOUT</p>
      </div>
      
  </div>
    </div>
  )
}

export default Sidebar