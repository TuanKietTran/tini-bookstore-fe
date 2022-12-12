import React from 'react';
import './Header.css';
import logo from './Logo.png';
import { Outlet, Link } from "react-router-dom";

const Header = ({ quantity }) => {
    return (
        <>
        <div className="header">
            <Link to={`/`}> <img src={logo} alt="logo" /></Link>
            <div className="search">
                <input type="text" placeholder='Tìm kiếm' />
                <button className='bt-search fa-solid fa-magnifying-glass'></button>
            </div>
            <ul className="navbar-list">
                <li className="navbar-item fa-solid fa-cart-shopping">
                    <div className="badge badge-secondary text-xs absolute ml-6">{quantity}</div>
                    <Link to={`/cart`} className="header-text">Giỏ hàng</Link>
                </li>
                {/* <li className="navbar-item fa-solid fa-book">
                    <Link to={`/love`} className="header-text">Yêu thích</Link>
                </li>
                <li className="navbar-item fa-solid fa-circle-user">
                    <Link to={`/account`} className="header-text">Tài khoản</Link>
                </li> */}
            </ul>
        </div>
        <div>
            <Outlet />
        </div>
        </>
    )
};

export default Header;

