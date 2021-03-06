//토큰을 저장하거나 불러오거나 하기 위한 context를 관리하기 위한 파일

import { createContext, useContext } from 'react';
import useReducerWithSideEffects, {
    UpdateWithSideEffect} from 'use-reducer-with-side-effects';
import {setStorageItem, getStorageItem} from 'utils/sessionstorage';


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
    } else if(type === SET_ID) {
        //토큰을 저장할때
        const {payload:id} = action;
        const newState = {...prevState, id, isAuthenticated:true};
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            setStorageItem('id', id);
        });
    } else if (type === DEL_TOKEN) {
        //토큰을 삭제할때
        const newState = {...prevState, jwtToken:'',isAuthenticated:false};
        return UpdateWithSideEffect(newState, (state, dispatch) => {
            setStorageItem('jwtToken', '');
        });
    } 
};

//1. 액션 타입, 2. 액션 함수, 3. 리듀서 -> state, dispatch
const SET_TOKEN = 'app/set_token';
const SET_ID = 'app/set_id';
const DEL_TOKEN = 'app/del_token';

export const setId = (id) => ({type:SET_ID, payload:id});
export const setToekn = (token) => ({type:SET_TOKEN, payload:token});
export const delToken = () => ({type:DEL_TOKEN});
export const AppProvider = ({children}) => {
    var jwtToken = getStorageItem('jwtToken', '');

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