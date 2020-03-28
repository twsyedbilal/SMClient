import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteComponent } from './delete.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private dialog:MatDialog ) { }


   
openConfirmDialog (){
  this.dialog.open(DeleteComponent, 
    {
  width:'94px',
  disableClose:true
    });
  
  
  }
}
