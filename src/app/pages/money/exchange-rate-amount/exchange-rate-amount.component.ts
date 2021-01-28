import {Component, OnInit} from '@angular/core';
import {TypeChangeCurrencyService} from 'src/app/services/type-change-currency.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-exchange-rate-amount',
  templateUrl: './exchange-rate-amount.component.html',
  styleUrls: ['./exchange-rate-amount.component.css']
})
export class ExchangeRateAmountComponent implements OnInit {
  monto: number;
  typesChanges: any;
  currentTypeChange: string;
  newTypeChange: string;
  firstFormGroup: FormGroup;
  resultado:number;

  constructor(private typeChangeCurrencyService: TypeChangeCurrencyService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.typeChangeCurrencyService.getAllTypeChange().subscribe(response => {
      this.typesChanges = response;
      console.log('typesChanges:', this.typesChanges);
    });

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
      'currentTypeChange': new FormControl(),
      'newTypeChange': new FormControl(),
      'monto': new FormControl(''),
    });
  }

  montoChange(event:any){
    console.log(event.value)
  }

  calculate() {
    const requestCalculate = {
      'amount': this.firstFormGroup.get('monto').value,
      'infoChange': {
        'origin_currency': this.firstFormGroup.get('newTypeChange').value.origin_currency,
        'destination_currency': this.firstFormGroup.get('newTypeChange').value.destination_currency,
      }
    };

    this.typeChangeCurrencyService.calculate(requestCalculate).subscribe( response => {
      console.log("response - calculate :", response.amountTypeChange)
      this.resultado = response.amountTypeChange;
    }, error => {console.error("ERROR AL CALCUAR :", error)});

  }
}
