import { Component, OnInit } from '@angular/core';
import { SchoolSpaceDto } from '../../administration';
import { AdministrationService } from '../../administration.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  constructor(private service:AdministrationService) { }

  ngOnInit() {
      this.service.loadSchoolList()
      .subscribe(data=>{
        console.log(data);
      })
  }

}
