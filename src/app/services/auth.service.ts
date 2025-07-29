import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; // URL de votre backend Spring

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // À la réception de la réponse, on stocke le token
        localStorage.setItem('authToken', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    // ... rediriger vers la page de login
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}