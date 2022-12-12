import React from 'react';
import './Header.css';
import logo from './Logo.png';
const Header = ({quantity}) => {
    return (
        <div className="header">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
            <div className="search">
                <input type="text" placeholder='Tìm kiếm' />
                <button className='bt-search fa-solid fa-magnifying-glass'></button>
            </div>
            <ul className="navbar-list">
                <li className="navbar-item fa-solid fa-cart-shopping">
                <div className="badge badge-secondary text-xs absolute ml-6">{quantity}</div>
                    <p>Giỏ hàng</p>
                </li>
                <li className="navbar-item fa-solid fa-book">
                    <p>Yêu thích</p>
                </li>
                <li className="navbar-item fa-solid fa-circle-user">
                    <p>Tài khoản</p>
                </li>
            </ul>
        </div>
    )
};

export default Header;

