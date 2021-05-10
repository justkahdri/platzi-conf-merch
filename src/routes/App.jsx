import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import {Home, Checkout, Information, Payment, Success, NotFound} from '../containers';

import '../styles/components/App.css';

const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/checkout/info' component={Information} />
            <Route exact path='/checkout/payment' component={Payment} />
            <Route exact path='/checkout/success' component={Success} />
            <Route component={NotFound} />
        </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;