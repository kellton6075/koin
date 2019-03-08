import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-koin',
  templateUrl: './buy-koin.component.html',
  styleUrls: ['./buy-koin.component.css']
})
export class BuyKoinComponent implements OnInit {

  constructor() { }

  oneBitcoinValue = 3848;
  koins;
  ngOnInit() {
  }

  calculateKoin(moneyInDollar): void {
    console.log("hello");
    
    this.koins = moneyInDollar/this.oneBitcoinValue;
  }
}
