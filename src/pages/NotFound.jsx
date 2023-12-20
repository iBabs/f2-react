import React from 'react'
import {useNavigate} from 'react-router-dom'

function NotFound() {

    const navigate = useNavigate()

  return (
    <div><h2>404 not found</h2>
    <p>Page doesn't exist</p>

    <button onClick={()=>navigate('/')}> Go back Home</button>
    
    </div>
  )
}

export default NotFound