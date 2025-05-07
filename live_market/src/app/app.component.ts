import { Component } from '@angular/core';
import { MarketDataService } from './services/market-data.service';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: any;
  currentPage = 1;


  constructor(private marketDataService: MarketDataService) {}

  ngOnInit() {
    this.marketDataService.getAllRates().subscribe(res => {
      this.data = res;
    });
  }


    // Method to change pages
    changePage(direction: number) {
      const nextPage = this.currentPage + direction;
      if (nextPage >= 1 && nextPage <= 4) {
        this.currentPage = nextPage;
      }
    }
  }
