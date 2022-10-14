import React, { useEffect, useState } from 'react';
import '../styles/home.css';

const Home = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8020/product/getproducts")
            .then(data => data.json())
            .then(result => setProductList(result))

    }, []);

    const addToCartHandler = (itemId) => {

        // const item = {
        //     productName: "",
        //     price: "",
        //     quantity: "",
        //     availabilityStatus: "",
        //     image: ""
        // }

        fetch("http://localhost:8081/cart/add-items/" + itemId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        })
            .then(() => console.log("Item added to cart"))
            .catch(err => console.log(err))
    }

    return (
        <React.Fragment>
            <h1 className="main-heading">Welcome to EShopping Zone</h1>

            <div className="product-list-wrapper">
                {
                    productList.map(product => (
                        <div className="product-section" key={product.productId}>
                            <div className="product-img">
                                <img src={product.image} alt="product information" />
                            </div>
                            <div className="product-info">
                                <p>{product.productName}</p>
                                <p
                                    className={product.availabilityStatus === "Out of Stock" ? "out-of-stock" : "in-stock"}
                                >
                                    {product.availabilityStatus}
                                </p>
                                <p>{product.description}</p>
                                <p><span>&#8377;</span>{product.price}</p>
                                <button
                                    value={product.productId}
                                    disabled={product.availabilityStatus === "Out of Stock"}
                                    className={
                                        product.availabilityStatus === "Out of Stock" ?
                                            "disabled-add-btn" : "add-cart-btn"
                                    }
                                    onClick={e => addToCartHandler(e.target.value)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </React.Fragment>
    )
}

export default Home;