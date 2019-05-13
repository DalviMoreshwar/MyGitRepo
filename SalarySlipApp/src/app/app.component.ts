import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SalarySlipApp';

  name: String;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  submit(){
    console.log(this.name);
  }

}
