import React, {useEffect} from 'react';

import axios from 'axios';
import {getStorageItem} from 'utils/sessionstorage';

const GetSitterJobs = () => {

    useEffect(() => {
        sendJobData();
        return () => {
        };
      }, []);

    const sendJobData = async () => {
        
        const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
        // axios로 통신
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   
            const response = await (await axios.get('/api/sitterJobs/'));
            console.log('response 확인 ', JSON.stringify(response));
            const {
                data: resData,
            } = response;
            
             console.log(resData);
             for (let i=0; i<resData.length; i++) {
                console.log(resData[i].id);
                console.log(resData[i].title);
                console.log(resData[i].contents);
             }
            
        } catch (e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
            }
        }
    };

    
    
    return (
        <div>  </div>

        
    );

}

export default GetSitterJobs;