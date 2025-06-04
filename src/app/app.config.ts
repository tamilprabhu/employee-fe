import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { employeeReducer } from './store/employee.reducer';
import { provideEffects } from '@ngrx/effects';
import { EmployeeEffects } from './store/employee.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore({employeeReducer: employeeReducer}), // Assuming you have a reducer named employeeReducer
    provideEffects([EmployeeEffects]),
  ]
};
