import React from 'react';
import axios from 'axios';
//import { Link, useHistory } from 'react-router-dom';
import {getStorageItem} from 'utils/sessionstorage';

const WriteComment = ({ id }) => {
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
    const loginId = getStorageItem('id');
    //const history = useHistory();
    
    const sendComments = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            await (await axios.post('/momTalks/comment/', formData));
            window.location.replace('/MomTalk/WorryDetail/' + id );
        } catch (e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
            }
        }
    }


    return (
        
        <div>
            <form onSubmit={sendComments}>
                <input type="hidden" className="form-control" name="talk_Id" value={id} />
                <input type="hidden" className="form-control" name="from_userId" value={loginId} />
                <label>내용</label>
                <input type="text" className="form-control" name="comments" />
                <button type="submit" className="btn btn-primary">
                    댓글쓰기
                </button>
            </form>
        </div>
    );

}

export default WriteComment;