import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { AgregarComponent } from './post/agregar/agregar.component';
import { EditarComponent } from './post/editar/editar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'home',
    component: PostComponent
  },
  {
    path: 'Agregar',
    component: AgregarComponent 
  },
  {
      path:'Editar/:id',
      component: EditarComponent      
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
