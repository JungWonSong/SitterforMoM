import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {getStorageItem} from 'utils/sessionstorage';


const SitterJobDetail = ({match}) => {
    
    useEffect(() => {
        sendJobData();
        return () => {
        };
      }, []);
    
    const [resData, setResData] = useState();
    const sendJobData = async () => {
    
        const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
        // axios로 통신
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   
            const response = await (await axios.get('/api/sitterJobs/' + match.params.id));
            //console.log('response 확인 ', JSON.stringify(response));
            const {
                data: resData,
            } = response;
            setResData(resData);
            //console.log(resData.id);
           // console.log(resData.title);
           // console.log(resData.contents);
        } catch (e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
            }
        }
    };

    
    
    return (
        <div> 
            {resData.title}
            {resData.contents}
            {resData.created}
            {resData.updated}
        </div>        
    );

}

export default SitterJobDetail;