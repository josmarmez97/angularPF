import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../dto/post';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  texte: string = this.activo.snapshot.paramMap.get('id');
  numero : number = parseInt(this.texte);
  editarPost = new FormGroup(
  {
    id_com: new FormControl(this.numero,Validators.required),
   id_usuarios: new FormControl(1,Validators.required),
    t_com: new FormControl('',Validators.required),
    comentario : new FormControl('',Validators.required)
  }
  );

  constructor(private service : PostService,
    private activo:ActivatedRoute
    ) { }

  ngOnInit() {
    var a = this.activo.snapshot.paramMap.get('id');
    console.log(a);
  }

  actualizar()
  {
    var edit: Post = this.editarPost.value;
    var id = this.activo.snapshot.paramMap.get('id');
    this.service.ActualizarComentario(edit,id).subscribe(
    );
  }
}
