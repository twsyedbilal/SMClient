export class DateFormat{
    getYYMMDD(dateData){
        console.log(dateData);
       let doB=new Date(dateData._i.year,dateData._i.month,dateData._i.date);
       console.log(doB.getMonth());
    let month=doB.getMonth();
    let d=doB.getDate();
    console.log(month,d);
    let birthDate:string='';
   
    if(month>10 && d >9){
      birthDate=doB.getFullYear()+'-'+(month+1)+'-'+d;
    }
    else if(month<10 && d<10){
      let mnth='0'+(month+1);
      let dt='0'+d;
      birthDate=doB.getFullYear()+'-'+mnth+'-'+dt;
    }
    else if(month <10 && d>9){
      let mnth='0'+(month+1);
      birthDate=doB.getFullYear()+'-'+mnth+'-'+d;
      
    }
    else if(month >9 && d<10){
      let dt='0'+d;
      birthDate=doB.getFullYear()+'-'+(month+1)+'-'+dt;
  
    }


    console.log(birthDate);
    return birthDate;
   }   
}