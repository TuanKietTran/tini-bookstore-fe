import React from 'react';
import './Header.css';
import logo from './Logo.png';
import { Link } from 'react-router-dom';
const Header = ({ quantity }) => {
    return (
        <div className="header">
            <Link to={'/'}>
                <img src={logo} alt="logo" />
            </Link>
            {window.location.pathname == "/management" ? <></> : <>
                <div className="search">
                    <input type="text" placeholder='Tìm kiếm' />
                    <button className='bt-search fa-solid fa-magnifying-glass'></button>
                </div>
                <ul className="navbar-list">
                    <Link to={'cart'}>
                        <li className="navbar-item fa-solid fa-cart-shopping">
                            <div className="badge badge-secondary text-xs absolute ml-6">{quantity}</div>
                            <p>Giỏ hàng</p>
                        </li>
                    </Link>

                </ul>
            </>
            }
        </div>
    )
};

export default Header;

