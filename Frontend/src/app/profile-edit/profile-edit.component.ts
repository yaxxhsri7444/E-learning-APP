import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-edit',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent implements OnInit {
  profileForm: FormGroup;
  user: any = {};
  isEditing = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      role: [{ value: '', disabled: true }]  // Role is not editable
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const storedUser = {
      username: localStorage.getItem('username'),
      email: localStorage.getItem('email'),
      role: localStorage.getItem('role'),
    };

    if (storedUser.email) {
      this.user = storedUser;
      this.profileForm.patchValue(this.user);
    } else {
      this.router.navigate(['/login']); // Redirect if not logged in
    }
  }

  enableEdit(): void {
    this.isEditing = true;
  }

  saveProfile(): void {
    if (this.profileForm.invalid) return;

    const updatedUser = this.profileForm.value;
    console.log('Updated Profile:', updatedUser);

    this.isEditing = false;
    localStorage.setItem('username', updatedUser.username);
    localStorage.setItem('email', updatedUser.email);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
