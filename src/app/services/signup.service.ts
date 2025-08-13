import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private http: HttpClient) {}

  register(data: { irstname: string; 
    lastname: string; 
    username: string; 
    password: string; 
    gender: string  }) {
    return this.http.post(environment.apiUrl+'/auth/signup', data);
  }
}

