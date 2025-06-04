import { createAction, props } from "@ngrx/store";
import { Employee, EmployeeInitial } from "../data";


export const addEmployee = createAction(
  "[Employee] Add Employee",
  props<{ employee: Employee }>()
);

export const updateEmployee = createAction(
  "[Employee] Update Employee",
    props<{ employee: Employee }>()
);

export const deleteEmployee = createAction(
  "[Employee] Delete Employee",
    props<{ id: number }>()
);

export const loadEmployees = createAction(
  "[Employee] Load Employees"
);

export const loadEmployeesSuccess = createAction(
  "[Employee] Load Employees Success",
  props<{ employees: Employee[] }>()
);

export const loadEmployeesFailure = createAction(
  "[Employee] Load Employees Failure",
  props<{ error: any }>()
);