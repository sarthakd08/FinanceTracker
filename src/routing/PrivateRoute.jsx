import React, {useContext} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext'

function PrivateRoute({component: Component, ...rest}) {
    const {currentUser} = useContext(AuthContext)
    return (
        <Route 
            {...rest}
            render={(props) => {
                return currentUser ? <Component {...props} /> : <Redirect to='/login' />
            }}
        ></Route>
    )
}

export default PrivateRoute;
