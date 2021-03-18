import React from 'react'
import { Router, Route, Redirect} from 'react-router'

import { createHashHistory } from 'history'
const hashHistory = createHashHistory();

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)