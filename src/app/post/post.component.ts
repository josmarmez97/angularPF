import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './dto/post';
import { Router } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post : Post[];
  @Output() update = new EventEmitter<number>();

  constructor(private postsService: PostService,
    private router:Router
    ) {}

  ngOnInit() {
    this.verComentarios();
  }
  
  verComentarios(){
    this.postsService.VerComentarios()
    .subscribe(
      data=>this.post=data
    );
  }
  
  eliminarComentario(id)
  {
    this.postsService.EliminarComentario(id).subscribe();
    console.log('eliminar');
    this.router.navigate(['home'])
    
  }

  editarComentario(id_com:number)
  {
    console.log('evento Editar');
    this.router.navigate(['/Editar/'+id_com]);
    this.update.emit(id_com);
  }

}


