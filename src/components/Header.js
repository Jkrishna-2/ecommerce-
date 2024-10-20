import React from 'react'

const Header = () => (
  <header
    style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}
  >
    <input type='text' placeholder='Search products...' style={{flex: 1}} />
    <div>
      <span style={{margin: '0 10px'}}>🛒</span>
      <span>👤</span>
    </div>
  </header>
)

export default Header
