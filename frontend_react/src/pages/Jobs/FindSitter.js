import React , { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import KakaoMap from 'components/KakaoMap';
import GetSitterJobs from 'components/Jobs/GetSitterJobs';

const FindSitter = () => {
    const [mapView, setMapView] = useState(true);
    const changeListView = () => {
        setMapView(false);
    }
    
    const changeMapView = () => {
        setMapView(true);
    }
    return (
        <div>
        <Link className="mr-auto" to="/Jobs/FindSitter">
            <small> 시터 찾기 ></small> 
        </Link>
            <Container>
                    <h1>내 집 주변 시터 일자리</h1>
                    <p>
                        회원가입과 안심인증을 한 뒤에는 서비스를 무료로 이용 할 수 있습니다.
                        집 주변의 시터 구인 구직 정보를 한꺼번에 볼 수 있습니다.
                        원하는 일자리나 시터에게 메시지를 보내 보세요~
                    </p>

                    <Link className="mr-auto" to="/Jobs/RegisterSitterJobs">
                        시터 일자리 등록
                    </Link>
            
            { mapView ?
                (
                    <div>
                        <Button  onClick={changeListView}>목록으로 보기</Button>
                        
                    </div>
                    
                ) :
                (
                    <div>
                        <Button  onClick={changeMapView}>지도로 보기</Button>
                        <GetSitterJobs/>
                    </div>
                    
                )
            
            }            
            </Container>
                
        
        </div>
    );

}

export default FindSitter;