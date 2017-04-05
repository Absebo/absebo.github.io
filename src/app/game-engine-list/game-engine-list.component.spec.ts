import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEngineListComponent } from './game-engine-list.component';

describe('GameEngineListComponent', () => {
  let component: GameEngineListComponent;
  let fixture: ComponentFixture<GameEngineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEngineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEngineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
