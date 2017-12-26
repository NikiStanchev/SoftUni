import { Component } from '@angular/core';
import { Titles } from './titles';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styles:[
        `h1 {color:red;}`
    ]
})

export class HomeComponent{
    titles = new Titles(
        'My title'
    );
}