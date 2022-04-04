import { IRates } from "./rates";

export interface ICurrency {
    success: boolean;
    timestamp: number;
    base: string;
    date: string;
    rates: IRates;

   /* constructor(success: boolean,  timestamp: number, base: string,  date: string,  rates: IRates){
            this.success = success;
            this.timestamp = timestamp;
            this.base = base;
            this.date = date;
            this.rates = rates;
    }*/

}