import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import {getStorageItem} from 'utils/sessionstorage';

function Apply ({match}) {
    const history = useHistory();
    const jobId = match.params.id;
    const userId = getStorageItem('id');
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
    const [resData, setResData] = useState();
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
            const response = await (await axios.get('/sitterJobs/findSitter/' + match.params.id));
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
    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            const response = await (await axios.post('/api/message/', formData));
            const {
                data: { jobid: jobidT }
            } = response;
            history.push('/Jobs/SitterJobDetail/' + jobidT );
        } catch(e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
                alert(data);
            }
        }
        
    }

    return (
        <div>
            <Link className="mr-auto" to="/Jobs/FindSitter">
                <small> 시터 찾기 ></small> 
            </Link>
            <Link className="mr-auto" to={`/Jobs/SitterJobDetail/${jobId}`}>
                <small> {resData && resData.title} ></small> 
            </Link>
            <small>시터 지원하기</small> <br/><br/>

            <form onSubmit={sendMessage}>
                <input type="hidden" className="form-control" name="is_read" value="false" />
                <input type="hidden" className="form-control" name="jobid" value={jobId} />
                <input type="hidden" className="form-control" name="to_userId" value={resData && resData.authorId} />
                <input type="hidden" className="form-control" name="from_userId" value={userId} />
                <label>제목</label>
                <input type="text" className="form-control" name="title" />
                <label>내용</label>
                <input type="text" className="form-control" name="comments" />
                <button type="submit" className="btn btn-primary">
                    저장하기
                </button>
            </form>
        </div>
    );
}

export default Apply;