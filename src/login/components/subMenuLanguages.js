import React from 'react';


const SubMenuLanguages = ({ locale, changeLanguage }) => (
    <a onClick={() => changeLanguage(locale)}>{locale.toUpperCase()} | </a>  
)

export default SubMenuLanguages;
