
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
    studentsName :string;
};

export class ComplainttypesDto{
    id:number;
    name: string;
    code: string;
}
export class ComplaintDto{
    name:string;
    code:number;
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


export class Docter{
    name:string;
    code:string;
    id?:number;
   
}



