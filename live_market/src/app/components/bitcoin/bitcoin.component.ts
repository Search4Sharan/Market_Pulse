import { Component, OnInit } from '@angular/core';
import { MarketDataService } from '../../services/market-data.service';

declare var google: any;

@Component({
  selector: 'app-bitcoin',
  standalone: false,
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css'] // Fix styleUrls (plural)
})
export class BitcoinComponent implements OnInit {
  btcRate: number = 0;
  previousRate: number = 0; // Store the previous rate for comparison
  priceHistory: { time: string; value: any }[] = [];
  priceAlert: string = ''; // Store alert message

  constructor(private marketDataService: MarketDataService) {}

  ngOnInit(): void {
    // Fetch Bitcoin rate on init
    this.marketDataService.getBitcoinRate().subscribe(data => {
      this.btcRate = data.bitcoin.usd;
      this.previousRate = this.btcRate; // Set initial previous rate
    });

    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      this.updatePrice();
      setInterval(() => this.updatePrice(), 10000); // Update every 10 seconds
    });
  }

  updatePrice(): void {
    const now = new Date();
    const timeLabel = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Simulate price update for now
    const fakePrice = 65000 + Math.floor(Math.random() * 500); // simulate price

    this.priceHistory.push({ time: timeLabel, value: fakePrice });
    if (this.priceHistory.length > 10) {
      this.priceHistory.shift(); // Keep the last 10 values
    }

    // Check price change and alert if it crosses 5% change
    this.checkPriceChange(fakePrice);

    this.drawChart();
  }

  checkPriceChange(currentPrice: number): void {
    if (this.previousRate === 0) {
      // Skip on first load
      return;
    }

    const changePercentage = ((currentPrice - this.previousRate) / this.previousRate) * 100;

    // Alert if price change exceeds 5%
    if (changePercentage >= 5) {
      this.priceAlert = `Bitcoin price has increased by ${changePercentage.toFixed(2)}%!`;
      this.triggerAlert('increase');
    } else if (changePercentage <= -5) {
      this.priceAlert = `Bitcoin price has decreased by ${Math.abs(changePercentage).toFixed(2)}%!`;
      this.triggerAlert('decrease');
    }

    this.previousRate = currentPrice; // Update the previous rate
  }

  triggerAlert(type: string): void {
    if (type === 'increase') {
      alert(this.priceAlert); // Trigger alert when price increases
    } else if (type === 'decrease') {
      alert(this.priceAlert); // Trigger alert when price decreases
    }
  }

  drawChart(): void {
    const chartData = [['Time', 'BTC']];
    this.priceHistory.forEach(entry => chartData.push([entry.time, entry.value]));

    const data = google.visualization.arrayToDataTable(chartData);

    const options = {
      title: 'Live Bitcoin Price',
      curveType: 'function',
      legend: { position: 'bottom' },
      height: 350,
    };

    const chart = new google.visualization.LineChart(document.getElementById('btc_chart'));
    chart.draw(data, options);
  }
}
