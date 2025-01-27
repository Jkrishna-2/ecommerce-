import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage'
import ThankYouPage from './pages/ThankYouPage'

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<ProductListPage />} />
      <Route path='/thank-you' element={<ThankYouPage />} />
    </Routes>
  </Router>
)

export default App
