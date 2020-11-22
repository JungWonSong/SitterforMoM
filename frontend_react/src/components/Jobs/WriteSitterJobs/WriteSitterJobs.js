import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import axios from 'axios';

import {getStorageItem} from 'utils/sessionstorage';

const WriteSitterJobs =  () => {
    const history = useHistory();
    const [currentId, setId] = useState();
    const [username, setUsername] = useState();
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async ()  => {
        const id = getStorageItem('id');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        const response = await axios.get('/accounts/userdetail/' + id);
        //console.log(response);
        const {
            data: { id: currentId,
                    username: currentUserName }
        } = response;
        setId(currentId);
        setUsername(currentUserName);
        console.log("author2:" + currentUserName);
        
        return () => {
        };
      }, [currentId]);

    const sendJobData = async (e) => {
        e.preventDefault();
        // formdata 정리

        const formData = new FormData(e.target);
        //console.log('form data 확인', JSON.stringify(formData));
        //console.log(getStorageItem('jwtToken'));
        
        // axios로 통신
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            const response = await (await axios.post('/api/sitterJobs/', formData));
            //console.log( response);
            const {
                data: { id: currentId }
            } = response;
           history.push('/Jobs/SitterJobDetail/' + currentId );
        } catch (e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
            }
        }
    };

    return (
        <div className="container">
        <form onSubmit={sendJobData}>
            <div className="form-group">
                <input type="hidden" className="form-control" name="authorId" value={currentId} />
                <input type="hidden" className="form-control" name="username" value={username} />
                <label>제목</label>
                <input type="text" className="form-control" name="title" />
                <label>자녀 수</label>
                <input type="number" className="form-control" name="numbers" />
                <label>요구사항</label>
                <textarea className="form-control"
                    name="contents"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
                저장하기
            </button>
        </form>
    </div>
    );

}

export default WriteSitterJobs;