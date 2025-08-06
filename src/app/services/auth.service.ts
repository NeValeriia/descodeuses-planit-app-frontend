import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl+'/auth'; // URL de votre backend Spring

  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // À la réception de la réponse, on stocke le token
        sessionStorage.setItem('authToken', response.token);
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem('authToken');
    // ... rediriger vers la page de login
  }

  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
}