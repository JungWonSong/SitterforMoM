import React from 'react';

import axios from 'axios';
import {getStorageItem} from 'utils/sessionstorage';

const WriteSitterJobs = () => {

    const sendJobData = async (e) => {
        e.preventDefault();
        // formdata 정리
        const formData = new FormData(e.target);
        console.log('form data 확인', JSON.stringify(formData));
        console.log(getStorageItem('jwtToken'));
        const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
        // axios로 통신
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            const response = await (await axios.post('/api/sitterJobs/', formData));
            
            
            console.log('response 확인 ', JSON.stringify(response));
            
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
                <label>제목</label>
                <input type="text" className="form-control" name="title" />
            </div>
            <div className="form-group">
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