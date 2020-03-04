import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './container/App';

const delay = 250;
const timeout = 10000
function Loading() {
  return (
    <div>loading</div>
  )
};

const routeMap = [
  {
    path: '/',
    component: './container/home',
    exact: true
  },
  {
    path: '/meeting',
    component: './container/meeting',
    exact: true
  },
  {
    path: '/testA',
    component: './container/testA',
    exact: true
  },
  {
    path: '/testB',
    component: './container/testB',
    exact: true
  },
  {
    path: '/testC',
    component: './container/testC',
    exact: true
  },
  {
    path: '/testD',
    component: './container/testD',
    exact: true
  },
  {
    path: '/testE',
    component: './container/testE',
    exact: true
  }
];

const isAuth = () => {
  const token = localStorage.getItem('token');
  return true
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth
        ? (<Component {...props} />)
        : (<Redirect to="/login" />)
    }>

  </Route>
);

export default () => (

  <BrowserRouter>
    <App>
      <Switch>
        {/* {
              routeMap.map((item, index) => {
                  return <PrivateRoute key={index} path={item.path} exact={item.exact}
                      component={
                          Loadable({
                              loader: () => {
                                  return import(`${item.component}`);
                              },
                              loading:Loading,
                              delay,
                              timeout
                          })
                      }
                  />
              })
          } */}
        {
          routeMap.map((item, index) => {
            return <Route key={index} path={item.path} exact={item.exact}
              component={
                Loadable({
                  loader: () => {
                    return import(`${item.component}`);
                  },
                  loading: Loading,
                  delay,
                  timeout
                })
              }
            />
          })
        }
      </Switch>
    </App>
  </BrowserRouter>
)
