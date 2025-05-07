import { Component, OnInit } from '@angular/core';
import { MarketDataService } from '../../services/market-data.service';

@Component({
  selector: 'app-gbpjpy',
  standalone: false,
  templateUrl: './gbpjpy.component.html',
  styleUrl: './gbpjpy.component.css'
})
export class GbpjpyComponent implements OnInit {
  gbpjpyRate: number = 0;

  constructor(private marketDataService: MarketDataService) {}

  ngOnInit(): void {
    this.marketDataService.getGbpJpyRate().subscribe(data => {
      this.gbpjpyRate = data.rates.JPY;
    });
  }
}
