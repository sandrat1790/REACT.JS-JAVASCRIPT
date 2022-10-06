import { lazy } from 'react';
const AboutUs = lazy(() => import('../pages/landing/AboutUs'));
const Blogs = lazy(() => import('../components/blogs/Blogs'));
const ChangePassword = lazy(() => import('../pages/account/ChangePassword'));
const Confirm = lazy(() => import('../pages/account/Confirm'));
const ConfirmSuccess = lazy(() => import('../pages/account/ConfirmSuccess'));
const ContactUs = lazy(() => import('../pages/contactus/'));
const FAQs = lazy(() => import('../pages/faqs/FAQs'));
const HasCheckoutButton = lazy(() => import('../pages/stripe/HasCheckoutButton'));
const JobsMain = lazy(() => import('../components/jobspublic/JobsMain'));
const Landing = lazy(() => import('../pages/landing'));
const Login = lazy(() => import('../pages/account/Login'));
const NewsletterUnsubscribe = lazy(() => import('../pages/newslettersubscribers/NewsletterUnsubscribe'));
const PageNotFound = lazy(() => import('../pages/error/PageNotFound'));
const Privacy = lazy(() => import('../pages/landing/Privacy'));
const Register = lazy(() => import('../pages/account/Register'));
const RenderBlog = lazy(() => import('../components/blogs/RenderBlog'));
const RenderAuthor = lazy(() => import('../components/blogs/RenderAuthor'));
const ResetPassword = lazy(() => import('../pages/account/ResetPassword'));
const ShareStories = lazy(() => import('../components/sharestory/ShareStories'));
const ServerError = lazy(() => import('../pages/error/ServerError'));
const TermsOfService = lazy(() => import('../pages/landing/TermsOfService'));
const privacy = [
    {
        path: '/privacy',
        name: 'Privacy',
        exact: true,
        element: Privacy,
        roles: [],
        isAnonymous: true,
    },
];
const termsOfService = [
    {
        path: '/terms-of-service',
        name: 'TermsOfService',
        exact: true,
        element: TermsOfService,
        roles: [],
        isAnonymous: true,
    },
];
const aboutUs = [
    {
        path: '/aboutus',
        name: 'AboutUs',
        exact: true,
        element: AboutUs,
        roles: [],
        isAnonymous: true,
    },
];
const blogs = [
    {
        path: '/blogs',
        name: 'AllBlogs',
        exact: true,
        element: Blogs,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/blogs/:blogid',
        name: 'Blog',
        element: RenderBlog,
        roles: [],
        exact: true,
        isAnonymous: true,
    },
];
const routes = [
    {
        path: '/blogs/authors/:authorId',
        name: 'Blog',
        element: RenderAuthor,
        roles: [],
        exact: true,
        isAnonymous: true,
    },
    {
        path: '/',
        name: 'Landing',
        exact: true,
        element: Landing,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/contactus',
        name: 'ContactUs',
        exact: true,
        element: ContactUs,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/newsletter/subscriptions/unsubscribe',
        name: 'NewsletterUnsubscribe',
        exact: true,
        element: NewsletterUnsubscribe,
        roles: [],
        isAnonymous: true,
    },
];
const auth = [
    {
        path: '/login',
        name: 'Login',
        exact: true,
        element: Login,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/register',
        name: 'Register',
        exact: true,
        element: Register,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/verify',
        name: 'confirm',
        exact: true,
        element: Confirm,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/confirm',
        name: 'ConfirmSuccess',
        exact: true,
        element: ConfirmSuccess,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/changepassword',
        name: 'ChangePassword',
        exact: true,
        element: ChangePassword,
        roles: [],
        isAnonymous: true,
    },
    {
        path: '/resetpassword',
        name: 'ResetPassword',
        exact: true,
        element: ResetPassword,
        roles: [],
        isAnonymous: true,
    },
];
const faqs = [
    {
        path: '/faqs',
        name: 'FAQs',
        element: FAQs,
        roles: [],
        exact: true,
        isAnonymous: false,
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
const jobs = [
    {
        path: '/jobs',
        name: 'Jobs',
        exact: true,
        element: JobsMain,
        roles: [],
        isAnonymous: true,
    },
];
const subscriptions = [
    {
        path: '/subscriptions',
        name: 'Stripe',
        exact: true,
        element: HasCheckoutButton,
        roles: [],
        isAnonymous: true,
    },
];
const shareStory = [
    {
        path: '/shareStory',
        name: 'ShareStories',
        element: ShareStories,
        roles: [],
        exact: true,
        isAnonymous: false,
    },
];
var allRoutes = [
    ...routes,
    ...aboutUs,
    ...blogs,
    ...privacy,
    ...termsOfService,
    ...auth,
    ...faqs,
    ...jobs,
    ...subscriptions,
    ...shareStory,
    ...errorRoutes,
];
export default allRoutes;
