import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ICurrency } from '../models/currency';
import { IRates } from '../models/rates';


@Injectable({
  providedIn: 'root'
})
export class FixerService {


  private apiURL = "http://data.fixer.io/api/latest?access_key=ea47dc7f1133bf970115aa6314a17702";
  constructor(private http: HttpClient) {

   }

   getRates(): Observable<ICurrency> {
     return this.http.get<ICurrency>(this.apiURL);
   }
}
