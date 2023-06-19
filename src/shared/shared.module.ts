import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// const components = [
//     MapComponent
// ];

@NgModule({
  declarations: [
   // ... components
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    //... components
  ],
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class SharedModule { }
