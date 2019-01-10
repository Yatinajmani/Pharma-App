import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  forgetpasswordForm: FormGroup;
  submitted = false;
  
  constructor( private FormBuilder: FormBuilder ) {}
  ngOnInit() {
    this.forgetpasswordForm = this.FormBuilder.group({
      phone: ['', Validators.required,Validators.minLength(10)]
    });
  }
  get f() { return this.forgetpasswordForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.forgetpasswordForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }

}
