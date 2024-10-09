import axios from "axios"
import Cookies from "universal-cookie"

const jwtAxios = axios.create()

const cookies = new Cookies(null, {path : '/', maxAge : 60 * 60 * 24 * 7});

/* API 요청 전 헤더에 액세스 토큰을 추가하여 전송 */
const beforeRequest = (config) => {
    const accessToken = cookies.get("accessToken")

    if(!accessToken) throw Error("No Token");
    else config.headers["Authorization"] = "Bearer " + accessToken;

    return config
}

jwtAxios.interceptors.request.use(beforeRequest)

export default jwtAxios