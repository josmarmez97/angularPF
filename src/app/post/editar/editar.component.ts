import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  editarPost = new FormGroup(
  {
    id_com: new FormControl('',Validators.required),
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

  }
}
