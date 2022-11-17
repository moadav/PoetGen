import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authors } from '../models/authors.model';
import { finalize, map, Observable} from 'rxjs';
import { AuthorTitle } from '../models/authorTitle.model';
import { AuthorPoetry } from '../models/authorPoetry';


@Injectable({
  providedIn: 'root'
})
export class PoetryApiService {
  public error:any = '';
  public authors:any = '';

  constructor(private readonly http: HttpClient) { }

  
  public getAuthors(): Observable<Authors | undefined> {
    return this.http.get<Authors>('https://poetrydb.org/author');  
  }

  public getAuthorTitles(title:string): Observable<AuthorTitle[] | undefined> {
    return this.http.get<AuthorTitle[]>(`https://poetrydb.org/author/${title}/title`);
  }

  public getAuthorTitlePoetry(author:string, title:string){
    return this.http.get<AuthorPoetry[]>(`https://poetrydb.org/author,title/${author};${title}`);

  }


}



