import { Directive, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[xForEnd]'
})
export class ForEndDirective implements AfterViewInit {

  @Input() xForEnd: boolean;
  @Output() xForEnded: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
  ngAfterViewInit() {
    if (this.xForEnd) {
      this.xForEnded.emit(this.xForEnd);
    }
  }

}
