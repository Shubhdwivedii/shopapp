import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast'

const CartItems = ({item}) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error('Item Removed From Cart');
    } 
  return (
    <div>
        <img src={item.image} alt="wtf?" />
        <p>{item.title}</p>
        <p>{item.description}</p>
        <div>
            <p>{item.price}</p>
            <button onClick={removeFromCart}>
                <AiFillDelete/>
            </button>
        </div>
    </div>
  )
}

export default CartItems