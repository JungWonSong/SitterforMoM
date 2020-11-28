import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {getStorageItem} from 'utils/sessionstorage';
import Toast from 'react-bootstrap/Toast';

const MessageInBox = () => {
    const loginId = getStorageItem('id');
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
    const [resData, setResData] = useState();

    useEffect(() => {
        getMessage();
        return () => {
        };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const getMessage = async (e) => {
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   
            const response = await (await axios.get('/sitterJobs/message/?to_userId=' + loginId));
            //console.log('response 확인 ', JSON.stringify(response));
            const {
                data: resData,
            } = response;
            console.log('length:', resData.length);
            setResData(resData);
        } catch (e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
            }
        }
    };

    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'relative',
                minHeight: '200px',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}
            >
            
            {resData && resData.map(data =>
                <Toast key={data.id}>
                    <Toast.Header>
                    <strong className="mr-auto">{data.title}</strong>
                    <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>{data.comments}</Toast.Body>
                </Toast>
            )}
            </div>

        </div>
        
    );

}

export default MessageInBox;