import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchInput from '../Search/SearchInput';
import logo from '../../logo.svg';

class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                <div className='container'>
                    <Link className='navbar-brand' to='/heroes'>
                        <img src={logo} alt="" /> SuperHero
                    </Link>
                    <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <div className='navbar-nav ml-auto'>
                            <Link className='nav-item nav-link' to='/heroes'>Heroes <span className='sr-only'>(current)</span></Link>
                            <Link className='nav-item nav-link' to='/build-hero'>Build Hero</Link>
                        </div>
                    </div>
                    <SearchInput />
                </div>
            </nav>
        );
    }
}

export default Header;