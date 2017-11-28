import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../games/game';

@Component({
    selector: 'game',
    templateUrl: './game.component.html'
})

export class GameComponent {
    @Input('gameProp') game : Game;
    @Output() onReacted = new EventEmitter<boolean>();
    constructor(){

    } 

    react(likeOrDislike : boolean){
        this.onReacted.emit(likeOrDislike)
    }
}