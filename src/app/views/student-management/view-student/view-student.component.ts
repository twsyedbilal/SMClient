import { Component, OnInit } from '@angular/core';
import { StudentManagementService } from '../student-management.service';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {
id:number;
data:any;
  constructor(private service:StudentManagementService,
        private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);

    this.service.getStudentyId(this.id)
    .subscribe(res=>{
      console.log(res);
      this.data=res.data;
    });
  }

}
