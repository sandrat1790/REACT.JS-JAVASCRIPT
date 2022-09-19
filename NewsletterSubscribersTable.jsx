import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../../pages/newslettersubscribers/newslettersubscription.css';

function NewsletterSubscribersTable(props) {
    const aSubscriber = props.cell;

    const onUnsubscribeClicked = (evt) => {
        evt.preventDefault();
        aSubscriber.isSubscribed = false;
        props.onSubscriberClicked(aSubscriber, evt);
    };

    const newDate = moment(aSubscriber.dateCreated).format('YYYY-MM-DD');

    return (
        <React.Fragment>
            <tr>
                <td className="mobile-flex" data-header="Email">
                    {aSubscriber?.email}
                </td>
                <td className="mobile-flex" data-header="Date Subscribed">
                    {newDate}
                </td>
                <td>
                    <Button
                        type="submit"
                        className="btn"
                        data-header="Action"
                        id={aSubscriber.email}
                        onClick={onUnsubscribeClicked}>
                        Unsubscribe
                    </Button>
                </td>
            </tr>
        </React.Fragment>
    );
}

NewsletterSubscribersTable.propTypes = {
    cell: PropTypes.shape({
        email: PropTypes.string.isRequired,
        isSubscribed: PropTypes.bool.isRequired,
        dateCreated: PropTypes.string.isRequired,
    }),
    onSubscriberClicked: PropTypes.func.isRequired,
};
export default NewsletterSubscribersTable;
