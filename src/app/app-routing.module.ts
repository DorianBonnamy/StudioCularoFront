import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DeliveryModule } from './delivery/delivery.module';

import { ROUTES } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
