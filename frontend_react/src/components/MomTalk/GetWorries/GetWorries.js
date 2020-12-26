import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {getStorageItem} from 'utils/sessionstorage';

import Worry from 'components/MomTalk/Worry';

function GetWorries() {
    const [resData, setResData] = useState();
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
    const history = useHistory();
    useEffect(() => {
        getData();
        return () => {
        };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    
    const getData = async (e) => {
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   
            const response = await (await axios.get('/api/momTalks/worry/'));
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
            alert("로그인 하세요.");
            history.push('/accounts/signin');
        }        
    };
    return (
        <div>
            {resData && resData.map(data =>
                <Worry key={data.id} id={data.id} title={data.title} />
            )}
        </div>
    );

}

export default GetWorries;