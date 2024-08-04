import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import _ from 'lodash';
import {getUser} from "../components/LocalStorageItems/User";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = getUser();
    const isAuthenticated =!_.isEmpty(user) && user.is_authorized
    return(
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    )
}
    

export default PrivateRoute