import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { response } from 'express';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({

  selector: 'app-signup',
  imports: [FormsModule,CommonModule ,ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  username: string = '';
  name: string = '';
  email: string = '';
  role: string = 'Student';
  password: string = '';

  constructor(private authUser: AuthService) {}

  registerUser():void {
    const userData = {
      username: this.username,
      email: this.email,
      role: this.role,
      password: this.password,
    };
    this.authUser.register(userData).subscribe((response)=>{
      console.log(response);
    },
    (error)=>{ console.log(error); }
    );
  }
}
