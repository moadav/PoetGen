import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authors } from '../models/authors.model';
import { finalize, map, Observable} from 'rxjs';


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
}



