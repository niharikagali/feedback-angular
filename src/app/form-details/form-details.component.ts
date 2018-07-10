import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { User } from './user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ApiServicesService } from '../api-services.service';
import {HttpClient} from '@angular/common/http';
import { RouteConfigLoadEnd } from '@angular/router';

let type = 10;

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})


export class FormDetailsComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
   public ref_id: string;

  // tslint:disable-next-line:max-line-length
  constructor(private Config: ConfigService, private formBuilder: FormBuilder, private modalService: NgbModal, private http: HttpClient, private refid: ApiServicesService) {}
  closeResult: string;


  ngOnInit() {
       this.ref_id = this.Config.x;
       console.log(this.Config.x);
       console.log(this.ref_id);
   ///    this.ref_id="rrr";
    this.registerForm = this.formBuilder.group({
      subject: ['', [Validators.required, Validators.maxLength(50)]],
      descr: ['', [Validators.required, Validators.maxLength(100)]],
      firstname: ['', [Validators.required, Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.registerForm.controls; }

  openWindow(content) {

    this.modalService.open(content, { windowClass: 'dark-modal' , centered: true});

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  resetForm() {
    this.registerForm.reset();
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
