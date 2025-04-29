import { useLocation } from 'react-router-dom';
import { placeOrder } from '../services/api';

function Checkout() {
  const { state } = useLocation();
  const cart = state?.cart || [];

  async function handlePlaceOrder() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      alert('Please login to place an order.');
      return;
    }

    const orderData = {
      userId: user.id,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      date: new Date().toISOString()
    };

    await placeOrder(orderData);
    alert('Order placed successfully!');
  }

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <h3>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</h3>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;
