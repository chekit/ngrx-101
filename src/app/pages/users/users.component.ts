import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../models/users/users.model';
import { AppService } from '../../app.service';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { IUser, UserModel } from '../../models/users/user.model';
import { UserInfoModel } from '../../models/users/user-info.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public model: UsersModel = null;
  public isLoading: boolean = true;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getUsers()
      .subscribe((res: UserModel[]) => {
        this.isLoading = false;
        this.model = this.appService.createUsersInstance(res);
      });
  }

  /**
   * Handler выбора пользователя
   * 
   * @param {number} id 
   */
  public onUserSelect(id: number): void {
    forkJoin(
      this.appService.getUser(id),
      this.appService.getUserTodos(id)
    )
      .subscribe((res: [UserModel, any]) => {
        this.model.setCurrent(new UserInfoModel({
          user: res[0],
          todos: res[1]
        }));
      });
  }

  /**
   * Handler фидьтрации списка пользователей
   * 
   * @param {string} query 
   */
  public onFilterUsersList(query: string): void {
    this.model.updateQuery(query);
  }
}
