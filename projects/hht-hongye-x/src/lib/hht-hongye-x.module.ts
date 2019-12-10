import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { HhtHongyeXComponent } from './hht-hongye-x.component';
import {SelectModule} from "./select/select.module";
import {ToastModule} from "./toast/toast.module";
import {MyPipeModule} from "./my-pipe/my-pipe.module";
import {MyDirectiveModule} from "./my-directive/my-directive.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
    ToastModule,
    MyPipeModule,
    MyDirectiveModule
  ],
  declarations: [HhtHongyeXComponent],
  exports: [HhtHongyeXComponent, SelectModule, ToastModule, MyPipeModule, MyDirectiveModule]
})
export class HhtHongyeXModule { }
