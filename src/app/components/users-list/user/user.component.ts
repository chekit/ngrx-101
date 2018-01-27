import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../../../models/users/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() public model: UserModel;
  @Input() public isCurrent: boolean = false;

  @Output() userSelected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Выбор пользователя
   * 
   */
  public selectUser(): void {
    if (!this.isCurrent) {
      this.userSelected.emit(this.model.id);
    }
  }

}
