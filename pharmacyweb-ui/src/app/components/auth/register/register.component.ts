import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formData = {
    name: '',
    email: '',
    password: ''
  };

  loading = false;
  success = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.loading = true;

    this.auth.register(this.formData).subscribe({
      next: () => {
        this.success = 'Account created successfully';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}