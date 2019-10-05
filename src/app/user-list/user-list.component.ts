import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users;
  // tslint:disable-next-line:ban-types
  public data: User = new User();
  public addFlag = true;
  constructor(public userService: UserService) {
    this.userService.getAllUsers().subscribe(data => this.users = data);
   }
   formSubmit() {
    /*this.userService.addUser(this.data).subscribe (
        (newUser) => {
          this.users = this.users.concat(newUser);
          console.log(this.users);
          this.data = new User();
        }
      )*/
  }
  formUpdate() {
  }
  ngOnInit() {
  }

  deleteUser(id: string) {
    console.log(id);
    this.userService.delteUser(id).
      subscribe((val) => {
        console.log('DELETE call successful value returned in body');
        this.userService.getAllUsers().subscribe(data => this.users = data);
        console.log('new list loaded');
      });
  }
  loadForUpdate(id: number, uName: string, password: string, token: string) {
    this.data = new User();
    this.data.id = id;
    this.data.uName = uName;
    this.data.password = password;
    this.data.token = token;
    console.log(this.data);
    this.addFlag = false;
  }
  cancelUpdate() {
    this.addFlag = true;
    this.data = new User();
  }

}
