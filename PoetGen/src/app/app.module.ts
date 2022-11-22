import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './components/form/form.component';
import { PoetryComponent } from './pages/poetry/poetry.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    PoetryComponent,
    QuotesComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
