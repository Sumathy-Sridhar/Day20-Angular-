import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitConversionService {

  constructor() { }
  public cmTomtr(unit:number):number{
    return unit/100;
  }
  public meterTocm(unit:number):number{
    return unit*100;
  }
  public celToFar(unit:number):number{
    return (unit*2)+32;
  }
  public FarTocel(unit:number):number{
    return (unit-32)/2;
  }
  public invalid(){
    alert("Invalid Conversion!")
  }
}
