/* Google 라이브러리 사용 */
export const googleInit = () => {
    let google = window.google;
    google.accounts.id.initialize({
      client_id: "316275300590-5ca30g48v74pa4847gs9tgaj1jafcshu.apps.googleusercontent.com",
      callback: googleCallback,
    });

    google.accounts.id.renderButton(document.getElementById("G_OAuth_btn"), {
      theme: "outline",
      size: "large",
    });
}

const googleCallback = (res) => {
    console.log("res: ", res);

    this.googleUser = decodeJWT(res.credential);
    console.log(this.googleUser);
}

const base64UrlDecode = (base64Url) => { /* 한글 디코딩 함수 */
    const base64 = base64Url
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const decoded = atob(base64);
    return decodeURIComponent(escape(decoded));
}

const decodeJWT = (token) => {
    const base64Url = token.split('.')[1];
    const jsonPayload = base64UrlDecode(base64Url);
    return JSON.parse(jsonPayload);
}