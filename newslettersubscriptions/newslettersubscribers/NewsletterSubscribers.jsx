import React, { useCallback, useEffect, useState } from 'react';
import newsletterService from '../../services/newsletterSubscriptionService';
import NewsletterSubscribersTable from '../../components/newslettersubscriptions/NewsletterSubscribersTable';
import debug from 'sabio-debug';
import { Card, Col, Row, Table } from 'react-bootstrap';
import toastr from 'toastr';
import '../../pages/newslettersubscribers/newslettersubscription.css';

function NewsletterSubscribers() {
    const _logger = debug.extend('NewsletterSubscribers');
    const [cells, setCells] = useState({
        arrayOfSubscribers: [],
        subscribersComponents: [],
    });

    const [searchField, setSearchField] = useState('');
    const [emailResults, setEmailResults] = useState({});

    const searchHandler = (e) => {
        e.preventDefault();
        let arrayOfEmails = cells.arrayOfSubscribers;

        const keyword = e.target.value;
        setSearchField(keyword);

        if (keyword.length > -1) {
            const results = arrayOfEmails.filter((aSubscriber) => {
                return aSubscriber.email.includes(keyword);
            });
            setEmailResults((...prevState) => {
                const newPageData = { ...prevState };
                newPageData.arrayOfSubscribers = results;
                newPageData.subscribersComponents = results.map(mapSubcriber);
                return newPageData;
            });
            _logger(results);
        } else {
            return false;
        }
    };

    const mapSubcriber = (aSubscriber) => {
        return (
            <NewsletterSubscribersTable
                cell={aSubscriber}
                key={aSubscriber.email}
                onSubscriberClicked={onUnsubscribeRequested}
            />
        );
    };

    useEffect(() => {
        newsletterService.GetSubscribers().then(onGetSubscribersSuccess).catch(onGetSubscribersError);
    }, []);

    const onGetSubscribersSuccess = (response) => {
        _logger('Response', response);
        let arrayOfRecords = response.items;

        setCells((...prevState) => {
            const pageData = { ...prevState };
            pageData.arrayOfSubscribers = arrayOfRecords;
            pageData.subscribersComponents = arrayOfRecords.map(mapSubcriber);
            return pageData;
        });
    };

    const onGetSubscribersError = (err) => {
        toastr.error('Error: Records not found');
        _logger(err);
    };

    const onUnsubscribeRequested = useCallback((subscriber) => {
        _logger('removing', subscriber);
        const handler = getUnsubscribeSuccessHandler(subscriber.email);
        newsletterService.UpdateSubscriber(subscriber).then(handler).catch(onUnsubscribeError);
    }, []);

    const getUnsubscribeSuccessHandler = (emailTobeRemoved) => {
        _logger('onUnsubscribeSuccess', emailTobeRemoved);
        toastr.success('successfully unsubscribed');
        return () => {
            setCells((prevState) => {
                const pageData = { ...prevState };
                pageData.arrayOfSubscribers = [...pageData.arrayOfSubscribers];

                const idxOf = pageData.arrayOfSubscribers.findIndex((subscriber) => {
                    let result = false;

                    if (subscriber.email === emailTobeRemoved) {
                        result = true;
                    }
                    return result;
                });
                if (idxOf >= 0) {
                    pageData.arrayOfSubscribers.splice(idxOf, 1);
                    pageData.subscribersComponents = pageData.arrayOfSubscribers.map(mapSubcriber);
                }
                return pageData;
            });
        };
    };

    const onUnsubscribeError = (err) => {
        _logger('onUnsubscribeError', err);
        toastr.error('action error');
    };

    return (
        <React.Fragment>
            <Row className="justify-content-center">
                <Col>
                    <Card className="newsletterSubscribersTable">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h2 className="header-title">Newsletter Subscribers</h2>
                                </Col>
                                <Col>
                                    <div className="search-box">
                                        <span className="d-flex align-items-center">
                                            Search :{' '}
                                            <input
                                                className="form-control w-auto ms-1"
                                                onChange={searchHandler}
                                                value={searchField}
                                                placeholder="search by email"
                                            />
                                        </span>
                                    </div>
                                </Col>
                                <Table className="mb-0">
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>Date Subscribed</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>{emailResults.subscribersComponents || cells.subscribersComponents}</tbody>
                                </Table>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default NewsletterSubscribers;
