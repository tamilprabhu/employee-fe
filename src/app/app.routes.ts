import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddressComponent } from './address/address.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    {
        path: '', component: UserComponent
    },
    {
        path: 'user', component: UserComponent
    },
    {
        path: 'employee', component: EmployeeComponent
    },
    {
        path: 'address', component: AddressComponent
    },
    {
        path: 'skills', component: SkillsComponent
    }
];
