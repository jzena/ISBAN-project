import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = () => {
    return (
        <div className="div_subMenu">
            <Link to='/'>Terms and conditions</Link> |
            <Link to='/'>Cookie Policy</Link> |
            <Link to='/'>About us</Link>  |
            <Link to='/'>Customer service</Link>
        </div>
    )
};

export default SubMenu;