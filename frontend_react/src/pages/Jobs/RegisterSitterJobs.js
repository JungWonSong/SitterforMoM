import React from 'react';
import { Link } from 'react-router-dom';

import WriteSitterJobs from 'components/Jobs/WriteSitterJobs';

const RegisterSitterJobs = () => {

      

    return (
        <div className="container">
            <Link className="mr-auto" to="/Jobs/FindSitter">
                <small> 시터 찾기 ></small> 
            </Link>
            <small>시터 일자리 등록</small>
            
            
            <WriteSitterJobs/>
        </div>
    );

}

export default RegisterSitterJobs;