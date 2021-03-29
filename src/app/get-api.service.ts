import { apiUrl } from './../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient ) { }

  login(data: any):Observable<any>
  {
    return this.http.post(`${apiUrl}visits/login`,data);
  }
  loadUsers(token: any):Observable<any>
  {
    const headers = new HttpHeaders({'Authorization':token});
    return this.http.get(`${apiUrl}visits/get_clients`,{headers: headers})
  }
  loadUserDetails(token:any,id:any):Observable<any>
  {
    const headers = new HttpHeaders({'Authorization':token});
    return this.http.get(`${apiUrl}visits/get_client_data/`+id,{headers:headers})
  }
}
