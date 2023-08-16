import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  hideContent = false;
  employee: Employee = { name: 'John', id: 2 };
  color: string = ''; // Add a color property
  hobbies: string;

  setEmployeeName() {
    this.employee = { name: 'New name', id: 22 };
  }

  changeColor(color: string) {
    this.color = color;
  }

  displayHobby() {
    this.hobbies = 'Watching Football';
  }

  getListing(): boolean {
    return this.hideContent ? true : false;
  }

  setHidenProperty() {
    this.hideContent = true;
  }
}
