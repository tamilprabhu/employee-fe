import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { loadEmployees, loadEmployeesFailure, loadEmployeesSuccess } from "./employee.action";
import { employees } from "../data";


@Injectable()
export class EmployeeEffects {
    loadEmployees$;
    constructor(private actions$: Actions) {
        // Effect to load employees
        this.loadEmployees$ = createEffect(() =>
            this.actions$.pipe(
                ofType(loadEmployees),
                switchMap(() => {
                    console.log("Loading employees...");
                    // Simulate an API call
                    return of([{id:4, name: "Tom new", email: "tom@gmail.com", position: "pos", department: "dept"}]).pipe(
                        map((employees) => loadEmployeesSuccess({ employees })),
                        catchError((error) => of(loadEmployeesFailure({ error })))
                    );
                })
            )
        );
    }
}