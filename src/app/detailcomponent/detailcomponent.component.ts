import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-detailcomponent',
  templateUrl: './detailcomponent.component.html',
  styleUrls: ['./detailcomponent.component.css']
})
export class DetailcomponentComponent implements OnInit {

  public employees = []
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    // this.employees = this._employeeService.getEmployee()
    this._employeeService.getEmployee()
      .subscribe(data => this.employees = data,
            error => this.errorMsg = error);
  }

}
