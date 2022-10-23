import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./shopping-cart.css";
import { FaTimes } from 'react-icons/Fa';

import { cartUiActions } from "../../../store/shoppingCart/index";
import { EmptyCartImg } from "../assets"

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
      };

    return (
        <div className="cart__container">
            <ListGroup className="cart">
                <div className="cart__close">
                    <FaTimes 
                        color="dark"
                        role="button"
                        onClick={toggleCart}
                    />
                </div>

                <div className="cart__item-list">
                    {cartProducts.length === 0 ? (
                        <span className="center">
                            <h5>El carrito está vacío</h5>
                            <img src={EmptyCartImg} alt='carrito vacío'/>
                        </span>
                    ) : (
                        cartProducts.map((item, index) => (
                        <CartItem item={item} key={index} />
                        ))
                    )}
                    
                </div>  
                                    
                <div className="cart__subtotal">
                    <h5>
                        Subtotal: <span>₡{totalAmount}</span>
                    </h5>
                </div>
                
                <div className="cart__details">
                    <button>
                        Checkout
                    </button>
                </div>
            </ListGroup>
        </div>
    );
}

export default ShoppingCart;
