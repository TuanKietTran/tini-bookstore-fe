import React from 'react';
import './Header.css';
import logo from './Logo.png';
const Header: React.FC = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div className="search">
                <input type="text" placeholder='Tìm kiếm' />
                <button className='bt-search fa-solid fa-magnifying-glass'></button>
            </div>
            <ul className="navbar-list">
                <li className="navbar-item fa-solid fa-cart-shopping">
                    <p>Giỏ hảng</p>
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

