import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css';

const AllProducts = (props) => {
    const { setCartCount } = props;
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);
    // console.log(products);
    return (
        <div>
            <h1>All Products</h1>
            <div className="row container">
                {
                    products.map((pd, index) =>
                        <SingleProduct
                            setCartCount={setCartCount}
                            product={pd}
                            // key={pd.id}
                            key={index} //id na thakle index use hobe
                        > </SingleProduct>)
                }
            </div>

        </div>
    );
};

export default AllProducts;