import Cookies from "universal-cookie"

const cookies = new Cookies(null, {path : '/', maxAge : 60 * 60 * 24 * 7});

export const saveToken = (tokenName, tokenValue) => {
    cookies.set(tokenName, tokenValue);
}