import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { Post } from '../dto/post';
import { PostService } from '../services/post.service';
import { PostComponent } from '../post.component';
import { Router } from '@angular/router';

@Component({
  selector: 'agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //AgregarComentario:any = { t_com:'',comentario:'',id_usuario:''}

  crearPost = new FormGroup(
    {
      t_com: new FormControl('',Validators.required),
      comentario: new FormControl('',Validators.required),
      id_usuarios: new FormControl('',Validators.required)
    }
  );

  constructor(private postService : PostService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  aniadirComentario()
  {
    const nuevo:Post=this.crearPost.value;    
    this.postService
    .AniadirComentario(nuevo)
    .subscribe(
      d => {
        console.log('Redireccionado'),
        this.router.navigate(['/home'])
      }     
    );
  }

  agregarComentario()
  {
    console.log('evento Agregar');
  }

}
