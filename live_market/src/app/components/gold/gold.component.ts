import { Component, OnInit } from '@angular/core';
import { MarketDataService } from '../../services/market-data.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  standalone: false,
  styleUrl: './gold.component.css'
})
export class GoldComponent implements OnInit {

  price: any;

  constructor(private marketService: MarketDataService) {}

  ngOnInit(): void {
    this.marketService.getGoldRate().subscribe(data => {
      this.price = data;
    });
  }

}
