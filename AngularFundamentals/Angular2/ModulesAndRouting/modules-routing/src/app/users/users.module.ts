import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersComponent} from './users.component';
import {UsersService} from './users.service';
import {UserDetailsComponent} from './userdetails.component';

@NgModule({
    imports:[CommonModule],
    declarations:[UsersComponent,
        UserDetailsComponent
    ],
    providers:[UsersService],
    exports:[UsersComponent]
})

export class UsersModule{

}