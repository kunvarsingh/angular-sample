import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm: FormGroup;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {
  	this.formInitilization();
  }
   formInitilization(){
    this.signupForm = this._fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]      
    })
  }

}
