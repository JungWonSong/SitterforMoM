import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import axios from 'axios';

import {getStorageItem} from 'utils/sessionstorage';

const WriteSitterJobs =  () => {
    const history = useHistory();
    const [userId, setId] = useState();
    //const [username, setUsername] = useState();
    const AUTH_TOKEN = 'Token ' + getStorageItem('jwtToken');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async ()  => {
        const id = getStorageItem('id');
        setId(id);
        
        
        return () => {
        };
      }, []);

    function openZipCode() {
        // eslint-disable-next-line no-undef
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                document.getElementById("location").value = data.query;
                console.log(data);
            }
        }).open();
    }

    const sendJobData = async (e) => {
        e.preventDefault();
        // formdata 정리

        const formData = new FormData(e.target);
        //console.log('form data 확인', JSON.stringify(formData));
        //console.log(getStorageItem('jwtToken'));
        
        // axios로 통신
        try {
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            const response = await (await axios.post('/sitterJobs/findSitter/', formData));
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
                <input type="hidden" className="form-control" name="authorId" value={userId} />
                
                <label>돌봄지역</label>
                <input type="text" onClick={openZipCode} className="form-control" id="location" name="location"  placeholder="지역명을 검색하세요"/>
                <label>자녀 나이</label>
                <input type="text" className="form-control" name="kids_ages" />

                <label>급여지급 방식</label>
                <input type="text" className="form-control" placeholder="M or W or D" name="payment_type" />
                <label>시급</label>
                <input type="number"  name="pay_per_hour" /> 

                <label>희망 근무 시작일</label>
                <input type="text"  placeholder="표"  name="work_start_date" />
                <label>월화수목금토일</label>
                <input type="text"  placeholder="표"  name="work_weeks" /> 
                <label>일 시작 시간</label>
                <input type="number" placeholder="표"   name="work_start_time" /> 
                <label>일 끝나는 시간</label>
                <input type="number" placeholder="표"   name="work_end_time" /> 
                <label>하루 중 일하는 시간</label>
                <input type="number" placeholder="자동 일당계산"  name="work_time_per_day" /> 
                <label>하는 일 종류</label>
                <input type="text" placeholder="책읽기, 놀이터가기, 아이랑 함께 돌보기" className="form-control" name="work_type" />

                <label>CCTV 여부</label>
                <input type="number"   name="cctv_yn" /> <br/>
                <label>아이 사진 전송 여부</label>
                <input type="number"   name="send_pic_yn" /> <br/>
                <label>안심인증 레벨</label>
                <input type="number" name="required_security_level" /> <br/>

                <label>제목</label>
                <input type="text" className="form-control" name="title" />
                <label>필수 요구사항</label>
                <textarea className="form-control"
                    name="required_conditions"></textarea>
                <label>추가 요구사항</label>
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