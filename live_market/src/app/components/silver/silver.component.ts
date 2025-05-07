import { Component, OnInit } from '@angular/core';
import { MarketDataService } from '../../services/market-data.service';

@Component({
  selector: 'app-silver',
  templateUrl: './silver.component.html',
  standalone: false,
  styleUrl: './silver.component.css'
})
export class SilverComponent implements OnInit {
  silverRate: number = 0;

  constructor(private marketDataService: MarketDataService) {}

  ngOnInit(): void {
    this.marketDataService.getSilverRate().subscribe(data => {
      const silverObj = data.find((item: any) => item.silver);
      this.silverRate = silverObj?.silver ?? 0;
    });
  }
}
