import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./expensivecomponents/expensivecomponents').then(com => com.Expensivecomponents)
    },
    {
        path: 'under-develop',
        loadComponent: () => import('./under.development/under.development').then(com => com.UnderDevelopment)
    }
];
