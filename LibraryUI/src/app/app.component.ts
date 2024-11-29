import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserState } from './ngxs/states/user.state';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { RemoveUser } from './ngxs/actions/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  @Select(UserState.getUserName)
  user$!: Observable<any>;
  subscription: Subscription = new Subscription;

  title = 'LibraryUI';
  userName: any;

  constructor(
    public router: Router,
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.subscription = this.user$.subscribe(data => {
      this.userName = data.userName;
      if (this.userName) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/', 'login']);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.store.dispatch(new RemoveUser()).subscribe((state) => {
      this.router.navigate(['/', 'login']);
    });
    
  }
}
