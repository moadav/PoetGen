import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PoetryComponent } from './pages/poetry/poetry.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
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
  },
  {
    path: 'Quotes',
    component: QuotesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
