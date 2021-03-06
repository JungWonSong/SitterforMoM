/*global Quill */
import React, {useEffect} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import {getStorageItem} from 'utils/sessionstorage';
import { Card, CardBody, Form, FormInput, Button } from "shards-react";


const WriteWorry = () => {
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');
    //const userId = getStorageItem('id');
    const history = useHistory();
    //const [contentValue, setContentValue] = useState('test');
    var quill = null;
    useEffect(() => {
        if(quill === null) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            quill = new Quill('#editor', {
            theme: 'snow'
          });
        }
        
    
      return () => {
      };
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const sendMessage = async (e) => {
        e.preventDefault();
        try {

           let formData = new FormData(); 
           formData.append('authorId', getStorageItem('id')); 
           formData.append('title', document.getElementById("title").value); 
           formData.append('contents',quill.root.innerHTML);
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            const response = await (await axios.post('/api/momTalks/worry/', formData));
            //console.log(response);
            const {
                data: { id: idT }
            } = response;
            history.push('/MomTalk/WorryDetail/' + idT );
        } catch(e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
                alert("로그인 하세요.");
                history.push('/accounts/signin');
            }
        }
        
    }

    return (
        <div>
            <Link className="mr-auto " to="/MomTalk/Worry">
                <small className="small"> 맘 상담방 ></small> 
            </Link>
            <small>글 쓰기</small> <br/><br/>
            
            <h3>육아고민 상담받기</h3>
            <p>육아를 하면서 생기는 고민들은 누가 가장 속시원히 답변 해 줄까요? <br/>
                바로 비슷한 경험을 한 사람들입니다.
                엄마들의 공간에서 비슷한 고민을 이미 경험한 엄마들에게 상담을 받아 보세요~ <br/>
                <small> 상담내용은 익명으로 표시됩니다.</small>
            </p>
            <Card small className="mb-3">
                <CardBody>
                    <Form className="add-new-post" onSubmit={sendMessage}>
                    <FormInput size="lg" className="mb-3" placeholder="제목" id="title" />
                    <div id="editor">
                    </div>
                    <Button type="submit"  size="sm" className="ml-auto">
                         저장하기
                    </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );

}

export default WriteWorry;