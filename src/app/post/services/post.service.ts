import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from '../dto/post';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService 
{
    constructor(private router: HttpClient){};

        
  VerComentarios():Observable<any>{  
    return this.router.get('https://localhost:5001/Comentario/VerComentarios/');
  }

  AniadirComentario(Comentario:Post):Observable<any>{
    return this.router
    .post<any>('https://localhost:5001/Comentario/NuevoComentario',Comentario);
  }

  ActualizarComentario(Comentario:Post,id_com:Int32Array):Observable<any>
  {
    return this.router.put('https://localhost:5001/Comentario/ActualizarComentario/'+id_com,Comentario);
  }

  EliminarComentario(id_com:Int32Array):Observable<any>
  {
    return this.router.delete('https://localhost:5001/Comentario/EliminarComentario/'+id_com);
  }
    
}