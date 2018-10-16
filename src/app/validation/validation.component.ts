import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() form: FormGroup;
  @Input() field: string;
  @Input() message: string;

  public isValid(): boolean {
    return ! this.form.get(this.field).valid && this.form.get(this.field).touched;
  }

}
