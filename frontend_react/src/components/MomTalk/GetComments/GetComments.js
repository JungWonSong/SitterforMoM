import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {getStorageItem} from 'utils/sessionstorage';

import Comment from 'components/MomTalk/Comment';

const GetComments = ({id}) => {
    const [resData, setResData] = useState();
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');

    useEffect(() => {
        getData();
        return () => {
        };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const getData = async (e) => {
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   
            const response = await (await axios.get('/momTalks/comment/?talk_Id=' + id));
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
                <Comment key={data.talk_Id}
                         userId={data.from_userId}
                         comments={data.comments} />
            )}
        </div>
    );

}

export default GetComments;
