import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import { ExchangeRateAmountComponent } from './pages/money/exchange-rate-amount/exchange-rate-amount.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: ExchangeRateAmountComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
