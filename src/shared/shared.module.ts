import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material.module';

// const components = [
//     MapComponent
// ];

const modules = [
  AngularMaterialModule
];


@NgModule({
  declarations: [
   // ... components
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...modules
  ],
  exports: [
    ...modules
  ],
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class SharedModule { }
