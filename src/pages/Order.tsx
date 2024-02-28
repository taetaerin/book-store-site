import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Order() {
    const location = useLocation();
    const orderDataFromCart = location.state;
    console.log(orderDataFromCart)

  return (
    <div>order</div>
  )
}
