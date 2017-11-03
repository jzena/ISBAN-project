import React from 'react';
import { Link } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';

const SubMenu = () => {
    return (
        <div className="div_subMenu">
            {/* <Link to='/'><FormattedMessage id="submenu.login" /></Link> |
            <Link to='/terms'><FormattedMessage id="submenu.terms" /></Link> |
            <Link to='/policy'><FormattedMessage id="submenu.policy" /></Link> |
            <Link to='/about'><FormattedMessage id="submenu.about" /></Link>  |
            <Link to='/customerService'><FormattedMessage id="submenu.customerService" /></Link> */}
            <Link to='/'>Login</Link> |
            <Link to='/terms'>Terms</Link> |
            <Link to='/policy'>Policy</Link> |
            <Link to='/about'>About</Link>  |
            <Link to='/customerService'>Cuatomer</Link>
        </div>
    )
};

export default SubMenu;