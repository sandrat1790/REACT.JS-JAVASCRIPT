import * as Yup from 'yup';

const newsletterSubscriptionSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});

export default newsletterSubscriptionSchema;
