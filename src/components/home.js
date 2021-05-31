import React from 'react'
import Main from './Main'
import Usersignin from './signup/Usersignin'
import ServiceeProvidersignin from './signup/ServiceeProvidersignin'
import User from'./screens/User/User'
import ServiceProvider from './screens/ServiceProvider/ServiceProvider'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
function home() {
    return (
        <Router>
    <div>    
         <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/usersignin'  component={Usersignin} />
            <Route path='/serviceprovidersignin'  component={ServiceeProvidersignin} />
            <Route path ='/User' component={User}/>
            <Route path ='/ServiceProvider' component={ServiceProvider}/>
         </Switch>
    
    </div>
        </Router>
    )
}

export default home
