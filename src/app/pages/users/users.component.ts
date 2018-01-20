import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { AppService } from '../../app.service';
import { UserInfoModel } from '../../models/users/user-info.model';
import { IUser, UserModel } from '../../models/users/user.model';
import { UsersModel } from '../../models/users/users.model';
import { IUsersPageState, getAllUsers } from '../../store/index';
import { selectUsersList, UsersListState } from '../../store/reducers/users/users.reducer';
import { UsersListActions, LoadUsers, LoadUsersSuccess, SelectUser } from '../../store/actions/users/users.action';
import { LoadUserSuccess, UserActionsTypes } from '../../store/actions/users/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public isLoading: boolean = true;



  public users$: Observable<UserModel[]>;
  public current$: Observable<UserInfoModel>;

  constructor(
    private appService: AppService,
    private store: Store<IUsersPageState>
  ) { }

  ngOnInit() {
    this.users$ = this.store.select<any>(getAllUsers);

    this.store.dispatch(new LoadUsers());
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
        this.store.dispatch(new SelectUser(new UserInfoModel({
          user: res[0],
          todos: res[1]
        })))
        // this.model.find.setCurrent(new UserInfoModel({
        //   user: res[0],
        //   todos: res[1]
        // }));
      });
  }

  /**
   * Handler фидьтрации списка пользователей
   * 
   * @param {string} query 
   */
  public onFilterUsersList(query: string): void {
    // this.model.updateQuery(query);
  }
}
