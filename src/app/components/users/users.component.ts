import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
    },
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 main st',
          city: 'Boston',
          state: 'MA',
        },

        isActive: true,

        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA',
        },

        isActive: false,

        registered: new Date('03/11/2017 06:20:00'),
        hide: true,
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'MA',
        },

        isActive: true,

        registered: new Date('11/02/2016 10:30:00'),
        hide: true,
      },
    ];
    // this.showExtended = true;
    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson',
    //   age: 44,
    //   address: {
    //     street: '12 Mill st',
    //     city: 'Miami',
    //     state: 'MA',
    //   },
    // });
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: '',
      },
    };
  }
  toggleHide(user: User) {
    user.hide = !user.hide;
  }
  onSubmit(e: any) {
    console.log(123);
    e.preventDefault();
  }
  fireEvent(e) {
    console.log(e.target.value);
  }
}
