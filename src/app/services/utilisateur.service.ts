import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiURL = environment.apiUrl+'/api/utilisateur';

  constructor(private http: HttpClient) { }

  getUtilisateurs() {
    return this.http.get<Utilisateur[]>(this.apiURL);
  }
}
