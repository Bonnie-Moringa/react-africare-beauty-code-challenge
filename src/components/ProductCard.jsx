function ProductCard({ product, addToCart }) {
    return (
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
       <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>

        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  }
  
  export default ProductCard;
  