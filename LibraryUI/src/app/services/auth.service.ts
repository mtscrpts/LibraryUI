import { Injectable } from "@angular/core";
import { GET_USER_NAME, LOGIN } from "../../api";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }
  
    login(body: any): Observable<any> {
        return this.http.post<any>(LOGIN, body);
    }

    getUserName(): Observable<any> {
        return this.http.get<any>(GET_USER_NAME);
    }
    
    check(): boolean {
        return !! (localStorage.getItem('token'));
    }
    
    token(): string {
        return 'Bearer ' + localStorage.getItem('token');
    }
    
    // expires(): any {
    //     return JSON.parse(localStorage.getItem('expires'));
    // }
    
    setToken(token: any) {
        localStorage.setItem('token', token.token);
    }
    
    // setExpires(token: Token) {
    //     localStorage.setItem('expires', JSON.stringify(token.expires));
    // }
    
    // setExpiresIn(token: Token) {
    //     localStorage.setItem('expiresIN', JSON.stringify(token.expires_in));
    // }
    
    // setExpiredAt(token: Token) {
    //     let date = convertToUTCTimeZone(Date());
    //     let expirationDate:any =  new Date(date);
    //     expirationDate.setSeconds(expirationDate.getSeconds() + token.expires); 
    //     expirationDate = moment(convertToUTCTimeZone(expirationDate)).format('YYYY-MM-DD HH:mm:ss A');
    //     localStorage.setItem('expired_at', expirationDate);
    // }
    
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // localStorage.removeItem('expires');
        // localStorage.removeItem('expired_at');
    }

}