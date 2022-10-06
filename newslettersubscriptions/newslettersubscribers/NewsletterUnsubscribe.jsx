import React, { useState } from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import newsletterSubscriptionSchema from '../../schemas/newsletterSubscriptionSchema';
import newsletterService from '../../services/newsletterSubscriptionService';
import toastr from 'toastr';
import logger from 'sabio-debug';
import '../../pages/newslettersubscribers/newslettersubscription.css';
import swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function NewsletterUnsubscribe() {
    const _logger = logger.extend('NewsletterUnsubscribe');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        isSubscribed: false,
    });
    _logger(formData, setFormData);

    const unsubscribeClicked = (values) => {
        _logger(values);
        newsletterService.UpdateSubscriber(values).then(onUnsubscribeSuccess(values)).catch(onUnsubscribeError);
    };

    const onUnsubscribeSuccess = (values) => {
        _logger('onUnsubscribeSuccess', values);
        swal.fire('Unsubscribed!', `${values.email} has been removed from newsletter subscriptions`, 'success');
        navigate('/');
    };

    const onUnsubscribeError = (err) => {
        _logger('onUnsubscribeError', err);
        toastr.error('error: unable to complete request');
    };

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col align="center">
                        <Card className="newsletterUnsubscribersCard">
                            <Card.Body>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={formData}
                                    onSubmit={unsubscribeClicked}
                                    validationSchema={newsletterSubscriptionSchema}>
                                    <Form>
                                        <h3>Unsubscribe</h3>
                                        <div className="col-md-12">
                                            Are you sure you want to unsubscribe from all newsletter communications?
                                        </div>
                                        <div className="col-md-8 newsletUnsubscribeForm">
                                            <ErrorMessage name="email" component="div" className="has-error" />
                                            <Field
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                        <div className="newsletterUnsubscribeButton">
                                            <Button className="btn" type="submit">
                                                Yes, unsubscribe
                                            </Button>
                                        </div>
                                    </Form>
                                </Formik>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col>
                    <div className="mt-5">
                        <p className="text-muted mt-4 text-center mb-0">
                            © 2018 - 2022 Tekton: Design and coded by Sabio
                        </p>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default NewsletterUnsubscribe;
