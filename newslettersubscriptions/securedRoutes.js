import { lazy } from 'react';
const NewsletterSubscribers = lazy(() => import('../pages/newslettersubscribers/NewsletterSubscribers'));


const newsletterSubscribers = [
    {
        path: '/newsletter/subscriptions/subscribers',
        name: 'Newsletter Subscribers',
        element: NewsletterSubscribers,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
];


const allRoutes = [
   
    ...newsletterSubscribers,
    
];
export default allRoutes;
