import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveBitsPipe } from './reserve-bits.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReserveBitsPipe],
  exports: [ReserveBitsPipe]
})
export class MyPipeModule { }
