import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidGameComponent } from './void-game.component';

describe('VoidGameComponent', () => {
  let component: VoidGameComponent;
  let fixture: ComponentFixture<VoidGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoidGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
