import { Component } from '@angular/core';
import { Residence } from '../../Core/models/Residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El Fel", address: "Borj Cedria", image: "../../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "../../../assets/images/R1.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../../assets/images/R1.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../../assets/images/R1.jpg", status: "En Construction" }
  ];


  showLocation(residence: Residence): void {
    if (residence.address.toLowerCase() === 'inconnu') {
      alert(`L'adresse de cette résidence est "inconnu"`);
    } else {
      alert(`L'adresse de la résidence est : ${residence.address}`);
    }
  }
  favoriteResidences: Residence[] = []; // Liste pour les favoris

  // Fonction pour ajouter une résidence aux favoris
  addToFavorites(residence: Residence): void {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
      alert(`La résidence "${residence.name}" a été ajoutée à vos favoris !`);
    } else {
      alert(`La résidence "${residence.name}" est déjà dans vos favoris.`);
    }
  }

  filteredResidences: Residence[] = [...this.listResidences]; // Résidences filtrées
  searchAddress: string = '';

  filterResidences(): void {
    this.filteredResidences = this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
    );
  }

}


