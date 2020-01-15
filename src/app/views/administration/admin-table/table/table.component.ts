import { Component, OnInit, Input } from '@angular/core';
import { SchoolTypeDto, TableData } from '../../administration';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  @Input() data:any
  constructor() { }

  ngOnInit() {
 
  }

}
