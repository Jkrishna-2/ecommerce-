import React from 'react'
import {useLocation} from 'react-router-dom'

const ThankYouPage = () => {
  const location = useLocation()
  const {productName} = location.state || {}

  return (
    <div>
      <h1>Thank You!</h1>
      <p>Thank you for your interest in {productName}!</p>
    </div>
  )
}

export default ThankYouPage
