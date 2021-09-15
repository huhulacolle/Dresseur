import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDresseurComponent } from './liste-dresseur.component';

describe('ListeDresseurComponent', () => {
  let component: ListeDresseurComponent;
  let fixture: ComponentFixture<ListeDresseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDresseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDresseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
