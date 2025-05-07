import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SECRETS } from '../../secrets';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  constructor(private http: HttpClient) {}

  getGoldRate(): Observable<any> {
    return this.http.get(SECRETS.GOLD_API);
  }

  getSilverRate(): Observable<any> {
    return this.http.get(SECRETS.SILVER_API);
  }

  getBitcoinRate(): Observable<any> {
    return this.http.get(SECRETS.BTC_API);
  }

  getGbpJpyRate(): Observable<any> {
    return this.http.get(SECRETS.GBPJPY_API);
  }

  // Optional: get all at once using RxJS
  getAllRates(): Observable<any> {
    return forkJoin({
      gold: this.getGoldRate(),
      silver: this.getSilverRate(),
      bitcoin: this.getBitcoinRate(),
      gbpjpy: this.getGbpJpyRate()
    });
  }
}
