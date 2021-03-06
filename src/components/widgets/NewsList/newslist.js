import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/buttons';
import CardInfo from '../CardInfo/cardinfo';
import './newlist.css'; 

class NewsList extends Component{

    state = {
        teams:[],
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {

        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then(Response => {
                this.setState({
                    teams : Response.data
                })
            })
        }

        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(Response => {
            this.setState({
                items:[...this.state.items,...Response.data]
            })
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }

    renderNews = (type) => {
        let template = null;
        switch(type){
            case('card'):
                template=this.state.items.map((item, i) => (
                    <CSSTransition
                        classNames={{
                            enter:'newsList_wrapper',
                            enterActive:'newsList_wrapper_enter'
                        }}
                        timeout={500}
                        id={i}
                    >
                        <div>
                            <div className='newslist_item' key={i}>
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ));
            break;
            case('cardMain'):
                template = this.state.items.map((item, i) => (
                    <CSSTransition
                    classNames={{
                        enter:'newsList_wrapper',
                        enterActive:'newsList_wrapper_enter'
                    }}
                    timeout={500}
                    id={i}
                    >
                        <Link to={`/articles/${item.id}`}>
                            <div className='flex_wrapper'>
                                <div className='left'
                                    style={{
                                        background:`url('images/articles/${item.image}')`
                                    }}>
                                    <div></div>
                                </div>
                                <div className='right'>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </CSSTransition> 
                ));
            break;
            default:
                template = null;
        }
        return template;
    }

    render(){
        console.log(this.state.teams)
        return(
            <div>
                <TransitionGroup 
                component="div"
                className="list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore={() => this.loadMore()}
                    cta="Load More News"
                />
            </div>
        )
    }
}
export default NewsList;