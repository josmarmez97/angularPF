import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { AgregarComponent } from './post/agregar/agregar.component';
import { EditarComponent } from './post/editar/editar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
//agregamos el servicio, el cual se podra consumir en toda nuestra aplicacion
import {ComentariosService} from './service/comentarios.service';
import {PostService} from './post/services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PostComponent,
    AgregarComponent,
    EditarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  //agregamos a providers el servicio para que sea consumido en toda la aplicacion
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
