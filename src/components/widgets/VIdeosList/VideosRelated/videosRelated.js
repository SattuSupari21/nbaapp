import React from 'react';

import '../videolist.css';
import VideosListTemplate from '../videosListTemplate';

const VideosRelated = (props) => (
    <div classname='relatedWrapper'>
        <VideosListTemplate
            data={props.data}
            teams={props.teams}
        />
    </div>
)

export default VideosRelated;