import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFradulentService {
  Bannedcurr=["CNY","EURO","BTC","FRF","DEM","KZT","PTE","QAR"];
  BlockedAccounts=[12457,25365,25874,14752,698745,25874,20142,36524,87458,69451];
  todayDate=new Date();
  constructor() { }
  public  currBan(currency:any)
  {
    if(this.Bannedcurr.includes(currency)){
      console.log(currency+" is Banned Currency");
    }
    else {
      console.log(currency+" is Valid Currency");
    }
  }
  public CheckamtLimit(amt:number){
    if(amt<500 || amt>100000){
      console.log("Amount Limited Exceeded!")
    }
    else{
      console.log("Within Amount Limit!!");
    }
   }
   public banAcc(acc:any)
   {
     if(this.BlockedAccounts.includes(acc)){
       console.log(acc+" --> Valid Account!");
     }
     else {
       console.log(acc+ " --> Blocked Account!");
     }
   }
   public fCheckdateTime(dt:Date){
    if(this.todayDate<dt)
      {
      console.log("Date & Time Expired !!")
    }
    else{
      console.log("Valid Date & Time!");
    }
   }
 

  
}
