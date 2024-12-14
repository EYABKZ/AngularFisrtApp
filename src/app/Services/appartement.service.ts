import { Injectable } from '@angular/core';
import {Residence} from "../Core/models/Residence";
import {Apartment} from "../Core/models/Appartement";

@Injectable({
  providedIn: 'root'
})
export class AppartementService {


  listResidences: any;
  constructor() { }
}
