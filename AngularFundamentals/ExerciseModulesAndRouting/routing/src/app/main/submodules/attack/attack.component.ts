import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'softuni-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  attackTeam(e){
    let target = e.target.innerHTML.toLowerCase();
    this.router.navigate([target]);
  }

  logout(): void{
    sessionStorage.clear();
    this.router.navigate([''])
  }
}
