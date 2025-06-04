import { createReducer, on } from "@ngrx/store";
import { addEmployee, loadEmployeesFailure, loadEmployeesSuccess, updateEmployee } from "./employee.action";
import { Employee, employeeAddress, employeeData, EmployeeInitial, employees, employeeSkills } from "../data";

export let initialState: Employee[] = employees; // Initial state as array of employees
// initialState = [
// ...employees.map((emp) => ({
//     id: emp.id,
//     name: emp.name,
//     email: emp.email,
//     phone: "",
//     position: emp.position,
//     department: emp.department,
//     address: {
//       street: "",
//       city: "",
//       state: "",
//       zip: "",
//     },
//     skills: [],
//     experience: 0,
//   })),
//   ...employeeAddress.map((emp) => ({
//     id: emp.id,
//     name: emp.name,
//     email: emp.email,
//     phone: emp.phone,
//     position: emp.position,
//     department: emp.department,
//     address: emp.address,
//     skills: [],
//     experience: 0,
//   })),
//   ...employeeSkills.map((emp) => ({
//     id: emp.id,
//     name: emp.name,
//     email: emp.email,
//     phone: "",
//     position: emp.position,
//     department: emp.department,
//     address: {
//       street: "",
//       city: "",
//       state: "",
//       zip: "",
//     },
//     skills: emp.skills,
//     experience: emp.experience,
//   })),
// ];

export const employeeReducer = createReducer(
    initialState,
    on(addEmployee, (state, { employee }) => {
        // Find the max id in the current state
        const maxId = state.length > 0 ? Math.max(...state.map(emp => emp.id)) : 0;
        // Add employee with incremented id
        return [
            ...state,
            { ...employee, id: maxId + 1 }
        ];
    }),

    on(loadEmployeesSuccess, (state, { employees }) => 
        [...state, ...employees]
    ),

    on(loadEmployeesFailure, (state, { error }) => {
            console.error("Failed to load employees:", error); 
            return state; // Return the current state on failure
        }
    ),

    on(updateEmployee, (state, { employee }) =>
        state.map(emp => emp.id === employee.id ? { ...emp, ...employee } : emp)
    )
);