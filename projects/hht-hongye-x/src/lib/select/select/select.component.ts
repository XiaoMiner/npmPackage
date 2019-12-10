import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'x-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() selData: any[] = [];
  @Output() selChange = new EventEmitter();
  @Input() optionData: number = 0;
  constructor() { }

  ngOnInit() {
  }
  optionChange(index){
    this.selChange.emit(index);
  }
}

