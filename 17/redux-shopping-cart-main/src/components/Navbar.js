import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span style={{ fontSize: 23 }} className="logo"> RTK </span>
            <div >
                <Link style={{ fontSize: 23 }}  className="navLink" to="/">
                    Home
                </Link>
                <Link style={{ fontSize: 23 }}  className="navLink" to="/cart">
                    Cart
                </Link>
                <span style={{ fontSize: 18 }} className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
