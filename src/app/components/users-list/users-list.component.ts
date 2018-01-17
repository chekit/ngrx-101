import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Users } from '../../models/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() public model: Users;
  @Output() userSelect: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public trackById(index: number, user: any): number {
    return user.id;
  }

  /**
   * Handler для события выбора пользователя
   * 
   * @param {number} number 
   */
  public onUserSelected(number: number): void {
    this.userSelect.emit(number);
  }
}
