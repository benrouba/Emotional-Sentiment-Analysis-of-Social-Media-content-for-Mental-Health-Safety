import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, of, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,) { }
  get_with_bearer(url: any): Observable<any> {
    return this.http.get(url, { headers: { "Authorization": "Bearer " + environment.bearer }, observe: "response" }).pipe(
      catchError(this.handleError<any>('Get' + url)));
  }
  post(data: any): Observable<any> {
    return this.http.post("http://localhost:3000/api/analyze", data, { headers: { "Authorization": "Bearer " + environment.bearer }, observe: "response" }).pipe(
      catchError(this.handleError<any>('post')));
  }
  get_with_oauth_1(url: any, str: any) {

    return this.http.get(url, {
      headers: {
        Authorization:
          'OAuth oauth_consumer_key="' + environment.oauth_consumer_key + '",oauth_token="' + environment.oauth_token_secret + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="'+environment.oauth_timestamp+'",oauth_nonce="'+ environment.oauth_nonce+'",oauth_version="1.0",oauth_signature="'+environment.oauth_signature_method+'"'
      }, observe: "response"
    }).pipe(
      catchError(this.handleError<any>('Get')));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.error instanceof ErrorEvent) {
      }
      else {
        switch (error.status) {
          case 0:
            console.log("error")
            break;
          case 400:
            console.log("error")

            break;
          case 403:
            console.log("error")

            break;
          case 401:
            console.log("error")

            break;
          case 404:
            console.log("error")

            break;
          case 500:
            console.log("error")

            break;
          case 504:
            console.log("error")

            break;
        }
      }
      // console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
