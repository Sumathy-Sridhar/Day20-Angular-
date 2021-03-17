import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayserviceService {
   httpurl:string="http://localhost:3000/Pay";
  constructor(private http:HttpClient) { 
  
  }
  getData(){
    return this.http.get(this.httpurl);
  }

}
