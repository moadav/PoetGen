import { Component, OnInit } from '@angular/core';
import { AuthorPoetry } from 'src/app/models/authorPoetry';
import { Authors } from 'src/app/models/authors.model';
import { AuthorTitle } from 'src/app/models/authorTitle.model';
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
public authorTitles:any

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

  public getAuthorTitles():void{
    this.loading = true;
    this.poetryApiService.getAuthorTitles(this.selectedValue).subscribe({
      next: (response: AuthorTitle[] | undefined) => {
        
        this.authorTitles = response;        
      },
      error: ( response:any) => {
        this.error = response;
      }
  })
  this.loading = false;
  }

  public getAuthorPoetry(value:any): void {
    this.poetryApiService.getAuthorTitlePoetry(this.selectedValue, value.title).subscribe({
      next: (response: AuthorPoetry[] | undefined) => {
        
        this.authorTitles = response;        
      },
      error: ( response:any) => {
        this.error = response;
      }
  })
    
  }



}
