import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from "../../user.service";

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  username;
  userRepos;
  user;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // get the username out of the route params
      this.username = params['username'];
      this.userService
        .getUserRepos(this.username)
        .subscribe(userRepos => this.userRepos = userRepos);
      this.userService
        .getUser(this.username)
        .subscribe(user => this.user = user);
      // now we can go grab user data from github
    })
  }
}
