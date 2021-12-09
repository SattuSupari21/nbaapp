import { icon } from '@fortawesome/fontawesome';
import { faHome, faNewspaper, faVideo, faSignInAlt, faSignOutAlt } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './sideNav.css';

const SideNavItems = () => {

    const items = [
        {
            type: 'option',
            icon: 'faHome',
            text: 'Home',
            link: '/'
        },
        {
            type: 'option',
            icon: 'faNewspaper',
            text: 'News',
            link: '/news'
        },
        {
            type: 'option',
            icon: 'faVideo',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: 'option',
            icon: 'faSignInAlt',
            text: 'sign-in',
            link: '/sign-in'
        },
        {
            type: 'option',
            icon: 'faSignOutAlt',
            text: 'sign-out',
            link: '/sign-out'
        }
    ]

    const mapIcons = {
        faHome, faNewspaper, faVideo, faSignInAlt, faSignOutAlt
    }

    const showItems = () => {
        return items.map((item, i) => {
            return(
                <div key={i} className = {item.type}>
                    <Link to={item.link}>
                        <FontAwesomeIcon icon={mapIcons[item.icon]}/>
                        {item.text}
                    </Link>
                </div>
            )
        })
    }
    
    return(
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems;