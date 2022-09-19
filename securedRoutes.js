import { lazy } from 'react';
const AddUpdateOrganization = lazy(() => import('../pages/organization/AddUpdateOrganization'));
const AdminDashboard = lazy(() => import('../pages/dashboard/admin/AdminDashboard'));
const AdvertisementsDashboard = lazy(() => import('../pages/advertisements/AdvertisementDashboard'));
const AnalyticsDashboards = lazy(() => import('../pages/dashboard/adminanalytics'));
const BlogsForm = lazy(() => import('../components/blogs/BlogsForm'));
const Contacts = lazy(() => import('../components/contacts/Contacts'));
const DocumentValidation = lazy(() => import('../components/license/DocumentValidation'));
const EditFAQs = lazy(() => import('../pages/faqs/EditFAQs'));
const LicensesDashboardPage = lazy(() => import('../pages/dashboard/adminlicenses/index'));
const FileManager = lazy(() => import('../pages/filemanager/FileManager'));
const HasCheckoutButton = lazy(() => import('../pages/stripe/HasCheckoutButton'));
const SuccessPage = lazy(() => import('../pages/stripe/SuccessPage'));
const JobApply = lazy(() => import('../components/jobsapply/JobApply'));
const JobAttendance = lazy(() => import('../components/jobattendance/JobAttendance'));
const JobAddAttendance = lazy(() => import('../components/jobattendance/AddJob'));
const JobForm = lazy(() => import('../components/adminjobs/JobForm'));
const JobOrganizationAttendance = lazy(() => import('../components/jobattendance/OrganizationAttendance'));
const JobStatus = lazy(() => import('../pages/jobstatus/JobStatus'));
const Licenses = lazy(() => import('../components/license/License'));
const LicenseForm = lazy(() => import('../components/license/LicenseForm'));
const LocationForm = lazy(() => import('../pages/locations/LocationFormPage'));
const Locations = lazy(() => import('../pages/locations/Locations'));
const ManageSubcontractors = lazy(() => import('../pages/dashboard/admin/ManageSubcontractors'));
const ManageUsers = lazy(() => import('../pages/dashboard/admin/ManageUsers'));
const Messages = lazy(() => import('../pages/messages/Messages'));
const NewFAQForm = lazy(() => import('../pages/faqs/NewFAQForm'));
const Newsletters = lazy(() => import('../pages/newsletters/Newsletters'));
const NewsletterSubscribers = lazy(() => import('../pages/newslettersubscribers/NewsletterSubscribers'));
const Organization = lazy(() => import('../pages/organization/OrganizationDashBoard'));
const OrganizationJobAttendance = lazy(() => import('../pages/organization/OrganizationJobAttendance'));
const OrganizationJobAttendanceAdd = lazy(() => import('../pages/organization/OrganizationJobAttendanceAdd'));
const Organizations = lazy(() => import('../pages/organization/Organizations'));
const OrganizationsById = lazy(() => import('../pages/organization/OrganizationsById'));
const PageNotFound = lazy(() => import('../pages/error/PageNotFound'));
const ProfileForm = lazy(() => import('../pages/profile/ProfileForm'));
const QRCodeCheckInOut = lazy(() => import('../components/jobsignin/QRCodeCheckInOut'));
const QRCodeGenerator = lazy(() => import('../components/jobsignin/QrCode'));
const ShareStory = lazy(() => import('../components/sharestory/AddStory'));
const SiteReferenceTotals = lazy(() => import('../pages/SiteReferenceTotals'));
const Subcontractor = lazy(() => import('../pages/subcontractorwizard/SubcontractorWizard'));
const SubcontractorDashboard = lazy(() => import('../pages/dashboard/subcontractor/SubcontractorDashboard'));
const UserProfilePage = lazy(() => import('../pages/profile/UserProfilePage'));
const Surveys = lazy(() => import('../pages/surveys/Surveys'));

const blogRoutes = [
    {
        path: 'blogs/create',
        name: 'Blogs',
        exact: true,
        element: BlogsForm,
        roles: ['Admin'],
        isAnonymous: false,
    },
    {
        path: 'blogs/create/:id',
        name: 'Blogs',
        exact: true,
        element: BlogsForm,
        roles: ['Admin'],
        isAnonymous: false,
    },
];
const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboards',
        icon: 'uil-home-alt',
        header: 'Navigation',
        children: [
            {
                path: '/dashboard/admin',
                name: 'Admin',
                element: AdminDashboard,
                roles: ['Admin', 'SysAdmin'],
                exact: true,
                isAnonymous: false,
                children: [
                    {
                        path: '/dashboard/admin/managesubcontractors',
                        name: 'ManageSubcontractors',
                        element: ManageSubcontractors,
                        roles: ['Admin', 'SysAdmin'],
                        exact: true,
                        isAnonymous: false,
                    },
                    {
                        path: '/dashboard/admin/manageusers',
                        name: 'ManageUsers',
                        element: ManageUsers,
                        roles: ['Admin', 'SysAdmin'],
                        exact: true,
                        isAnonymous: false,
                    },
                ],
            },
            {
                path: '/dashboard/analytics',
                name: 'Analytics',
                element: AnalyticsDashboards,
                roles: ['Admin', 'SysAdmin'],
                exact: true,
                isAnonymous: false,
            },
            {
                path: '/dashboard/organizations',
                name: 'Organizations',
                element: Organization,
                roles: ['OrgAdmin'],
                exact: true,
                isAnonymous: false,
            },
            {
                path: '/dashboard/subcontractors',
                name: 'Subcontractor',
                element: SubcontractorDashboard,
                roles: ['Subcontractor'],
                exact: true,
                isAnonymous: false,
            },
            {
                path: '/dashboard/licenses',
                name: 'Licenses',
                element: LicensesDashboardPage,
                roles: ['Admin'],
                exact: true,
                isAnonymous: false,
            },
        ],
    },
    {
        path: '/pages/profile',
        name: 'User Profile',
        exact: true,
        element: UserProfilePage,
        roles: ["User"],
        isAnonymous: true,
    },
    {
        path: '/pages/profile/create',
        name: 'Profile Form',
        exact: true,
        element: ProfileForm,
        roles: ["User"],
        isAnonymous: false,
    },
    {
        path: '/jobsmanage',
        name: 'Job Manager',
        exact: true,
        element: JobForm,
        roles: ['User'],
        isAnonymous: false,
    },
    {
        path: '/job/jobstatus',
        name: 'Job Status',
        exact: true,
        element: JobStatus,
        roles: ['Subcontractor'],
        isAnonymous: false,
    },
    {
        path: '/newsletters',
        name: 'Newsletters',
        exact: true,
        element: Newsletters,
        roles: ['User'],
        isAnonymous: false,
    },
    {
        path: '/inbox',
        name: 'Messages',
        element: Messages,
        header: 'Navigation',
        roles: ['User'],
        isAnonymous: false,
    },
    {
        path: '/attendance/organization',
        name: 'AttendanceOrg',
        exact: true,
        element: JobOrganizationAttendance,
        roles: ['OrgAdmin', 'Admin'],
        isAnonymous: false,
    },
    {
        path: '/qrcodegenerator',
        name: 'QRCode Generator',
        exact: true,
        element: QRCodeGenerator,
        roles: ['OrgAdmin'],
        isAnonymous: false,
    },
    {
        path: '/attendance/signinout',
        name: 'QRCode SignIn',
        exact: true,
        element: QRCodeCheckInOut,
        roles: ['Employees', 'Subcontractor'],
        isAnonymous: false,
    },
    {
        path: '/attendance/add',
        name: 'AttendanceAdd',
        exact: true,
        element: JobAddAttendance,
        roles: ['OrgAdmin', 'Admin'],
        isAnonymous: false,
    },
    {
        path: '/attendance',
        name: 'Attendance',
        exact: true,
        element: JobAttendance,
        roles: ['Employee', 'Subcontractor'],
        isAnonymous: false,
    },
    {
        path: '/organizations',
        name: 'Organizations',
        element: Organizations,
        roles: ['User'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: '/organizations/add',
        name: 'Organizations',
        element: AddUpdateOrganization,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: '/organizations/edit/:id',
        name: 'Organizations',
        element: AddUpdateOrganization,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: '/organizations/:id',
        name: 'OrganizationsById',
        element: OrganizationsById,
        roles: ['Admin', 'User', 'Subcontractor'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: '/jobs/bids/:id',
        name: 'ApplyId',
        element: JobApply,
        roles: ['User'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: '/advertisements',
        name: 'Advertisements',
        element: AdvertisementsDashboard,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: '/organizations/jobattendance',
        name: 'OrganizationJobAttendance',
        element: OrganizationJobAttendance,
        roles: ['OrgAdmin'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: '/organizations/jobattendance/add',
        name: 'OrganizationJobAttendance',
        element: OrganizationJobAttendanceAdd,
        roles: ['OrgAdmin'],
        exact: true,
        isAnonymous: false,
    },
];
const locations = [
    {
        path: '/locations',
        name: 'Location',
        exact: true,
        element: Locations,
        roles: ['User'],
        isAnonymous: false,
    },
    {
        path: '/locations/edit/:id',
        name: 'LocationForm',
        exact: true,
        element: LocationForm,
        roles: ['User'],
        isAnonymous: false,
    },
    {
        path: '/locations/new',
        name: 'LocationForm',
        exact: true,
        element: LocationForm,
        roles: ['User'],
        isAnonymous: false,
    },
];
const subscriptions = [
    {
        path: '/subscriptions',
        name: 'Stripe',
        exact: true,
        element: HasCheckoutButton,
        roles: ['User'],
        isAnonymous: false,
    },
    {
        path: '/checkout/success',
        name: 'OrderSuccess',
        element: SuccessPage,
        roles: ['User'],
        exact: false,
        isAnonymous: false,
    },
];
const test = [
    {
        path: '/test',
        name: 'Test',
        exact: true,
        element: AnalyticsDashboards,
        roles: ['Fail'],
        isAnonymous: false,
    },
    {
        path: '/secured',
        name: 'A Secured Route',
        exact: true,
        element: AnalyticsDashboards,
        roles: ['Fail'],
        isAnonymous: false,
    },
    {
        path: '/secured2',
        name: 'A Secured Route',
        exact: true,
        element: lazy(() => import('../pages/landing')),
        roles: ['Admin'],
        isAnonymous: false,
    },
    {
        path: '/sitereftotals',
        name: 'Site Reference Totals',
        exact: true,
        element: SiteReferenceTotals,
        roles: ['Admin'],
        isAnonymous: false,
    },
    {
        path: '/filemanager',
        name: 'File Manager',
        element: FileManager,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
];
const contactRoutes = [
    {
        path: '/contacts',
        name: 'Contacts',
        element: Contacts,
        roles: ['User'],
        exact: true,
        isAnonymous: false,
    },
];

const errorRoutes = [
    {
        path: '*',
        name: 'Error - 404',
        element: PageNotFound,
        roles: ['User'],
        exact: true,
        isAnonymous: false,
    },
];
const subcontractorRoute = [
    {
        path: '/subcontractors',
        name: 'Subcontractor Onboarding Wizard',
        element: Subcontractor,
        roles: [],
        exact: true,
        isAnonymous: false,
    },
];

const licensesRoute = [
    {
        path: '/licenses',
        name: 'Licenses',
        element: Licenses,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: 'licenses/validate/:id',
        name: 'Validate',
        element: DocumentValidation,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: 'licenses/new',
        name: 'LicenseForm',
        element: LicenseForm,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
];

const faqs = [
    {
        path: '/faqs/create',
        name: 'NewFAQForm',
        element: NewFAQForm,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
    {
        path: '/faqs/manage',
        name: 'EditFAQs',
        element: EditFAQs,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
];
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

const shareStory = [
    {
        path: '/story/add',
        name: 'ShareStory',
        exact: true,
        element: ShareStory,
        roles: ['Admin', 'User', 'Subcontractor'],
        isAnonymous: false,
    },
];

const surveys = [
    {
        path: '/surveys',
        name: 'Surveys',
        element: Surveys,
        roles: ['Admin'],
        exact: true,
        isAnonymous: false,
    },
];

const allRoutes = [
    ...dashboardRoutes,
    ...contactRoutes,
    ...test,
    ...errorRoutes,
    ...locations,
    ...subcontractorRoute,
    ...subscriptions,
    ...newsletterSubscribers,
    ...faqs,
    ...blogRoutes,
    ...licensesRoute,
    ...shareStory,

    ...surveys,
];
export default allRoutes;
