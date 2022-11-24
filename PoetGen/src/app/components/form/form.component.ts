import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthorPoetry } from 'src/app/models/authorPoetry';
import { Authors } from 'src/app/models/authors.model';
import { AuthorTitle } from 'src/app/models/authorTitle.model';
import { PoetryApiService } from 'src/app/services/poetry-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
public error:any;
public isError:boolean = false;
public loading:boolean = false;
public authorsList:any
public selectedValue:any
public authorTitles:any
public authorPoetry:any
ngOnInit(): void {
  this.loading = true;
  this.getAllAuthors();

      
}

constructor(private readonly poetryApiService: PoetryApiService, private route: Router) { 
  }

  public getAllAuthors():void{
    
    this.poetryApiService.getAuthors().subscribe({
      next: (response: Authors | undefined) => {
        this.authorsList = response!.authors;
        
        
      },
      error: ( response:any) => {
        this.error = response;
        this.isError = true;
      },
      complete: () => {
        this.loading = false;

      }

    });
    
  }

  public getAuthorTitles():void{
   
    this.poetryApiService.getAuthorTitles(this.selectedValue).subscribe({
      next: (response: AuthorTitle[] | undefined) => {
        this.loading = true;
        this.authorTitles = response;        
      },
      error: ( response:any) => {
        this.error = response;
        this.isError = true;
      },
      complete: () => {
        this.loading = false;
      }
  })
  
  }

  public getAuthorPoetry(value:any): void {
    this.poetryApiService.getAuthorTitlePoetry(this.selectedValue, value.title).subscribe({
      next: (response: AuthorPoetry[] | undefined) => {
        
        this.authorPoetry = response;
        this.route.navigate(['/Poetry'], { state: { data: this.authorPoetry} });

                
      },
      error: ( response:any) => {
        this.error = response;
        this.isError = true;
      }
  })
    
  }



}
