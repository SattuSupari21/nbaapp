import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Posts/index';
import VideoArticle from './components/Articles/Videos/Video';

import Layout from './hoc/layout';

class Routes extends Component{
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/articles/:id' exact component={NewsArticle} />
                    <Route path='/videos/:id' exact component={VideoArticle}/>
                </Switch>
            </Layout>
        )
    }
}
export default Routes;