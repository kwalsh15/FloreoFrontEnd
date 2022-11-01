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
    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      <div>
        <h5 className="mb-1">{nombre}</h5>        
        <p className=" d-flex align-items-center gap-5">
          <span className="mb-1">Precio: ₡{totalPrice}</span>
        </p>
      </div>
   
      <span>
        <HiOutlineTrash 
          color="B30000"
          role="button"
          size="24"
          onClick={deleteItem}
        />
      </span>
    </li>
  );
};

export default CartItem;
