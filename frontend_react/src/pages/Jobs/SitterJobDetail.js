import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import {getStorageItem} from 'utils/sessionstorage';


const SitterJobDetail = ({match}) => {
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
    useEffect(() => {
        sendJobData();
        return () => {
        };
      }, []);
    
    const [resData, setResData] = useState();
    const sendJobData = async () => {
        // axios로 통신
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   
            const response = await (await axios.get('/api/sitterJobs/' + match.params.id));
           // console.log('response 확인 ', JSON.stringify(response));
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
            <Link className="mr-auto" to="/Jobs/FindSitter">
                <small> 시터 찾기 ></small> 
            </Link>
            <small>상세보기</small> <br/><br/>
            <span>{resData && resData.title}</span> &nbsp;<br/>
            <span>{resData && resData.contents}</span> &nbsp;<br/>
            <span>{resData && resData.created}</span> &nbsp;<br/>
            <span>{resData && resData.updated}</span> &nbsp;<br/>

        </div>        
    );

}

export default SitterJobDetail;