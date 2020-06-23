import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const TOKEN = "";
export const expiration = "";

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    executeJwtAuthenticationService(username, password) {
        console.log(username);
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    registerSuccessfulLoginForJwt(username, token, expires) {
        token = 'Bearer ' + token;
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USERNAME",username);
        var date = new Date();
        date.setSeconds(date.getSeconds() + expires);
        console.log(date);
        localStorage.setItem("EXPIRES",date);
        this.setupAxiosInterceptors(token)
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }


    logout() {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("USERNAME");
    }

    isUserLoggedIn() {
        if(localStorage.getItem("TOKEN") === null)
            return false;
        return true;
    }

    getLoggedInUserName() {
        let user = localStorage.getItem("USERNAME");
        if ( user === null) return '';
        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                console.log(config.headers);
                console.log(token);
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                    console.log(token);
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()