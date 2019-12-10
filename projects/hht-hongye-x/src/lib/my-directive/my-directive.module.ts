import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForEndDirective } from './for-end.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ForEndDirective],
  exports: [ForEndDirective]
})
export class MyDirectiveModule { }
