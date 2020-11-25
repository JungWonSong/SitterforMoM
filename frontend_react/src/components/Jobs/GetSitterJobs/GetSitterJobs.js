import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {getStorageItem} from 'utils/sessionstorage';

import SitterJob from 'components/Jobs/SitterJob';

const GetSitterJobs = () => {
    
    useEffect(() => {
        getJobData();
        return () => {
        };
      }, []);
    
    const [resData, setResData] = useState();
    const getJobData = async () => {
    
        const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
        // axios로 통신
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   
            const response = await (await axios.get('/api/findSitter/'));
            //console.log('response 확인 ', JSON.stringify(response));
            const {
                data: resData,
            } = response;
            setResData(resData);
            
            
        } catch (e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
            }
        }
    };
    
    return (
        <div> 
            {resData && resData.map(data =>
                <SitterJob key={data.id} id={data.id} title={data.title} />
            )}
        </div>        
    );

}

export default GetSitterJobs;