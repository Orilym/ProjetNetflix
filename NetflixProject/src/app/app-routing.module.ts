import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';

const routes: Routes = [
  {path: '', pathMatch:"full", component:HomeComponent},
  {path: 'film', component:FilmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
