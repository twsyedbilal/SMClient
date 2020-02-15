
export class ComplianttypesDto{
    id:number;
    name:string;
    code:string;
}

export class AdmissionDto {
    id:number;
    uidNo:number;
    idNo:number;
    surName:Date;
    studentsName:string;
};

export class ComplainttypesDto{
    id:number;
    name: string;
    code: string;
}
export class ComplaintDto{
    
    remark: string;
    id:number;
    admissionId:number;
    complianttypeid:number;
   
}
export class TableData{
    name:string;
    code:number;
    id:number;
    delete:boolean=false;
}


export class Master{
    remark:string;
    StudentName:string;
    id?:number;
   
}