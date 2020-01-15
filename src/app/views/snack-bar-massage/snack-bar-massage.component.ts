import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snack-bar-massage',
  templateUrl: './snack-bar-massage.component.html',
  styleUrls: ['./snack-bar-massage.component.scss']
})
export class SnackBarMassageComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }

}
