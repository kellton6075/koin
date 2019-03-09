import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';

@Component({
  selector: 'app-send-koins',
  templateUrl: './send-koins.component.html',
  styleUrls: ['./send-koins.component.css']
})
export class SendKoinsComponent implements OnInit {
  address;
  amount;
  walletBalance;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getUserWallet();
  }

  sendkoins(): void {
    if (this.amount && this.address) {
      if (this.amount > this.walletBalance) {
        window.alert('insufficient koins');
      } else {
        this.commonService.sendKoin(this.address, this.amount).subscribe(
          res => {
            alert('Transaction successful');
          }, error => {
    
          }
        )
      }
    }
  }

  getUserWallet(): void {
    this.commonService.getUserData().subscribe(
      res => {
        this.walletBalance = res.data.coin;
        console.log(this.walletBalance);
        
      }, error => {

      }
    )
  }
}
