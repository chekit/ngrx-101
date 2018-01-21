import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { UserModel } from '../../models/users/user.model';
import { UserInfoModel } from '../../models/users/user-info.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit {
  @Input() public model: UserInfoModel;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Можем ли отображать персональные данные
   * 
   * @returns {boolean} 
   */
  public hasPersonal(): boolean {
    return !!this.model && 
    !!this.model.user.name && 
    !!this.model.user.email && 
    !!this.model.user.phone && 
    !!this.model.user.username && 
    !!this.model.user.website && 
    !this.model.todos;
  }
}
