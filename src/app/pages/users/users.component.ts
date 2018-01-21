import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { AppService } from '../../app.service';
import { UserInfoModel } from '../../models/users/user-info.model';
import { IUser, UserModel } from '../../models/users/user.model';
import { UsersModel } from '../../models/users/users.model';
import { IAppState, getAllUsers, getCurrentUser, getUsersLoading, getUsersLoaded } from '../../store/index';
import { selectUsersList, UsersListState } from '../../store/reducers/users/users.reducer';
import { UsersListActions, LoadUsers, LoadUsersSuccess, SelectUser } from '../../store/actions/users/users.action';
import { LoadUserSuccess, UserActionsTypes, LoadUser } from '../../store/actions/users/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public isLoading: boolean = true;

  public users$: Observable<UserModel[]>;
  public loading$: Observable<boolean>;
  public loaded$: Observable<boolean>;
  public current$: Observable<UserInfoModel>;

  constructor(
    private appService: AppService,
    private store: Store<IAppState>
  ) {
    this.users$ = this.store.select<any>(getAllUsers);
    this.loading$ = this.store.select<any>(getUsersLoading);
    this.loaded$ = this.store.select<any>(getUsersLoaded);

    this.current$ = this.store.select<any>(getCurrentUser);
  }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
  }

  /**
   * Handler выбора пользователя
   * 
   * @param {number} id 
   */
  public onUserSelect(id: number): void {
    this.store.dispatch(new SelectUser({ id }));
    this.store.dispatch(new LoadUser({ id }));
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
