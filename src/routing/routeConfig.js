import React from 'react';

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
        path: '/sign-up',
        Component: SignUp,
        exact: true,
        name: 'Sign Up',
        doNeedStateEngine: false,
        showOnlyToLoggedInUser: false,
      },
//     {
//       path: '/signin',
//       Component: SignInAndSignUpPage,
//       exact: true,
//       name: 'signin',
//       doNeedStateEngine: true,
//       showOnlyToLoggedInUser: true,
//     },
]

export default routesConfig;