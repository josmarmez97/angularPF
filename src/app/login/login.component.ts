import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ServicesService:ServicesService) {
    //agregamos la propiedad para agregar un json o algun objeto
   }

  ngOnInit() {
  }

}
