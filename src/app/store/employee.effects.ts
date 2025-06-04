import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { loadEmployees, loadEmployeesSuccess, loadEmployeesFailure } from './employee.action';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeEffects {
  loadEmployees$;
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {
    this.loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployees),
      switchMap(() => {
        console.log('Loading employees...');
        return this.http.get<any[]>('http://127.0.0.1:5000/employees').pipe(
          map(employees => loadEmployeesSuccess({ employees })),
          catchError(error => of(loadEmployeesFailure({ error })))
        );
      })
    )
  );
  }

  
}