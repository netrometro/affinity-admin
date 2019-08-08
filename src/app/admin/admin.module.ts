import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing.module';

import { AdminComponent } from './admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import { AdminService } from './dmin/admin.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AnalyticsComponent],
  providers: [
    AdminService
  ]
})
export class AdminModule { }