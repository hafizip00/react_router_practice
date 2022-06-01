import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Order() {

const navigateBack = useNavigate();
const params = useParams();
const userIdd = params.userId;
  return (
    <div>
        <h1>Order Placed Successfully! {userIdd} </h1>
        <button onClick={() => navigateBack(-1)}>Back to Home</button>
    </div>
  )
}

export default Order