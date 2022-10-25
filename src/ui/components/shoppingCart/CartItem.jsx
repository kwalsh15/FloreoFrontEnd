import React from "react";
import { ListGroupItem } from "react-bootstrap";

import "./cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/index";
import { HiOutlineTrash } from 'react-icons/hi';

const CartItem = ({ item }) => {
  const {id, nombre, totalPrice } = item;

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  
  
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{nombre}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              <span>₡{totalPrice}</span>
            </p>
            
          </div>
          <span className="delete__btn">
            <HiOutlineTrash 
              role="button"
              size="23"
              onClick={deleteItem}
            />
              

          </span>

        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
