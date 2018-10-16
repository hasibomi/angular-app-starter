import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  public constructor(private titleService: Title, private router: Router) {}

  /**
   * Set the browser title.
   *
   * @param string title
   */
  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  public search(): void {
    if (this.searchForm.valid) {
      this.router.navigate(['/search', this.searchForm.value.keyword]);
    } else {
      alert('Please check your input');
    }
  }
}
