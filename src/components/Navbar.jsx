import React from 'react'
import logo from '../logo.png';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { cart } = useSelector((state) => state);
  return (
    <div>
        <NavLink to={'/'}>
            <div>
                <img src={logo} alt="shop" />
            </div>
        </NavLink>
        <div>
            <NavLink to={'/'}>
                <p>Home</p>
            </NavLink>
            <NavLink to={'/cart'}>
                <div>
                    <FaShoppingCart/>
                    {
                        cart.length > 0 && 
                        <span>{cart.length}</span>
                    }
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar