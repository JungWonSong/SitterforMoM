//토큰을 저장하거나 불러오거나 하기 위한 context를 관리하기 위한 파일

import { createContext, useContext } from 'react';
import useReducerWithSideEffects, {
    UpdateWithSideEffect} from 'use-reducer-with-side-effects';
import {setStorageItem, getStorageItem} from 'utils/localstorage';


const AppContext = createContext();

const reducer = (prevState, action) => {
    const {type} = action; //1.토큰을 저장해라, 2.토큰을 삭제해라

    if(type === SET_TOKEN) {
        //토큰을 저장할때
        const {payload:jwtToken} = action;
        const newState = {...prevState, jwtToken, isAuthenticated:true};
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            setStorageItem('jwtToken', jwtToken);
        });
    } else if (type === DEL_TOKEN) {
        //토큰을 삭제할때
        const newState = {...prevState, jwtToken:'',isAuthenticated:false};
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            setStorageItem('jwtToken', '');
            setStorageItem('com.naver.nid.oauth.state_token', '');
        });
    }
};

//1. 액션 타입, 2. 액션 함수, 3. 리듀서 -> state, dispatch
const SET_TOKEN = 'app/set_token';
const DEL_TOKEN = 'app/del_token';

export const setToekn = (token) => ({type:SET_TOKEN, payload:token});
export const delToken = () => ({type:DEL_TOKEN});
export const AppProvider = ({children}) => {
    var jwtToken = getStorageItem('jwtToken', '');

    if(jwtToken.length === 0 ) {
        jwtToken = getStorageItem('com.naver.nid.oauth.state_token', '');
    }
    console.log(jwtToken.length);
    const [store, dispatch] = useReducerWithSideEffects(reducer, {
        jwtToken,
        isAuthenticated: jwtToken.length > 0,
    });
    console.log(store.isAuthenticated);
    return (
        <AppContext.Provider value={{ store, dispatch }}>
            {children}
        </AppContext.Provider>
    );     
}

export const useAppContext = () => useContext(AppContext);