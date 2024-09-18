import React from 'react'
import { Link } from 'react-router-dom'
import '../component/Admin.css'

function Admin() {
  return (
    <div>
        <nav className='adm4'>
      <h1 className='adm5'>MECH&SPARES </h1>
            <ul className='adm1'>
                <Link to='/Mechshop'className='adm2'>
                <li>Mechanical</li>
                </Link>
                <Link to='/Sparesshop'className='adm3'>
                <li>Spares</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Admin