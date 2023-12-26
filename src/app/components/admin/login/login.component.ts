import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    if (this.username === 'your_username' && this.password === 'your_password') {
      // Successful login, you can navigate to another page or set a flag indicating the user is authenticated.
      console.log('Login successful');
    } else {
      // Failed login, display an error message or handle the error as needed.
      console.error('Login failed');
    }
  }
}
