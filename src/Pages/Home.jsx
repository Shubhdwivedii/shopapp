import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

    const API_URL = 'https://fakestoreapi.com/products';
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        setLoading(true);
        try{
            const res = await axios.get(API_URL);
            console.log(res.data);
            setProducts(res.data);
        } catch(err) {
            console.log('error fetching data', err);
            toast.error('error fetching data');
            setProducts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProducts();
    }, []);
  return (
    <div>
        {
            loading ? <Spinner/> : (
                <div>
                    {
                        products.length > 0 ? 
                        (
                            <div>
                                {
                                    products.map((product) => (
                                        <Product product={product} key={product.id} />
                                    ))
                                }
                            </div>
                        ) : (
                            <div>No Products Found</div>
                        )
                    }
                </div>
            )
        }
    </div>
  )
}

export default Home