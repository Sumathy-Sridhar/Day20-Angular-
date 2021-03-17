import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForExService {
  
  constructor() { }
    
  public inrTousd(curr:number):number{
    return curr*0.01373;
    }
  public inrTocny(curr:number){
      return curr*11.1533;
    }
    public usdToinr(curr:number){
      return curr*72.6080;
    }
    public usdTocny(curr:number){
      return curr*6.50686;
    }
    public cnyToinr(curr:number){
      return curr*11.1531;
    }
    public cnyTousd(curr:number){
      return curr*0.15361;
    }
    
    
  
}
