import React, { useEffect, useState } from 'react';
import '../styles/cart.css';

const Cart = () => {

    const [cartItems, setCartItems] = useState();

    useEffect(() => {

        fetch("http://localhost:8020/cart/view-all-items")
            .then(data => data.json())
            .then(result => setCartItems(result))

    }, []);


    const deleteItemHandler = (itemId) => {
        fetch("http://localhost:8081/cart/delete-item-by-id/" + itemId, {
            method: 'DELETE',
        })
            .then(console.log("Item deleted"))
    }

    return (
        <React.Fragment>

            <h2>Cart Items</h2>

            <div className="cart-wrapper">
                {
                    cartItems &&
                    cartItems.itemList.map(cartItem => (
                        <div className="cart-section" key={cartItem.itemId}>
                            <div className="cart-img">
                                <img src={cartItem.image} />
                            </div>
                            <div className="cart-info">
                                <p>{cartItem.productName}</p>
                                <p
                                    className={cartItem.availabilityStatus === "Out of Stock" ? "out-of-stock" : "in-stock"}
                                >
                                    {cartItem.availabilityStatus}
                                </p>
                                <p><span>&#8377;</span>{cartItem.price}</p>
                                <p>
                                    Quantity
                                    <span className="decrease-quantity">-</span>
                                    {cartItem.quantity}
                                    <span className="increase-quantity">+</span>
                                </p>
                                <button
                                    className="remove-item-btn"
                                    value={cartItem.itemId}
                                    onClick={e => deleteItemHandler(e.target.value)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                }
                {cartItems && <p>Total : {cartItems.totalAmount}</p>}

                <button className="order-btn">Place Order</button>

            </div>

        </React.Fragment>
    )
}

export default Cart;