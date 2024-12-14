import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './Residences/residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ResidenceDetailsComponent} from "./Residences/residence-details/residence-details.component";
import {ApartementComponent} from "./Appartement/appartement.component";
import {LoginComponent} from "./login/login.component";
import {AddAppartementComponent} from "./Appartement/add-appartement/add-appartement.component";
import {AddResidenceComponent} from "./Residences/add-residence/add-residence.component";





const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home',pathMatch:'full' },
  { path: 'Residence', component: ResidenceComponent },
  { path: 'Details/:id', component: ResidenceDetailsComponent },
  { path: 'showAppart/:id', component: ApartementComponent},
  { path: 'login', component: LoginComponent},
  { path: 'add-appartement', component: AddAppartementComponent},
  { path: 'add-residence', component: AddResidenceComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
