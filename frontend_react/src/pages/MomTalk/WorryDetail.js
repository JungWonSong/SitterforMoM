import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {getStorageItem} from 'utils/sessionstorage';

import WriteComment from 'components/MomTalk/WriteComment';
import GetComments from 'components/MomTalk/GetComments';

const WorryDetail = ({match}) => {
    const [resData, setResData] = useState();
    const [sameAuthor, setSameAuthor] = useState();
    const loginId = getStorageItem('id');
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
            const response = await (await axios.get('/momTalks/worry/' + match.params.id));
            //console.log('response 확인 ', JSON.stringify(response));
            const {
                data: resData,
            } = response;
            setResData(resData);
            if(resData && resData.authorId) {
                if(loginId === resData.authorId){
                    setSameAuthor(true);
                }
            }
        } catch (e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
            }
        }        
    };

    

    return (
        <div>
            <Link className="mr-auto" to="/MomTalk/Worry">
                <small> 맘 상담방 ></small> 
            </Link>
            <small>육아 고민상담</small> <br/><br/>

            {resData && resData.title}
            {resData && resData.contents}
            {sameAuthor ? (<div><p>수정하기</p></div>) : ( <div><WriteComment id={match.params.id} /></div> )}
            <GetComments id={match.params.id} />
        </div>
    );

}

export default WorryDetail;

