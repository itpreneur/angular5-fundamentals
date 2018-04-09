import { Component, OnInit } from '@angular/core';
import {
  NgForm, FormBuilder, FormControl,
  FormGroup, Validators, AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {
  myForm: FormGroup;
  customValidatorForm: FormGroup;
  name1: AbstractControl;
  sku: AbstractControl;
  productName: string;


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'name1': ['', Validators.required],
      'age1': ['', Validators.required]
    });
    //CUSTOM VALIDATORS
    this.customValidatorForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, this.skuValidator])],
      'productName': ['', Validators.required]
    });
    this.sku = this.customValidatorForm.controls['sku'];
    this.name1 = this.myForm.controls['name1'];
  }

  ngOnInit() {
    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed to:', value);
    }
    );
    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to:', form);
    }
    );
  }
  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
  }


  onSubmit(form: NgForm) {
    console.log('form', form)
  }
  onSubmitMyForm(m: any) {
    console.log('validation', this.myForm)
    if (this.myForm.valid)
      console.log('reactive form', m)
  }
  onSubmitValidator(m: any) {
    console.log('validation', this.customValidatorForm)
    if (this.customValidatorForm.valid)
      console.log('reactive form', m)
  }
}
