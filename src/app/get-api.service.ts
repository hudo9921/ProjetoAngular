import { loginUrl } from './../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient ) { }

  login(data: any):Observable<any>
  {
    return this.http.post(`${loginUrl}visits/login`,data);
  }
}
