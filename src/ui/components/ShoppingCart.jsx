import React from "react";
import { ListGroup } from "react-bootstrap";
//import { carts } from "./carts.png"


import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./shopping-cart.css";

export const ShoppingCart = ({closecartModal}) => {

    return (
        
            <div className="cart__container">
                <ListGroup className="cart">
                    <div className="cart__close">
                        <MDBBtn
                            outline
                            color="dark"
                            floating
                            role="button"
                            onClick={() => closecartModal(false)}
                        >
                            <MDBIcon fas icon="times" />
                        </MDBBtn>

                    </div>

                    <div className="cart__item-list">
                    

                        <h5 className="text-center">El carrito está vacío</h5>


                    </div>  

                    
                   

                    <div className="cart__subtotal">
                        <h5>
                            Subtotal: 
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
