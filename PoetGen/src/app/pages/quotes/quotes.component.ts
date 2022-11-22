import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';
import { QuotesApiService } from 'src/app/services/quotes-api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
public loading: boolean = false;
public error:string = "";
public quote: string = "";
public quoteAuthor: string = "";
public quoteArray:Quotes[] | undefined = [];
  constructor(private readonly quotesApi: QuotesApiService) { }

  ngOnInit(): void {
    this.getAllQuotes();
  }

  public generateRandom():void{
    const random = Math.floor(Math.random() * this.quoteArray!.length);
    this.quote = this.quoteArray![random].text;
    this.quoteAuthor = this.quoteArray![random].author

  }
  public getAllQuotes():void{
    this.loading = true;
    this.quotesApi.getQuotes().subscribe({
      next: (response: Quotes[] | undefined) => {
       this.quoteArray = response;

      
      },
      error: ( response:any) => {
        this.error = response;
        console.log(response);
        
      }
    });
    this.loading = false;
  }


}
