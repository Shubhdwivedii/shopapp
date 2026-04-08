import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItems from '../components/CartItems';

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [amount, setAmount] = useState(0);

  const totalAmount = cart.reduce((acc, cur)=> {
    return acc + cur.price
  }, 0);
  useEffect(() => {
    setAmount(totalAmount);
  },[cart, totalAmount]);

  return (
    <div>
      {
        cart.length > 0 ? (
          <div>
            <div>
              {cart.map((item, index) => (
                <CartItems key={item.id} item={item}/>
              ))}
            </div>
            <div>
              <div>
                <p>Your Cart</p>
                <h1>Summary</h1>
              </div>

              <p>Total Items: {cart.length}</p>

              <p>Total Amount: {amount}</p>

              <button>CheckOut Now</button>
            </div>
          </div>
        ) : (
          <div>
            <h1>Your Cart is Empty</h1>
            <NavLink to={'/'}>
              <button>Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart