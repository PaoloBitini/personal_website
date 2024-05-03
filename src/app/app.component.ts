import { Component } from '@angular/core';
import { slidInAnimation } from './app.transitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slidInAnimation],
})
export class AppComponent {
  title = 'personal_website';
}
