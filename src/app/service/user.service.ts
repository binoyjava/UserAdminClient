import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  getAllUsers(): Observable<User[]> {
    /*return [{'id': 1, 'name': 'Binoy', 'password' : 'password123'},
    {'id': 2, 'name': 'Shinoy', 'password' : 'password123'},
    {'id': 3, 'name': 'Rajeev', 'password' : 'password123'}];*/
    return this.http.get<User[]>('http://localhost:8080/api/findAllUsers');
  }
  updateUser(user: User) {

  }
  addUser(user: User) {

  }
  delteUser(id): Observable<any> {
    return this.http
      .delete('http://localhost:8080/api/delete/' + id);
  }
}
