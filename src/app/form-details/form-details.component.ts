import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { User } from './user';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

  users: User[];
  constructor(private Config: ConfigService) { }

  ngOnInit() {
  }

  sendUser(event) {
    event.preventDefault();
    const target = event.target;
    const sub = target.querySelector('#subject').value;
    const descr = target.querySelector('#descr').value;
    const fname = target.querySelector('#firstname').value;
    const lname = target.querySelector('#lastname').value;
    const email = target.querySelector('#email').value;

    this.Config.getUserDetails({ sub }, { descr }, { fname }, { lname }, { email } as User);
    // console.log(fname, lname);
  }
}
