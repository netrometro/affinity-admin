import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AnalyticsComponent],
  providers: []
})
export class AdminModule { }