import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { useState } from "react";
import { TbShoppingCart } from 'react-icons/tb';
import { HiOutlineUserGroup } from "react-icons/hi";
import { cartUiActions } from "../../store/shoppingCart/index";
import { Link } from 'react-router-dom';

import ShoppingCart from "./shoppingCart/ShoppingCart";
import "./header.css";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBNavbarLink,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";

export const NavbarUi = () => {
  const { active: aboutInformation } = useSelector((state) => state.section);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      
      <div className="container-fluid">

        <div style={{marginLeft: "4%"}}>
          <Link to={'home/members'}>
            <HiOutlineUserGroup
              style={{
                width: "33.5",
                height: "33.5",
                color: "white",
                cursor: "pointer"
              }}
            />
          </Link>
        </div>
        
        <div className="justify-content-center">
          <MDBTypography color='white' tag='h3'>{aboutInformation?.Nombre}</MDBTypography>  
        </div>

        <div style={{marginRight: "4%"}}>
          <TbShoppingCart
            style={{
              width: "33.5",
              height: "33.5",
              color: "white",
              cursor: "pointer"
            }}
            onClick={toggleCart}
          />
          <span className="badge rounded-pill badge-notification bg-danger" style={{fontSize:"0.68rem"}}>{totalQuantity}</span>
          {showCart && <ShoppingCart />}
        </div>

      </div>
      
    </nav>
    // <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    //   <div className='w-100 d-flex justify-content-center'>
    //     { aboutInformation?.Nombre }
    //    </div>

    //     <div className="navbar-collapse collapse">
    //         <ul className="navbar-nav ml-auto">
    //             <i
    //                 className="nav-item nav-link"
    //                 style={{
    //                   cursor: 'pointer'
    //                 }}
    //             >
    //                 <ShoppingCart />
    //             </i>
    //         </ul>
    //     </div>
    // </nav>
  );
};
