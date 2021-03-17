import { DeclarationListEmitMode } from '@angular/compiler';
import { Component } from '@angular/core';
import { CheckFradulentService } from './service/check-fradulent.service';
import { ForExService } from './service/for-ex.service';
import { PayserviceService } from './service/payservice.service';
import { UnitConversionService } from './service/unit-conversion.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pgtitle= 'FOREX CALCULATION';
  covertFromVar:string='';
  covertToVar:string='';
  currCalc:number=0;
  fromAmt:number=0;
  checkCurr:any;
  cu:string='';
  enterCurr:string='';
  upp:string='';
  enterAmt:number=0;
  enterAcc:number=0;
  enterDateTime:any;
  unitFromVar:string='';
  unitToVar:string='';
  fromUnit:number=0;
  CovResult:number=0;
  private forexobj:ForExService=new ForExService();
  private fraud:CheckFradulentService=new CheckFradulentService();
  private Unitobj:UnitConversionService=new UnitConversionService();
  covertFrom(event:any){
    this.covertFromVar=event.target.value;
  }
  covertTo(event:any){
    this.covertToVar=event.target.value;
  }
  convert()
  {
    if(this.covertFromVar=='INR' && this.covertToVar=='USD'){
     this.currCalc=this.forexobj.inrTousd(this.fromAmt);
     console.log(this.currCalc);
    }
   else if(this.covertFromVar=='INR' && this.covertToVar=='CNY'){
      this.currCalc=this.forexobj.inrTocny(this.fromAmt);
      console.log(this.currCalc);
     }
     else if(this.covertFromVar=='USD' && this.covertToVar=='INR'){
      this.currCalc=this.forexobj.usdToinr(this.fromAmt);
      console.log(this.currCalc);
     }
     else if(this.covertFromVar=='USD' && this.covertToVar=='CNY'){
      this.currCalc=this.forexobj.usdTocny(this.fromAmt);
      console.log(this.currCalc);
     }
     else if(this.covertFromVar=='CNY' && this.covertToVar=='INR'){
      this.currCalc=this.forexobj.cnyToinr(this.fromAmt);
      console.log(this.currCalc);
     }
     else if(this.covertFromVar=='CNY' && this.covertToVar=='USD'){
      this.currCalc=this.forexobj.cnyTousd(this.fromAmt);
      console.log(this.currCalc);
     }
     else{
       this.currCalc=this.fromAmt;
       console.log("Invalid Conversion");
     }
  }
  constructor(private pserv:PayserviceService){}
  Display(){
    this.pserv.getData().subscribe((data)=>{console.log(data)});
  }
  txtEvent(e:any){
    this.enterCurr=e.target.value;
    this.upp=this.enterCurr.toUpperCase();
    console.log("Entered Currency : "+this.upp);
  }
  BannedCurrecy(upp:any){
    return this.fraud.currBan(this.upp);
  }
  amtEvent(e:any){
    this.enterAmt=e.target.value;
    console.log(this.enterAmt);
  }
  amtLimit(enterAmt:number){
    return this.fraud.CheckamtLimit(this.enterAmt);
  }
  accEvent(e:any){
    this.enterAcc=e.target.value;
    console.log(this.enterAcc);
  }
  checkAcc(enterAcc:number){
    return this.fraud.banAcc(this.enterAcc);    
  }
  DateTimeEvent(e:any){
    this.enterDateTime=e.target.value;
    console.log("User Entered Date & Time : "+this.enterDateTime);
  }
  checkDateTime( ){
    return this.fraud.fCheckdateTime(this.enterDateTime);    
  }
  unitFrom(event:any){
    this.unitFromVar=event.target.value;
  }
  unitTo(event:any){
    this.unitToVar=event.target.value;
  }
  unitConversion(){
    if(this.unitFromVar=='cm' && this.unitToVar=='mtr'){
      this.CovResult=this.Unitobj.cmTomtr(this.fromUnit);
      console.log(this.CovResult);
     }
    else if (this.unitFromVar=='mtr' && this.unitToVar=='cm'){
      this.CovResult=this.Unitobj.meterTocm(this.fromUnit);
      console.log(this.CovResult);
     }
    else if(this.unitFromVar=='centigrade' && this.unitToVar=='Farenheit'){
      this.CovResult=this.Unitobj.celToFar(this.fromUnit);
      console.log(this.CovResult);
     }
    else if (this.unitFromVar=='Farenheit' && this.unitToVar=='centigrade'){
      this.CovResult=this.Unitobj.FarTocel(this.fromUnit);
      console.log(this.CovResult);
     }
    else{
      this.Unitobj.invalid();
    }
  }
}


