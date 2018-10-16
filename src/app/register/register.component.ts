import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public name: FormControl = new FormControl(null, Validators.required);
  public email: FormControl = new FormControl(null, [
    Validators.required,
    Validators.email
  ]);
  public password: FormControl = new FormControl(null, Validators.required);
  public passowrd_confirmation: FormControl = new FormControl(null, Validators.required);
  public signupForm: FormGroup = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    password_confirmation: this.passowrd_confirmation
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}

  /**
   * Handle sign up.
   */
  public onSubmit() {
    if (this.signupForm.valid) {
      this.userService.signup(this.signupForm.value).subscribe(res => {
        if (res.status === 'success') {
          this.router.navigate(['signin']);
        }
      });
    } else {
      Object.keys(this.signupForm.controls).forEach(field => {
        const control = this.signupForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
