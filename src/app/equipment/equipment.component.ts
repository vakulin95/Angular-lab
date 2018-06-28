import { Component, OnInit } from '@angular/core';
import { Equipment_template } from '../equipment-class';
import { Equipment_list } from '../equipment-list';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor() { }

  equipment_list_used = Equipment_list;

  equipment_used : Equipment_template;

  gl_property : any;

  gl_sort_up : number;

  ngOnInit() {
    this.gl_property = "id";
    this.gl_sort_up = 1;
    this.equipment_list_used = this.equipment_list_used.sort(this.sort_up(this.gl_property));
  }

  onSelect(x: Equipment_template): void {
    this.equipment_used = x;
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
      this.equipment_list_used = this.equipment_list_used.sort(this.sort_up(this.gl_property));
  }

  down(){
      this.gl_sort_up = 0;
      this.equipment_list_used = this.equipment_list_used.sort(this.sort_down(this.gl_property));
  }

  show_gl_prop(equipment: any, property: any){
      return equipment[property];
  }

  sort()
  {
      this.up();
  }
}
