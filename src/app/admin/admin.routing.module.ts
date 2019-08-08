import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import { AdminGuard } from '.././guards/admin.guard';

const adminRoutes: Routes = [
   { path: 'admin', component: AdminComponent },
   { path: 'analytics', component: AnalyticsComponent, canActivate: [AdminGuard] }
   
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }