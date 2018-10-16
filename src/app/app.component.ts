import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  public keyword: FormControl = new FormControl('', Validators.required);
  public searchForm: FormGroup = new FormGroup({
    keyword: this.keyword
  });

  public constructor(private titleService: Title, private router: Router, public userService: UserService) {}

  /**
   * Set the browser title.
   *
   * @param string title
   */
  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  /**
   * User logout.
   */
  public logout() {
    this.userService.logout().subscribe(res => {
      this.userService.handleLogout();
      this.router.navigate(['']);
    });
  }
}
