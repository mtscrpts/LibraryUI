import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FetchUser } from '../../ngxs/actions/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loading: boolean = false;

  error: string = '';

  form = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  onSubmit(): void {
    this.login();
  }

  private login(): void {
      this.authService.login(this.form.value)
      .subscribe(
          token => this.onLoginSuccess(token),
          errorResponse => window.alert(errorResponse.error.error)
      );
  }

  private onLoginSuccess(token: any) {
      this.authService.setToken(token);
      // this.authService.setExpires(token.token);
      // this.authService.setExpiredAt(token.token);
      this.dispatchUser();
  }

  private dispatchUser() {
    this.store.dispatch(new FetchUser()).subscribe((state) => {
        this.loading = false;
        this.router.navigate(['/']);
    });
}

  private getUserName() {
    this.authService.getUserName().subscribe(json => {
      localStorage.setItem('user', json.name);
      this.router.navigate(['/']);
    })
  }

  private onLoginError(err: HttpErrorResponse) {
      this.error = err.status == 422 ? 'Invalid username or password.' : 'Failed to login.';
      this.loading = false;
      this.authService.logout();
  }
}
