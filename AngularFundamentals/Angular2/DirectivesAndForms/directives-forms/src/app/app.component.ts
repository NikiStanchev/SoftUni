import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  car = {
    model:'Pesho',
    make:'Ivan'
  };

  myMagicNumber = 120;
}
