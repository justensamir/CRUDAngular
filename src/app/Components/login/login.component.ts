import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = ''
  password: string = ''
  private adminUser: string='admin'
  private adminPass: string='123'
  constructor(private router:Router){}
  Signin(){
    if(this.username.toLowerCase() === this.adminUser && this.password == this.adminPass){
      this.router.navigate(['/admin_dashboard'])
    }
    else{
      this.router.navigate(['/products'])
    }
  }
}
