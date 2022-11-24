import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthorPoetry } from 'src/app/models/authorPoetry';

@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.css']
})
export class PoetryComponent{
public text:AuthorPoetry = {title: "", author: "s", linecount: "", lines: []}
public title:string = "";

  constructor(private readonly routers: Router,
  private activatedroute: ActivatedRoute, private readonly route: Router) { 
    const state = this.routers.getCurrentNavigation()!.extras.state;
    if(!state)
      this.route.navigate(['/Home']);

    this.ConvertRouteToText(state);
   
  }

  /**
   * 
   * @param obj The object containing the author poetry model
   */
private ConvertRouteToText(obj:any):void{   
  if(obj.data[0]) {
    this.text = obj.data[0];
    this.title = this.text.title;
    
  }
  
}

 

}
