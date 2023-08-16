import { Component, Input } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'hello',
  template: `<h1 [style.color]="textColor">{{employee?.name}}</h1>
  <h1>{{employee?.id}}</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  private _employee: Employee;
  @Input() set employee(employee: Employee) {
    console.log('changed happen');
    this._employee = Object.assign({}, employee);
  }
  get employee(): Employee {
    return this._employee;
  }
}
