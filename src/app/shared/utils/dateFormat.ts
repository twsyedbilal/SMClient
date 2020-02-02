export class DateFormat{
    getYYMMDD(dateData){
        console.log(dateData);
       let doB=new Date(dateData._i.year,dateData._i.month,dateData._i.date);
       console.log(doB);
       doB=dateData;
    console.log(doB);
    let month=doB.getMonth();
    console.log(month);
    let birthDate:string='';
    if(month>10){
      birthDate=doB.getFullYear()+'-'+(month+1)+'-'+doB.getDate();
    }
    if(month<10){
      let mnth='0'+(month+1);
      birthDate=doB.getFullYear()+'-'+mnth+'-'+doB.getDate();
    }
    console.log(birthDate);
    return birthDate;
   }   
}