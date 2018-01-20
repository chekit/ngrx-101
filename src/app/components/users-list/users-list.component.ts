import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { UsersModel } from '../../models/users/users.model';
import { UserModel } from '../../models/users/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  @Input() public model: UserModel[];

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
