import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonService } from './common.service';
import { BuyKoinComponent } from './buy-koin/buy-koin.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { SendKoinsComponent } from './send-koins/send-koins.component';
import { ReceiveKoinsComponent } from './receive-koins/receive-koins.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    BuyKoinComponent,
    MyWalletComponent,
    SendKoinsComponent,
    ReceiveKoinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
