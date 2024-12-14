import { Component } from '@angular/core';
import { Residence } from '../../Core/models/Residence';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  // Nouveau modèle de résidence
  newResidence: Residence = {
    id: 0, // L'ID sera généré automatiquement ou défini côté serveur
    name: '',
    address: '',
    image: '',
    status: 'Disponible'
  };

  constructor(private router: Router) {}

  // Fonction d'ajout de résidence
  onSubmit(): void {
    if (this.newResidence.name && this.newResidence.address && this.newResidence.image && this.newResidence.status) {
      // Vous pouvez ajouter ici une logique pour enregistrer la résidence
      // par exemple en appelant un service pour envoyer la donnée à un backend
      console.log('Nouvelle résidence ajoutée:', this.newResidence);

      // Rediriger vers la page de liste des résidences ou ailleurs
      this.router.navigate(['/residences']);
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}

