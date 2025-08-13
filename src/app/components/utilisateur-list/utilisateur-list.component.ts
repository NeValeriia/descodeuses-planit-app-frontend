import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  standalone: false,
  templateUrl: './utilisateur-list.component.html',
  styleUrl: './utilisateur-list.component.css'
})
export class UtilisateurListComponent implements OnInit {

  // On déclare un tableau pour stocker la liste des utilisateurs
  utilisateurs: Utilisateur[] = [];

  // On injecte le service pour pouvoir l'utiliser
  constructor(private utilisateurService: UtilisateurService) {}

  // ngOnInit est appelée automatiquement au chargement du composant
  ngOnInit(): void {
    this.fetchUtilisateurs();
  }

  // Méthode pour appeler le service et récupérer les données
  fetchUtilisateurs(): void {
    this.utilisateurService.getUtilisateurs().subscribe({
      next: (data) => {
        // Si l'appel réussit, on stocke les données dans notre tableau
        this.utilisateurs = data;
        console.log('Utilisateurs récupérés :', this.utilisateurs);
      },
      error: (err) => {
        // Si une erreur se produit, on l'affiche dans la console
        console.error('Erreur lors de la récupération des utilisateurs :', err);
      }
    });
  }
}
