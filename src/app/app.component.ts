import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '🐱 Touch a Button 🐶';
  happy = false;
  sad = false;
  crazy = false;
}
