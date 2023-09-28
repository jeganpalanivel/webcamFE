import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
    ) {}

  formData: any = {}; // Initialize an object to store form data

  onSubmit() {
    const registrationData = {
      username: this.formData.username,
      password: this.formData.password
    };
  
    this.http.post('http://localhost:8000/auth/register', registrationData).subscribe(
      (response: any) => {
        this.toastr.success('Registered successfully');
        this.router.navigate(['/login']);

      },
      (error) => {
        // Handle registration error here
        console.error('Registration failed', error);
      }
    );
  }
  
}
