import {Component} from '@angular/core';
import {UsersService} from './users.service';

@Component({
    selector:'users',
    template:`
        <h1>{{username}}</h1>
        <user-details></user-details>
    `
})

export class UsersComponent{
    username:string;
    constructor(private usersService:UsersService){
        this.username = this.usersService.getUsername();
    }

}