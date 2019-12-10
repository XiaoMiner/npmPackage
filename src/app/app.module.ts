import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputModule } from './components/input/input.module';
import { HhtHongyeXModule } from "../../projects/hht-hongye-x/src/lib/hht-hongye-x.module";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputModule,
    HhtHongyeXModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
