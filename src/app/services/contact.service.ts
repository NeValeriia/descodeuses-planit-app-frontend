import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiURL : string = 'http://localhost:8080/api/contact'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.apiURL);
  }
}