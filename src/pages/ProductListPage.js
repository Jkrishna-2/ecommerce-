import React, {useState} from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import AddToCartModal from '../components/AddToCartModal'
import Pagination from '../components/Pagination'

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 49.99,
    image: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
]

const ProductListPage = () => {
  const [cartModalProduct, setCartModalProduct] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const handleAddToCart = product => setCartModalProduct(product)
  const handleCloseModal = () => setCartModalProduct(null)

  return (
    <div>
      <Header />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
        }}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={setCurrentPage}
      />
      {cartModalProduct && (
        <AddToCartModal product={cartModalProduct} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default ProductListPage
