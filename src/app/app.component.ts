import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validator, Validators, ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-new';

  test = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
}
