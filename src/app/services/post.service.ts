import { UserService } from './user.service';
import { Post } from './../model/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  private api = 'https://jsonplaceholder.typicode.com/posts?userId=#'

  Selection: Post

  constructor(private http : HttpClient,public usSrvc:UserService) { }

  getUserPost(): Observable<Post[]>{
    return this.http.get<Post[]>(this.api.replace('#', this.usSrvc.selection.id.toString()))

  }
}
