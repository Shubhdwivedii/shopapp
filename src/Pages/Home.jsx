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
                            <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
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