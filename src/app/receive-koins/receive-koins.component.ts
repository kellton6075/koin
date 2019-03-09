import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';

@Component({
  selector: 'app-receive-koins',
  templateUrl: './receive-koins.component.html',
  styleUrls: ['./receive-koins.component.css']
})
export class ReceiveKoinsComponent implements OnInit {
  address;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getKoinAddress();
  }

  getKoinAddress(): void {
    this.commonService.getUserAddress().subscribe(
      res => {
        this.address = res.data;
      }
    );
  }
}
