import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  myForm: any;

  constructor(private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
    
    ) {
      this.myForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        // Add more form controls and validation rules as needed
      });
    }

  onSubmit() {
    const formData = {
      username: this.username,
      password: this.password
    };

    // Send a POST request to your login API
    this.http.post('http://localhost:8000/auth/login', formData).subscribe(
      (response: any) => {
        this.toastr.success('Login Successfully');
        this.router.navigate(['/webcam']);

      },
      (error) => {
        // Handle login error here
        console.error('Login failed', error);
      }
    );
  }
}
