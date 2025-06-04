import { Component, Input } from '@angular/core';
import { Employee, employees } from '../data';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from "../employee/employee.component";
import { Store } from '@ngrx/store';
import { selectEmployee } from '../store/app.selector';
import { AppState } from '../store/app.state';
import { loadEmployees } from '../store/employee.action';

@Component({
  selector: 'app-user',
  imports: [CommonModule, EmployeeComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  employees: Employee[] = [];
  showForm: boolean = false;
  showAddEmployeeBtn: boolean = true;
  @Input() newEmployee: Employee | null = null;
  
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    // this.employees = employees;   
    this.store.dispatch(loadEmployees());
     this.store.select(selectEmployee).subscribe((data: Employee[]) => {
      this.employees = data;
      console.log('Employees from store:', this.employees);
    });
  }

  addEmployee() {
    this.showForm = true;
    this.showAddEmployeeBtn = false;
  }

  showEmployeeList() {
    this.showForm = false;
    this.showAddEmployeeBtn = true;
  }

  editEmployee(employee: Employee) {
    // Logic to edit employee
  }

  deleteEmployee(employee: number) {
    // Logic to delete employee
  } 

  onSave(e: Event) {
  }

  onCancel() {
    // Logic to cancel the operation
  }

  saveEmployee(employee: Employee) {
    if (employee) {
      this.employees.push(employee);
      this.showForm = false;
      this.showAddEmployeeBtn = true;
    }
  }

}
