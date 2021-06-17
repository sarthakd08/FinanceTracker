import React from 'react';

import Login from '../components/Login/Login';

const App = React.lazy(() => import('../App'));
const SignUp = React.lazy(() => import('../components/SignUp/SignUp'))

const routesConfig = [
    {
      path: '/',
      Component: App,
      exact: true,
      name: 'HOMEPAGE',
      doNeedStateEngine: false,
      showOnlyToLoggedInUser: false,
    },
    {
      path: '/signup',
      Component: SignUp,
      exact: true,
      name: 'Sign Up',
      doNeedStateEngine: false,
      showOnlyToLoggedInUser: false,
    },
    {
      path: '/login',
      Component: Login,
      exact: true,
      name: 'Login',
      doNeedStateEngine: true,
      showOnlyToLoggedInUser: true,
    },
]

export default routesConfig;