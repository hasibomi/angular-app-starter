import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public email: FormControl = new FormControl(null, Validators.required);
  public password: FormControl = new FormControl(null, Validators.required);
  public signinForm: FormGroup = new FormGroup({
    email: this.email,
    password: this.password
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Handle sign in.
   */
  onSubmit() {
    if (this.signinForm.valid) {
      this.userService.signin(this.signinForm.value).subscribe(res => {
        if (res.status === 'success') {
          this.userService.handleSignin(res);
          this.router.navigate(['']);
        }
      });
    } else {
      Object.keys(this.signinForm.controls).forEach(field => {
        const control = this.signinForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
