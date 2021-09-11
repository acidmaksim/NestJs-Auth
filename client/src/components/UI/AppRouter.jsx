import React, { useContext } from "react";
import { Route, Switch, Redirect} from 'react-router-dom'
import { privateRotes, publicRoutes } from "../../Router";
import { AuthContext } from "../context";
import Loader from "./Loader/Loader";


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth);

    if(isLoading) {
        return <Loader />
    }

    return (
        isAuth
        ? <Switch>
            {privateRotes.map(route => 
                <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
                />
            )}
            <Redirect to='/posts'/>
        </Switch>
        : <Switch>
        {publicRoutes.map(route => 
            <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
                key={route.path}
            />
        )}
        <Redirect to='/login'/>
    </Switch>
    )
}
    
    
    export default AppRouter