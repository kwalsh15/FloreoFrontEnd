import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./shopping-cart.css";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
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
            <div className="cart">
                <div className="cart__close">
                    <MDBBtn
                        outline
                        floating
                        color="dark"
                        role="button"
                        onClick={toggleCart}
                    >
                        <MDBIcon fas icon="times" />
                    </MDBBtn>
                </div>
                
                <ul className="cart__item-list list-group list-group-flush">
                    {cartProducts.length === 0 ? (
                        <span className="center">
                            <h5 id="prueba">Su carrito está vacío</h5>
                            <img src={EmptyCartImg} alt='carrito vacío'/>
                        </span>
                    ) : (
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    )}                    
                </ul>
                                    
                <div className="cart__details">
                    <div className="cart__subtotal">
                        <p>Subtotal: ₡{totalAmount}</p>
                    </div>

                    {cartProducts.length === 0 ? (
                        <button type="button" className="cart__checkout btn-dark" disabled>
                            <h5>Detalles de la Orden</h5>
                        </button>
                    ) : (
                        <button type="button" className="cart__checkout btn-dark">
                            <h5>Detalles de la Orden</h5>
                        </button>
                    )}  
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
