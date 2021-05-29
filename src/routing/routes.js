import React, {Suspense} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
// import PageNotFound from '../pages/PageNotFound/PageNotFound'
import routeConfig from './routeConfig';

const Routes = (props) => {
    console.log('ROUTE Props', props);
    return (
        <Suspense fallback={<div>LOADING CONTENT...</div>}>
            <Switch>
                {routeConfig.map(({path, name, Component, exact, showOnlyToLoggedInUser}) => (
                    <Route key={name} path={path} exact={exact} render={() => ((showOnlyToLoggedInUser && props.isCurrentUser) ? (<Redirect to='/' />) : (<Component />) )} />  //using render() instaead of component={component} here
                ))}
                {/* <Route component={PageNotFound}/> */}
            </Switch>
        </Suspense> 
    )
}

export default Routes;