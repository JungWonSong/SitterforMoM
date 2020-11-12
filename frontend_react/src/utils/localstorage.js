//꺼내오기
export function getStorageItem(key, initValue) {
    try {
        const item = window.localStorage.getItem(key);
        //console.log("getStorageItem:   ###"+ JSON.parse(item));
        return item ? JSON.parse(item) : initValue;
    } catch (e) {
        console.error(e);
        return initValue;
    }
}

//저장하기
export function setStorageItem(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch(e) {
        console.error(e);
    }
}