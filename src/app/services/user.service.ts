import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = 'https://jsonplaceholder.typicode.com/users/'

  selection : User

  constructor(private http : HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.api)
  }

}
