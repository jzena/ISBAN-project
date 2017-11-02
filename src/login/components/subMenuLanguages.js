//import React from 'react';
import { connect } from 'react-redux';
import React, { Component } from 'react';

const Item = ({ locale, changeLanguage }) => {
    return (
        <a onClick={() => changeLanguage(locale)}>{locale}</a>
    )
}

class SubMenuLanguages extends Component {
    changeLanguage = (locale) => {
        this.props.setLanguage(locale);
    }

    render() {
        return (
            <div className="div_language">
                <a href="#">Home</a>    |
            <Item locale="es" changeLanguage={this.changeLanguage}></Item> |
            <Item locale="en" changeLanguage={this.changeLanguage}></Item> |
            {/* <a onClick={props.setLanguage('fr')}>FR</a> |
            <a onClick={props.setLanguage('de')}>DE</a> |
            <a onClick={props.setLanguage('it')}>IT</a> |
            <a onClick={props.setLanguage('cn')}>CN</a> |
            <a onClick={props.setLanguage('br')}>BR</a> */}
                <h2>{this.props.language}</h2>

            </div>
        );
    }
}


// const SubMenuLanguages = (props) => {
//     return (
//         <div className="div_language">
//             <a href="#">Home</a>    |
//             <a onClick={() => { props.setLanguage('es') }}>ES</a> |
//             <a onClick={() => { props.setLanguage('en') }}>EN</a> |
//             {/* <a onClick={props.setLanguage('fr')}>FR</a> |
//             <a onClick={props.setLanguage('de')}>DE</a> |
//             <a onClick={props.setLanguage('it')}>IT</a> |
//             <a onClick={props.setLanguage('cn')}>CN</a> |
//             <a onClick={props.setLanguage('br')}>BR</a> */}
//             <h2>{props.language}</h2>

//         </div>
//     );
// }

const mapStateToProps = (state, ownProps) => {
    return {
        language: state.setLanguage,
        own: ownProps
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLanguage: (locale) => {
            dispatch({ type: 'SET_LANGUAGE', language: locale })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubMenuLanguages)