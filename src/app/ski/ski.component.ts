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
  }

  onSelect(x: Ski_template): void {
    this.ski_used = x;
  }

}
