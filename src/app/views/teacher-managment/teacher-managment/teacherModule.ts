export class ResponseWithError<T>{
    error:boolean;
    errorMsg:string;
    response:T
    
}
export class UserAddDto {

   username:string;
   password:string;
   name:string;
   email:string;
   mobile:string;
   status:string;
   roles:string[]=[];
}