import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageTitle;
  constructor(public router: Router) {
    console.log("func");
    
    this.checkRoute();
   }

  ngOnInit() {
    // console.log(this.router.url.split('/')[this.router.url.split('/').length - 1]);
  }

  checkRoute(): void {
    switch (this.router.url.split('/')[this.router.url.split('/').length - 1]) {
      case 'my-wallet':
      case 'buy-koin':
      this.pageTitle = '';
      break;
      case 'send':
      this.pageTitle = 'Send Koin';
      break;
      case 'receive':
      this.pageTitle = 'Receive Koin';
      break;
    }
  }

  }
