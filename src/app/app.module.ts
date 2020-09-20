import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, PaymentComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'form-component', component: AppComponent },
  { path: 'payment-component', component: PaymentComponent },
];
@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  declarations: [ AppComponent,HelloComponent,PaymentComponent ],
  bootstrap:    [ AppComponent ],
  exports: [RouterModule]
})
export class AppModule {
  
 }
