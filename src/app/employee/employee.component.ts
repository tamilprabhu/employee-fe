import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Employee } from '../data';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { addEmployee } from '../store/employee.action';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: []
})

export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  employeeForm!: FormGroup;
  // Assuming you have a service to handle employee data, you can inject it here
  @Output() newEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() showList: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  constructor(
    private store: Store<any>,
    private router: Router // Replace 'any' with the actual type of your routing service
  ) { }

  ngOnInit() {
    // Initialize employees array or fetch from a service
    this.employeeForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false }, Validators.required),
      email: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email]),
      position: new FormControl({ value: '', disabled: false }, Validators.required),
      department: new FormControl({ value: '', disabled: false }),
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      // Handle form submission logic here, e.g., send data to a service
      console.log(this.employeeForm.value);
    }
  }  
  
  resetForm() {
    this.employeeForm.reset();
  }

  saveEmployee()  {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.store.dispatch(addEmployee({ employee: this.employeeForm.value }));
      this.router.navigate(['/user']);
      this.showList.emit(true);
      // const newEmployee: Employee = this.employeeForm.value;
      // this.newEmployee.emit(newEmployee);
      // this.resetForm();
    }
  }

}
