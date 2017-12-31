import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;
  errorMsg:string;

  constructor(private authService: AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

  register(){
    this.authService.registerUser({email: this.email, password: this.password})
      .then(resolve => this.router.navigate(['gallery']))
      .catch(error => this.errorMsg = error.message);
  }
}
