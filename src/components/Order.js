import React from 'react'
import {useNavigate} from 'react-router-dom'

function Order() {

const navigateBack = useNavigate();
  return (
    <div>
        <h1>Order Placed Successfully!</h1>
        <button onClick={() => navigateBack(-1)}>Back to Home</button>
    </div>
  )
}

export default Order