import axios from 'axios';
import { API_HOST_PREFIX, onGlobalSuccess, onGlobalError } from './serviceHelpers';
const api = API_HOST_PREFIX + '/api/newsletter/subscriptions';

const AddEmail = (payload) => {
    const config = {
        method: 'POST',
        url: api,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const GetSubscribers = () => {
    const config = {
        method: 'GET',
        url: `${api}/subscribers`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const UpdateSubscriber = (payload) => {
    const config = {
        method: 'PUT',
        url: `${api}/${payload.email}`,
        withCredentials: true,
        crossdomain: true,
        data: payload,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const newsletterService = { AddEmail, GetSubscribers, UpdateSubscriber };

export default newsletterService;
