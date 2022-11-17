import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PoetryComponent } from './pages/poetry/poetry.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/Home',

  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Poetry',
    component: PoetryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
