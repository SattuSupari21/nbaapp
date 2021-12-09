import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './header.css';
import { faBars } from '@fortawesome/fontawesome-free-solid';

import SideNav from './SideNav/sideNav';

const Header = (props) => {

    const navBars = () => {
        return(
            <FontAwesomeIcon icon={faBars}
                onClick={props.onOpenNav}
                style={{
                    color: "#dfdfdf",
                    padding: "10px",
                    cursor: "pointer"
                }}
            />
        )
    }

    const logo = () => {
        return(
            <Link to="/" className="logo">
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
        )
    }

    return(
        <header className='header'>
            <SideNav {...props} />
            <div className='headerOpt'>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;