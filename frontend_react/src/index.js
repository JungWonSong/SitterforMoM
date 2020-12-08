import React from 'react';
import ReactDOM from 'react-dom';

// css framework를 사용할 때 index.js에서 임포트 한번만 하면 전체에서 사용 가능하다.
import './custom.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';

import PageRouter from './PageRouter';
import { AppProvider } from 'store';


// redux - store
ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <PageRouter />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
