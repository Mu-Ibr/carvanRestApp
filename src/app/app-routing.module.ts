import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'budget-managment',
    loadChildren: () => import('./budget-managment/budget-managment.module').then( m => m.BudgetManagmentPageModule)
  },
  {
    path: 'cash-flow',
    loadChildren: () => import('./cash-flow/cash-flow.module').then( m => m.CashFlowPageModule)
  },
  {
    path: 'financial-managment',
    loadChildren: () => import('./financial-managment/financial-managment.module').then( m => m.FinancialManagmentPageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses/expenses.module').then( m => m.ExpensesPageModule)
  },
  {
    path: 'kitchen',
    loadChildren: () => import('./kitchen/kitchen.module').then( m => m.KitchenPageModule)
  },
  {
    path: 'manager-menu',
    loadChildren: () => import('./manager-menu/manager-menu.module').then( m => m.ManagerMenuPageModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservations/reservations.module').then( m => m.ReservationsPageModule)
  },
  {
    path: 'sales-report',
    loadChildren: () => import('./sales-report/sales-report.module').then( m => m.SalesReportPageModule)
  },
  {
    path: 'waiter',
    loadChildren: () => import('./waiter/waiter.module').then( m => m.WaiterPageModule)
  },
  {
    path: 'workers-managment',
    loadChildren: () => import('./workers-managment/workers-managment.module').then( m => m.WorkersManagmentPageModule)
  },
  {
    path: 'inventory-managment',
    loadChildren: () => import('./inventory-managment/inventory-managment.module').then( m => m.InventoryManagmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
