import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'softuni-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  selectTeam(e){
    sessionStorage.setItem('token', e.target.innerHTML.toLowerCase());
    this.router.navigate(['attack']);
  }

}
