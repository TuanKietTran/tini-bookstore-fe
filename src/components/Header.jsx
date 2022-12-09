import React from 'react';
import './Header.css';
import logo from './Logo.png';
const Header = () => {
    const [quantity, setQuantity] = React.useState(0);
    return (
        <div className="header">
            <img src={logo} alt="logo" />
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

