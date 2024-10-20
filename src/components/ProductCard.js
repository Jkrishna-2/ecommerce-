import React from 'react'
import {useNavigate} from 'react-router-dom'

const ProductCard = ({product, onAddToCart}) => {
  const navigate = useNavigate()

  return (
    <div style={{border: '1px solid #ddd', padding: '10px', margin: '10px'}}>
      <img src={product.image} alt={product.name} style={{width: '100%'}} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() =>
          navigate('/thank-you', {state: {productName: product.name}})
        }
      >
        View Product
      </button>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
