import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authors } from '../models/authors.model';
import { Observable} from 'rxjs';
import { AuthorTitle } from '../models/authorTitle.model';
import { AuthorPoetry } from '../models/authorPoetry';


@Injectable({
  providedIn: 'root'
})
export class PoetryApiService {
  constructor(private readonly http: HttpClient) { }

  /**
   * 
   * @returns an observable of type Authors or undefined
   */
  public getAuthors(): Observable<Authors | undefined> {
    return this.http.get<Authors>('https://poetrydb.org/author');  
  }
  /**
   * 
   * @returns an observable of type AuthorTitle or undefined
   */
  public getAuthorTitles(title:string): Observable<AuthorTitle[] | undefined> {
    return this.http.get<AuthorTitle[]>(`https://poetrydb.org/author/${title}/title`);
  }
  /**
   * 
   * @returns Returns a list of authorPoetry model
   */
  public getAuthorTitlePoetry(author:string, title:string): Observable<AuthorPoetry[] | undefined> {
    return this.http.get<AuthorPoetry[]>(`https://poetrydb.org/author,title/${author};${title}`);

  }


}



