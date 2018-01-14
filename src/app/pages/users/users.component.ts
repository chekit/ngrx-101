import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users.model';
import { AppService } from '../../app.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public model: Users = null;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getUsers()
      .subscribe(res => {
        this.model = this.appService.createUsersInstance(res);
      });
  }

  public onUserSelect(id: number): void {
    this.appService.getUser(id)
      .subscribe(res => {
        console.log(res);
      });
  }

}
