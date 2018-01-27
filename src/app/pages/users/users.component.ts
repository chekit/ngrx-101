import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { AppService } from '../../app.service';
import { UserInfoModel } from '../../models/users/user-info.model';
import { IUser, UserModel } from '../../models/users/user.model';
import * as fromStore from '../../store/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;

  public users$: Observable<UserModel[]>;
  public loadingUsers$: Observable<boolean>;
  public loadedUsers$: Observable<boolean>;

  public current$: Observable<UserInfoModel>;
  public loadingCurrent$: Observable<boolean>;
  public loadedCurrent$: Observable<boolean>;

  private query$: Observable<string>;

  public filterSubject$ = new Subject<string>();

  private sub: Subscription = null;

  constructor(
    private appService: AppService,
    private store: Store<fromStore.IAppState>
  ) {
    this.users$ = this.store.select<UserModel[]>(fromStore.selectAllUsers);
    this.query$ = this.store.select<string>(fromStore.selectUsersFilterQuery);

    this.loadingUsers$ = this.store.select<boolean>(fromStore.selectUsersLoading);
    this.loadedUsers$ = this.store.select<boolean>(fromStore.selectUsersLoaded);
    
    this.current$ = this.store.select<UserInfoModel>(fromStore.selectCurrentUser);
    this.loadingCurrent$ = this.store.select<boolean>(fromStore.selectCurrentUserLoading);
    this.loadedCurrent$ = this.store.select<boolean>(fromStore.selectCurrentUserLoaded);
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadUsers());
    this.store.dispatch(new fromStore.ResetCurrent());

    this.sub = this.filterSubject$
      .subscribe((query: string) => {
        this.store.dispatch(new fromStore.FilterUsers(query));
        this.store.dispatch(new fromStore.ResetCurrent());
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Handler выбора пользователя
   * 
   * @param {number} id 
   */
  public onUserSelect(id: number): void {
    this.store.dispatch(new fromStore.LoadUser(id));
  }
}
