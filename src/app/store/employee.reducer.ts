import { createReducer, on } from "@ngrx/store";
import { addEmployee, loadEmployeesFailure, loadEmployeesSuccess, updateEmployee } from "./employee.action";
import { Employee, employeeAddress, employeeData, EmployeeInitial, employees, employeeSkills } from "../data";

export let initialState: EmployeeInitial[] = employeeData; // Initial state as array of employees
initialState = [
...employees.map((emp) => ({
    id: emp.id,
    name: emp.name,
    email: emp.email,
    phone: "",
    position: emp.position,
    department: emp.department,
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    skills: [],
    experience: 0,
  })),
  ...employeeAddress.map((emp) => ({
    id: emp.id,
    name: emp.name,
    email: emp.email,
    phone: emp.phone,
    position: emp.position,
    department: emp.department,
    address: emp.address,
    skills: [],
    experience: 0,
  })),
  ...employeeSkills.map((emp) => ({
    id: emp.id,
    name: emp.name,
    email: emp.email,
    phone: "",
    position: emp.position,
    department: emp.department,
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    skills: emp.skills,
    experience: emp.experience,
  })),
];

export const employeeReducer = createReducer(
    initialState,
    on(addEmployee, (state, { employee }) => {
        // Only update the employee section (not address or skills)
        const maxId = state.length > 0 ? Math.max(...state.map(emp => emp.id)) : 0;
        return [
            ...state,
            {
                ...employee,
                id: maxId + 1,
                address: {
                    street: "",
                    city: "",
                    state: "",
                    zip: "",
                },
                skills: [],
                experience: 0,
            }
        ];
    }),

    on(updateEmployee, (state, { employee }) =>
        state.map(emp =>
            emp.id === employee.id
                ? {
                    ...emp,
                    name: employee.name,
                    email: employee.email,
                    phone: employee.phone,
                    position: employee.position,
                    department: employee.department,
                    // Keep address, skills, and experience unchanged
                    address: emp.address,
                    skills: emp.skills,
                    experience: emp.experience,
                }
                : emp
        )
    ),

    on(loadEmployeesSuccess, (state, { employees }) =>
        [
            ...state,
            ...employees.map(employee => ({
                ...employee,
                address: {
                    street: "",
                    city: "",
                    state: "",
                    zip: "",
                },
                skills: [],
                experience: 0,
            }))
        ]
    ),

    on(loadEmployeesFailure, (state, { error }) => {
        console.error("Failed to load employees:", error);
        return state;
    })
);

export const employeeSkillsReducer = createReducer(
    initialState,

    on(updateEmployee, (state, { employee }) =>
        state.map(emp => emp.id === employee.id ? { ...emp, ...employee } : emp)
    )
);