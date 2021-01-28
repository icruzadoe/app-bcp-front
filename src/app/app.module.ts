import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthService} from './services/auth.service';
import {HttpService} from './services/http.service';
import {TypeChangeCurrencyService} from './services/type-change-currency.service';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRateAmountComponent } from './pages/money/exchange-rate-amount/exchange-rate-amount.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule, MatStepperModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExchangeRateAmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
  ],
  providers: [HttpService, HttpClientModule, AuthService, TypeChangeCurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
