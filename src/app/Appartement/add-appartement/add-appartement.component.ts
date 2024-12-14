import { Component } from '@angular/core';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent {
  apartment = {
    name: '',
    address: '',
    rooms: null,
    price: null,
    description: ''
  };

  onSubmit() {
    if (this.apartment.name && this.apartment.address && this.apartment.rooms && this.apartment.price && this.apartment.description) {
      console.log('Appartement ajouté:', this.apartment);
      // Vous pouvez ajouter ici la logique pour envoyer ces données à un backend ou les traiter autrement.
    } else {
      console.log('Veuillez remplir tous les champs');
    }
  }
}
