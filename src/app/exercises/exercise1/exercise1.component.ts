// exercise1.component.ts

import { Component } from '@angular/core';
import { AbstractControl, FormControl,  ValidatorFn } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({

  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']

})

export class Exercise1Component  {
  user = {
    name: '',
    email: '',
    password: ''
  };
   passwordPattern = '^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()]).*$';

  onSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      console.log('Form submitted successfully!');
      console.log(this.user);
    }
  }
}

export const PasswordValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.value;
  if (password && !password.match(/^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()]).*$/)) {
    return { invalidPassword: true };
  }
  return null;
};



