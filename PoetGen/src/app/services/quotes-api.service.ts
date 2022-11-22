import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quotes } from '../models/quotes';

@Injectable({
  providedIn: 'root'
})
export class QuotesApiService {

  constructor(private readonly http: HttpClient) { }

  public getQuotes(): Observable<Quotes[] | undefined> {
    return this.http.get<Quotes[]>('https://type.fit/api/quotes');  
  }
}
