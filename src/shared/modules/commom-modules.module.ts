import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxCurrencyModule } from "ngx-currency";

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NgxMatSelectSearchModule,
  NgxCurrencyModule
];

@NgModule({
  declarations: [],
  imports: [
    ... modules,
    NgxMaskModule.forRoot()
  ],
  exports: [
    ... modules,
    NgxMaskModule
  ]
})
export class CommomModulesModule {}
