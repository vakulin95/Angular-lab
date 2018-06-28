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

  gl_property : any;

  gl_sort_up : number;

  ngOnInit() {
    this.gl_property = "id";
    this.gl_sort_up = 1;
    this.ski_list_used = this.ski_list_used.sort(this.sort_up(this.gl_property));
  }

  onSelect(x: Ski_template): void {
    this.ski_used = x;
  }

  sort_up(property: any){
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

  sort_down(property: any){
    return function(a: any, b: any){
      if(a[property] > b[property]){
        return -1;
    }else if(a[property] < b[property]){
        return 1;
      }else{
        return 0;
      }
    }
  }

  up(){
      this.gl_sort_up = 1;
      this.ski_list_used = this.ski_list_used.sort(this.sort_up(this.gl_property));
  }

  down(){
      this.gl_sort_up = 0;
      this.ski_list_used = this.ski_list_used.sort(this.sort_down(this.gl_property));
  }

  show_gl_prop(ski: any, property: any){
      return ski[property];
  }

  sort()
  {
      this.up();
  }
}
