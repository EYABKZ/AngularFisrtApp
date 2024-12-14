import { Component } from '@angular/core';
import {user} from "../Core/models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title:string = "Welcome 4SAE9"
  color:string='red'
  ageMax!:number

  user:user[]=[
    {id: 1 , name : "ahmed" ,age : 15 , email:"ahmed@gmail.com"},
    {id: 2 , name : "amir" ,age : 28 , email:"amir@gmail.com"},
    {id: 3 , name : "wiem" ,age : 20 , email:"wiem@gmail.com"}
  ]

  show(){
    alert("hello 4SEA9")
  }
}

