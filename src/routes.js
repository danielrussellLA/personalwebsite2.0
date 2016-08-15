import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Profile from './components/profile';
import Projects from './components/projects';
import Contact from './components/contact';
import Blog from './components/blog';


export default (
    <Route path='/' component={ App }>
        <IndexRoute component={ Profile } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact } />
        <Route path="/blog" component={ Blog } />

    </Route>
)
