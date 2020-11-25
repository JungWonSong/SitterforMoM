import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import {getStorageItem} from 'utils/sessionstorage';
import Button from 'react-bootstrap/Button';

const SitterJobDetail = ({match}) => {
    const [sameAuthor, setSameAuthor] = useState();
    const [resData, setResData] = useState();
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
    const loginId = getStorageItem('id');
    
    useEffect(() => {
        getJobData();
        return () => {
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
       
    const getJobData = async (e) => {
        // axios로 통신
        
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;   
            const response = await (await axios.get('/api/findSitter/' + match.params.id));
           // console.log('response 확인 ', JSON.stringify(response));
            const {
                data: resData,
            } = response;
            setResData(resData);
            if(resData && resData.authorId) {
                if(loginId === resData.authorId){
                    setSameAuthor(true);
                }
            }
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
            {sameAuthor ? (<Button variant="Primary">수정하기</Button>) 
                        : (<Link className="mr-auto" to={`/Jobs/Apply/${resData && resData.id}`}>지원하기</Link>)}

            <br/><br/>
            <span>{resData && resData.title}</span> &nbsp;<br/>
            <span>{resData && resData.authorId}</span> &nbsp;<br/>
            <span>{resData && resData.location}</span> &nbsp;<br/>
            <span>{resData && resData.payment_type}</span> &nbsp;<br/>
            <span>{resData && resData.kids_ages}</span> &nbsp;<br/>
            <span>{resData && resData.pay_per_hour}</span> &nbsp;<br/>
            <span>{resData && resData.work_time_per_day}</span> &nbsp;<br/>
            <span>{resData && resData.work_weeks}</span> &nbsp;<br/>
            <span>{resData && resData.work_start_time}</span> &nbsp;<br/>
            <span>{resData && resData.work_end_time}</span> &nbsp;<br/>
            <span>{resData && resData.work_type}</span> &nbsp;<br/>
            <span>{resData && resData.cctv_yn}</span> &nbsp;<br/>
            <span>{resData && resData.send_pic_yn}</span> &nbsp;<br/>
            <span>{resData && resData.required_security_level}</span> &nbsp;<br/>
            <span>{resData && resData.required_conditions}</span> &nbsp;<br/>
            <span>{resData && resData.contents}</span> &nbsp;<br/>
            <span>{resData && resData.created}</span> &nbsp;<br/>
            <span>{resData && resData.updated}</span> &nbsp;<br/>

        </div>        
    );

}

export default SitterJobDetail;