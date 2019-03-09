import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';
@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css']
})
export class MyWalletComponent implements OnInit {
  userEmail;
  transactionData;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.userEmail = window.localStorage.getItem('email');
    this.getTransactions();
    this.getUserWallet();
  }

  getTransactions(): void {
    this.commonService.getTransactions().subscribe(
      res => {
        this.transactionData = res.data;
        console.log(res);
        
      }, error => {

      }
    )
  }

  getUserWallet(): void {
    this.commonService.getUserData().subscribe(
      res => {

        console.log(res);
        
      }, error => {

      }
    )
  }
}
