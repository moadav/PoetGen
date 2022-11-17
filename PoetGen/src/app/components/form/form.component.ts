import { Component, OnInit } from '@angular/core';
import { Authors } from 'src/app/models/authors.model';
import { PoetryApiService } from 'src/app/services/poetry-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
public error:any;
public loading:boolean = false;
public authorsList:any
public selectedValue:any

constructor(private readonly poetryApiService: PoetryApiService) { 
    this.getAllAuthors();
  }

  public getAllAuthors():void{
    this.loading = true;
    this.poetryApiService.getAuthors().subscribe({
      next: (response: Authors | undefined) => {
        console.log(response);
        
        this.authorsList = response!.authors;
        
      },
      error: ( response:any) => {
        this.error = response;
      }
    });
    this.loading = false;
  }

  public test():void{
    
  }
}
