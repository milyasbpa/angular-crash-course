import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.css']
})
export class ListcomponentComponent implements OnInit {

  public employees = []
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    // this.employees = this._employeeService.getEmployee();
    this._employeeService.getEmployee()
      .subscribe(data => this.employees = data);
  }

}
