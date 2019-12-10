import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HhtHongyeXComponent } from './hht-hongye-x.component';

describe('HhtHongyeXComponent', () => {
  let component: HhtHongyeXComponent;
  let fixture: ComponentFixture<HhtHongyeXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HhtHongyeXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HhtHongyeXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
