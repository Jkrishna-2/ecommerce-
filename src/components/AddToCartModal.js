import React from 'react'

const AddToCartModal = ({product, onClose}) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
    }}
  >
    <div
      style={{
        background: '#fff',
        margin: '10% auto',
        padding: '20px',
        width: '300px',
      }}
    >
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={onClose}>Confirm Add to Cart</button>
    </div>
  </div>
)

export default AddToCartModal
