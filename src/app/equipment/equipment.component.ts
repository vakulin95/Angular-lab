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

  ngOnInit() {
    this.equipment_list_used = this.equipment_list_used.sort(this.sortOn("id"));
  }

  onSelect(x: Equipment_template): void {
    this.equipment_used = x;
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
