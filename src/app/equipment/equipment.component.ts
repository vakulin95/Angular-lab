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
  }

  onSelect(x: Equipment_template): void {
    this.equipment_used = x;
  }

}
