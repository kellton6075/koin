import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';

@Component({
  selector: 'app-buy-koin',
  templateUrl: './buy-koin.component.html',
  styleUrls: ['./buy-koin.component.css']
})
export class BuyKoinComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  oneBitcoinValue = 3848;
  koins;
  walletBalance;
  ruppess;
  ngOnInit() {
    this.getUserWallet();
  }

  calculateKoin(moneyInDollar): void {
    console.log("hello");
    
    this.koins = moneyInDollar/this.oneBitcoinValue;
  }

  getUserWallet(): void {
    this.commonService.getUserData().subscribe(
      res => {
        this.walletBalance = res.data.coin;
        this.ruppess = this.oneBitcoinValue * this.walletBalance;

        console.log(res);
        
      }, error => {

      }
    )
  }
}
