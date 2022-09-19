import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import logger from 'sabio-debug';
import newsletterSubscriptionSchema from '../../schemas/newsletterSubscriptionSchema';
import newsletterSubscriptionService from '../../services/newsletterSubscriptionService';
import '../../pages/newslettersubscribers/newslettersubscription.css';
import toastr from 'toastr';

const _logger = logger.extend('NewsletterSignUp');

function NewsletterSubscription() {
    const [formData, setFormData] = useState({
        email: '',
        isSubscribed: true,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => {
            let data = { ...prevState };
            data[name] = value;
            return data;
        });
    };

    const handleSubmit = () => {
        newsletterSubscriptionService.AddEmail(formData).then(onSubmitSuccess).catch(onSubmitError);
    };

    const onSubmitSuccess = (response) => {
        _logger('onSubmitSuccess', response.data);
        toastr.success('email successfully added');
        window.scrollTo(0, 0);
    };

    const onSubmitError = (err) => {
        _logger('onSubmitError', err);
        toastr.error('error: unable to complete request');
    };

    return (
        <React.Fragment>
            <Container>
                <div className="d-flex" id="newsletSignUpFooter">
                    <Formik
                        enableReinitialize={true}
                        initialValues={formData}
                        onSubmit={handleSubmit}
                        validationSchema={newsletterSubscriptionSchema}>
                        <Form className="row g-3 newsletSignUpForm">
                            <div className="col-auto newsletSignUp">Subscribe for the latest news and update </div>
                            <div className="col-auto">
                                <Field
                                    type="email"
                                    name="email"
                                    className="form-control-sm"
                                    placeholder="email@example.com"
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="email" component="div" className="has-error" />
                            </div>
                            <div className="col-auto">
                                <Button className="btn-sm newsletSubscribeBtn" type="submit">
                                    Subscribe
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default NewsletterSubscription;
