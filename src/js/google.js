/* Google 라이브러리 사용 JS */
export const loginWithGoogle = () => {
    const clientId = "316275300590-5ca30g48v74pa4847gs9tgaj1jafcshu.apps.googleusercontent.com";
    const redirectUri = "http://localhost:8080/googleLogin";
    const scope = "email profile";
    const responseType = "token";

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${clientId}&` +
        `redirect_uri=${redirectUri}&` +
        `response_type=${responseType}&` +
        `scope=${scope}`;
  
    window.location.href = authUrl;
}