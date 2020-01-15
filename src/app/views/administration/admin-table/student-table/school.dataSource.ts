import { DataSource } from "@angular/cdk/table";
import { BehaviorSubject, Observable } from "rxjs";
import { AdministrationService } from "../../administration.service";
import { CollectionViewer } from "@angular/cdk/collections";

export class SchoolDatasource implements DataSource<any>{
    private schoolSubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(private adminService:AdministrationService){

    }
   
   loadSchoolList(schoolName:string,schoolCode:string,schoolAddress:string,page:number,size:number){
                this.loadingSubject.next(true);
                
                  }
   
   
    connect(collectionViewer:CollectionViewer):Observable<any[]> {
            return this.schoolSubject.asObservable();
   
    }
        disconnect(collectionViewer:CollectionViewer): void {
            this.schoolSubject.complete();
            this.loadingSubject.complete();   
    }


}