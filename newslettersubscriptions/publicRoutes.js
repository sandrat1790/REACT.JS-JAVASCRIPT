import { lazy } from 'react';

const routes = [
    {
        path: '/newsletter/subscriptions/unsubscribe',
        name: 'NewsletterUnsubscribe',
        exact: true,
        element: NewsletterUnsubscribe,
        roles: [],
        isAnonymous: true,
    },
];

const errorRoutes = [
    {
        path: '/error-500',
        name: 'Error - 500',
        element: ServerError,
        roles: [],
        exact: true,
        isAnonymous: true,
    },
    {
        path: '*',
        name: 'Error - 404',
        element: PageNotFound,
        roles: [],
        exact: false,
        isAnonymous: true,
    },
];

var allRoutes = [
    ...routes,
    ...errorRoutes,
];
export default allRoutes;
