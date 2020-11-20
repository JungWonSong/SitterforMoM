import React, {useEffect} from 'react';

import axios from 'axios';
import {getStorageItem} from 'utils/localstorage';

const GetSitterJobs = () => {

    
    const sendJobData = async () => {
        
        const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
        // axios로 통신
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            const response = await (await axios.get('/api/sitterJobs/'));
            console.log('response 확인 ', JSON.stringify(response));
            
        } catch (e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
            }
        }
    };

    useEffect(() => {
        sendJobData();
      }, []);

    
    return (
    <div className="container">
        <button onClick={sendJobData}></button>
    </div>
    );

}

export default GetSitterJobs;