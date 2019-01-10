import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginotp',
  templateUrl: './loginotp.component.html',
  styleUrls: ['./loginotp.component.css']
})
export class LoginotpComponent implements OnInit {

  loginotpForm: FormGroup;
  submitted = false;
  
  constructor( private FormBuilder: FormBuilder ) {}
  ngOnInit() {
    this.loginotpForm = this.FormBuilder.group({
      phone: ['', Validators.required,Validators.minLength(10)]
    });
  }
  get f() { return this.loginotpForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginotpForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }

}
