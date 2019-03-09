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
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  sendkoins(): void {
    if (this.amount && this.address) {
      this.commonService.sendKoin(this.address, this.amount).subscribe(
        res => {
          alert('Transaction successful');
        }, error => {
  
        }
      )
    }
  }
}
