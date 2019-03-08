import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyKoinComponent } from './buy-koin/buy-koin.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { SendKoinsComponent } from './send-koins/send-koins.component';
import { ReceiveKoinsComponent } from './receive-koins/receive-koins.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'my-wallet', pathMatch: 'full' },
      {
        path: 'my-wallet',
        component: MyWalletComponent
      },
      {
        path: 'send',
        component: SendKoinsComponent
      },
      {
        path: 'receive',
        component: ReceiveKoinsComponent
      },
      {
        path: 'buy-koin',
        component: BuyKoinComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
