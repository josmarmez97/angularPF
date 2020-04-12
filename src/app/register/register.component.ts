import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../post/dto/user';
import { PostService } from '../post/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registro = new FormGroup(
    {
      userid:new FormControl('',Validators.required),
      pass:new FormControl('',Validators.required),
      idrol:new FormControl(1,Validators.required)
    }
  )
  constructor(
    private service : PostService,
    private rute : Router
  ) { }

  ngOnInit() {
  }

  crear()
  {
    const nuevo: User = this.registro.value;
    console.log(nuevo);
    this.service.NuevoUsuario(nuevo).subscribe( d => {
      this.rute.navigate(['home'])
    })
  }
}
