import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './panels/users/users.component';
import { UserComponent } from './comps/items/user/user.component';
import { UserOptionsComponent } from './user-options/user-options.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './comps/items/post/post.component';
import { PostsComponent } from './panels/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserOptionsComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
