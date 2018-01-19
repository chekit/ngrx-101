import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { AppService } from '../../app.service';
import { UserInfoModel } from '../../models/users/user-info.model';
import { IUser, UserModel } from '../../models/users/user.model';
import { UsersModel } from '../../models/users/users.model';
import { UsersPageState, getAllUsers } from '../../store/index';
import { selectUsers, UsersListState } from '../../store/reducers/users/users.reducer';
import { UsersListActions, LoadUsers, LoadUsersSuccess } from '../../store/actions/users/users.action';
import { LoadUserSuccess } from '../../store/actions/users/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public model: UsersModel = null;
  public users$: Observable<UserModel[]>;
  public current$: Observable<UserInfoModel>;
  public isLoading: boolean = true;

  constructor(
    private store: Store<UsersPageState>
  ) { }

  ngOnInit() {
    this.store.select('users')
      .subscribe(state => console.log(state));
  }

  /**
   * Handler выбора пользователя
   * 
   * @param {number} id 
   */
  public onUserSelect(id: number): void {
    // forkJoin(
    //   this.appService.getUser(id),
    //   this.appService.getUserTodos(id)
    // )
    //   .subscribe((res: [UserModel, any]) => {
    //     this.model.setCurrent(new UserInfoModel({
    //       user: res[0],
    //       todos: res[1]
    //     }));
    //   });
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
