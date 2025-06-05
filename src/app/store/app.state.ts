import { Employee, EmployeeSkills } from "../data";

export interface AppState {
  employeeReducer: Employee[];
  employeeSkillsReducer: EmployeeSkills[];
}