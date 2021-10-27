import React, {Suspense, useContext} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
// import PageNotFound from '../pages/PageNotFound/PageNotFound'
import routeConfig from './routeConfig';
import {AuthContext} from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';
import App from '../App'

const Routes = (props) => {
    const {currentUser} = useContext(AuthContext)
    return (
        <Suspense fallback={<div>LOADING CONTENT...</div>}>
            <Switch>
                <PrivateRoute exact path='/' component={App} />
                {routeConfig.map(({path, name, Component, exact, showOnlyToLoggedInUser}) => (
                    <Route 
                        key={name} path={path} exact={exact} 
                        render={(props) => {
                            return <Component {...props}/>
                            }    
                        }
                    />
                    //using render() instaead of component={component} here
                ))}
                {/* <Route component={PageNotFound}/> */}
            </Switch>
        </Suspense> 
    )
}

export default Routes;