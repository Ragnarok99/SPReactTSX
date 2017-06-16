import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.tsx';

function AppRouter() {
    return (
        <Switch>
            <Route exat path='/' component={Home} />
        </Switch>
        )

}


export default AppRouter;
