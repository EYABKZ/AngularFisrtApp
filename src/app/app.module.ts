import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResidenceComponent } from './Residences/residence/residence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { AppartementByResidenceComponent } from './Appartement/appartement-by-residence/appartement-by-residence.component';
import { AddAppartementComponent } from './Appartement/add-appartement/add-appartement.component';
import {ApartementComponent} from "./Appartement/appartement.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidenceComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartementComponent,
    AppartementByResidenceComponent,
    AddAppartementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
