import { AppState } from "./app.state";

export const selectEmployee = (state: AppState) => state.employeeReducer;