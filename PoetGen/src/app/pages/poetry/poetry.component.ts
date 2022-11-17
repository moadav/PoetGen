import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthorPoetry } from 'src/app/models/authorPoetry';

@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.css']
})
export class PoetryComponent{
public text:AuthorPoetry = {title: "", author: "s", linecount: "", lines: []}

  constructor(private readonly routers: Router,
  private activatedroute: ActivatedRoute) { 
    const state = this.routers.getCurrentNavigation()!.extras.state;
    this.ConvertRouteToText(state);
  }

private ConvertRouteToText(obj:any):void{ 
  console.log(obj.data[0]);
  
  if(obj.data[0]) 
    this.text = obj.data[0];
}

 

}
