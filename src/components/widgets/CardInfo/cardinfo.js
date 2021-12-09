import React from 'react';
import FontAwesome from 'react-fontawesome';
import { faClock } from '@fortawesome/fontawesome-free-solid';

import './cardinfo.css'

const CardInfo = (props) => {

    const teamName = (teams, team) => {
        let data = teams.find((item) => {
            return item.id === team
        });
        if(data){
            return data.name
        }
    }

    return(
        <div className='cardinfo'>
            <span className='teamName' >
                {teamName(props.teams, props.team)}
            </span>
            <span className='date'>
                <FontAwesome icon="faClock"/>
                {props.date}
            </span>
        </div>
    )
}

export default CardInfo;