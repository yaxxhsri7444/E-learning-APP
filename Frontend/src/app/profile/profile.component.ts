import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user : any= {};

  constructor(private authservice : AuthService , private router : Router){}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.user = {
      username: localStorage.getItem('username'),
      email: localStorage.getItem('email'),
      role: localStorage.getItem('role'),
    };
  }

  editProfile(): void {
    console.log('Edit profile clicked!');
    this.router.navigate(['/edit-profile']);
  }
}
