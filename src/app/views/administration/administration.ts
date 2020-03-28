export class Response<T>{
    statusText:string;
    code:number;
    message:string;
    data:T;
}
export class SchoolDto{
    id:number;
    schoolAddress:string;
    schoolName:string;
    schoolCode:string;
  
}

export class BranchDto{
id:number;
branchName:string;
branchCode:string;
}

export class SchoolTypeDto{
    id:number;
    deleted?:boolean=false;
    schoolTypeName:string;
    code:string;

}

export class SocietyDto{
    id:number;
    societyName:string;
    code:string;
} 

export class BookDto{
    id:number;
    bookName:string;
    bookCode:string;
}


export class UserDto{
    id:number;
    username:string;
    userId:number;
   
}

export class ClassDto{
    className:string;
    code:string;
    id?:number;
    fees:number;
    userId:number;
    classsLocation:string;
    classsType:string;
    classsCapacity:string;
    classsStartingDate:string;
    classsEndingDate:string;
    classsStratingDate:string;

}

export class PaymentTypeDto{
    id:number;
    payementTypeName:string;
    payementTypeCode:string;
}

export class ReligionDto{
    id:number;
    religionName:string;
    religionCode:string;
}

export class CasteDto{
    id:number;
    casteName:string;
    casteCode:string;
    subCasteDto=new SubCasteDto();
}

export class SubCasteDto{
id:number;
subCasteName:string;
subCasteCode:string;
}

export class MotherTongueDto {
    name:string;
    code:string;
    id:number;
}

export class OccupationDto{
    id:string;
    occupationName:string;
    occupationCode:string;
} 
export class NationalityDto {
    id:number;
    name:string;
    code:string;
}
export class SchoolSpaceDto {
    schoolName:string;
    schoolCode:string;
    schoolAddress:string;
    page:number;
    size:number;
}
export class TableData{
    name:string;
    code:number;
    id:number;
    delete:boolean=false;
}


export class Master{
    name:string;
    code:number;
    id?:number;
   
}