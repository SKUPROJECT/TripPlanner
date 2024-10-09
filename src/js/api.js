import axios from 'axios'
import jwtAxios from './jwt';
import router from '@/router/index'
import { saveToken } from '@/js/cookie'
import Cookies from 'universal-cookie';

const url = "http://localhost:9999/";

const cookies = new Cookies(null, {path : '/', maxAge : 60 * 60 * 24 * 7});

/* 외부 모듈을 사용하기 위한 export */
export const login = async (id, pw) => {
    const path = url + "api/v1/member/token";
    const formData = new FormData();
    formData.append('id', id);
    formData.append('pw', pw);

    await axios.post(path, formData)
    .then(response => {

        /* 로그인 성공 시 토큰을 cookies에 저장 */
        saveToken("accessToken", response.data.accessToken);
        saveToken("refreshToken", response.data.refreshToken);
        saveToken("id", id);

        /* 저장 후 페이지 이동 */
        router.push('myPage');
    })
    .catch(error => {
        if (error.response.status === 401) {
            alert("아이디와 비밀번호가 일치하지 않습니다.");
        } else if(error.response.status === 404){
            alert("아이디가 존재하지 않습니다.");
        } else{
            alert("로그인에 실패했습니다.");
        }
    });
}

export const refresh = async () => {
    const path = url + "api/v1/member/refresh";
    const formData = new FormData();
    formData.append('id', cookies.get("id"));
    formData.append('refreshToken', cookies.get("refreshToken"));

    await jwtAxios.post(path, formData)
    .then(response => {
        saveToken("accessToken", response.data.accessToken);
        saveToken("refreshToken", response.data.refreshToken);
    })
    .catch(error => {
        if (error.response.status === 400) {
            /* 로그아웃 처리 (로그인 페이지 이동) */
            router.push('/');
        }
    });
}