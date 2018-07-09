import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { User } from './user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

let type = 10;

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})


export class FormDetailsComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private Config: ConfigService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      subject: ['', Validators.required],
      descr: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)');
  }
  // tslint:disable-next-line:member-ordering
  handleChange(val) {
    type = val;
    console.log(val);
  }
  sendUser(event) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)');
    event.preventDefault();
    const target = event.target;
    const subject = target.querySelector('#subject').value;
    const descr = target.querySelector('#descr').value;
    const firstname = target.querySelector('#firstname').value;
    const lastname = target.querySelector('#lastname').value;
    const email = target.querySelector('#email').value;
    console.log(type);
    this.Config.getUserDetails(subject , descr, firstname, lastname, email, type);

  }
}
