import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { exactLengthValidator, minLengthValidator, maxLengthValidator } from '../shared/customValidators';

const errorMessages = {
  1: 'Card number should not be empty.'
}

const ERROR_MESSAGE = {
  'required': 'Value is required',
  'minLength': 'Value is too short',
  'maxLength': 'Value is too long',
  'length': 'Value should have '
}

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css']
})

export class PaymentCardComponent {
  creditCardForm: any;
  bankName = 'The Bank';
  isFrontSideVisible = true;
  isBackSideVisible = false;
  cardData;

  constructor() {
    this.createForm();
  }

  public switchSide(event) {
    const isFrontSideFormValid = this.isSideFormValid('front');
    const isBackSideFormValid = this.isSideFormValid('back');

    if (isFrontSideFormValid && event.srcElement.classList.contains('disable')) {
      this.isFrontSideVisible = !this.isFrontSideVisible;
      this.isBackSideVisible = !this.isBackSideVisible;
    }
  }

  public displayErrorMessage(formElementName: string): boolean {
    if (formElementName.includes('date')) {
      return this.creditCardForm.controls['month']?.touched && !this.creditCardForm.controls['month'].valid ||
        this.creditCardForm.controls['year']?.touched && !this.creditCardForm.controls['year'].valid;
    }

    return this.creditCardForm.controls[formElementName]?.touched && !this.creditCardForm.controls[formElementName].valid
  }

  public getErrorMessage(formElementName: string): string {
    let err;
    if (formElementName.includes('date')) {
      err = this.getErrorFromDate();
    } else {
      err = Object.keys(this.creditCardForm.controls[formElementName].errors)
    }    

    return ERROR_MESSAGE[err[0]];
  }

  public getName(): string {
    return this.creditCardForm.controls['name'].value;
  }

  public getCardLogo(): string {
    const path = "../assets/payment-card-images/";
    const binNumber = +this.creditCardForm.controls['number'].value?.toString()[0];

    switch (binNumber) {
      case 3:
        return `${path}amexpress_logo.png`;

      case 4:
          return `${path}visa_logo.png`;

      case 5:
        return `${path}mastercard_logo.png`;

      case 6:
        return `${path}discover_logo.png`;

      default:
        return `${path}default.png`;

    }
  }

  private isSideFormValid(cardSide: string): boolean {
    switch (cardSide) {
      case 'front':
        return ['number', 'month', 'year', 'name'].every(key => this.creditCardForm.controls[key].status === 'VALID');

      case 'back':
        return this.creditCardForm.controls['cvv'].status === 'VALID';
    }

    return false;
  }

  private getErrorFromDate(): string[] {
    if (this.creditCardForm.controls['month'].errors) {
      return Object.keys(this.creditCardForm.controls['month'].errors)
    }

    return Object.keys(this.creditCardForm.controls['year'].errors)
  }

  private createForm() {
    this.creditCardForm = new FormGroup({
      number: new FormControl<number>(null, [Validators.required, minLengthValidator(13), maxLengthValidator(19)]),
      name: new FormControl<string>('', [Validators.required]),
      month: new FormControl<number>(null, [Validators.required, Validators.min(1), Validators.max(12)]),
      year: new FormControl<number>(null, [Validators.required, Validators.min(this.getCurrentYear()), Validators.max(this.getMaxValidYear())]),
      cvv: new FormControl<number>(null, [Validators.required, exactLengthValidator(3)]),
    });
  }

  private getCurrentYear(): number {
    return new Date().getFullYear()
  }

  private getMaxValidYear(): number {
    return new Date().getFullYear() + 5;
  }
}
