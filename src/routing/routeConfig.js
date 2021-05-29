import React from 'react';

const App = React.lazy(() => import('../App'));

const Route1 = (props) => {
    console.log('Route1 props', props);
    return (
    <div>
        <h3>Route 1</h3>
    </div>
    )
}

const routesConfig = [
    {
      path: '/',
      Component: App,
      exact: true,
      name: 'HOMEPAGE',
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