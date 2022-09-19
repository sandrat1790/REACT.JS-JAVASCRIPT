import { lazy } from 'react';

const NewsletterUnsubscribe = lazy(() => import('../pages/newslettersubscribers/NewsletterUnsubscribe'));

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

var allRoutes = [
    
    ...routes,
   
];
export default allRoutes;
