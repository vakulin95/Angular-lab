import { Component, OnInit } from '@angular/core';
import { Ski_template } from '../ski-class';
import { Ski_list } from '../ski-list';

@Component({
  selector: 'app-ski',
  templateUrl: './ski.component.html',
  styleUrls: ['./ski.component.css']
})
export class SkiComponent implements OnInit {

  constructor() { }

  ski_list_used = Ski_list;

  ski_used : Ski_template;


  ngOnInit() {
    this.ski_list_used = this.ski_list_used.sort(this.sortOn("id"));
  }

  onSelect(x: Ski_template): void {
    this.ski_used = x;
  }

  sortOn(property: string){ 
    return function(a: any, b: any){ 
      if(a[property] < b[property]){ 
        return -1; 
      }else if(a[property] > b[property]){ 
        return 1; 
      }else{ 
        return 0; 
      } 
    }
  }

}
