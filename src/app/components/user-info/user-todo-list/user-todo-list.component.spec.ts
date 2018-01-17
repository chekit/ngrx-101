import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTodoListComponent } from './user-todo-list.component';

describe('UserTodoListComponent', () => {
  let component: UserTodoListComponent;
  let fixture: ComponentFixture<UserTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
