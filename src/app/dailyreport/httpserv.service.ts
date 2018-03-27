import { Injectable } from '@angular/core';
import { Report } from './dailyreport.model';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class HttpservService {

  constructor(private http:Http) { }

  addreport(report:Report){
    
    return this.http.post('http://localhost:3000/api/addreport',report);
  }

  viewreport(){
    
    return this.http.get('http://localhost:3000/api/addreport').map((data:Response) =>{  return data.json()    });
  }

  updatereport(report:Report,id:any){
    return this.http.post('http://localhost:3000/api/updatereport/'+id,report).map((data:Response) =>{  return data.json()    });
  }
}
