import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider_template';

class NewsSlider extends Component{

    state = {
        news:[]
    }

    componentWillMount(){
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
        .then( Response => {
            this.setState({
                news:Response.data
            })
        })
    }

    render(){
        return(
            <div>
                <SliderTemplates data={this.state.news} />
            </div>
        )
    }

}

export default NewsSlider;