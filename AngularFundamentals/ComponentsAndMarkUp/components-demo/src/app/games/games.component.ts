import {Component, OnInit} from '@angular/core';
import {Game} from './game';

@Component(
    {
        selector:'games',
        templateUrl: './games.component.html',
        styleUrls:['./games.component.css']
    }
)
export class GamesComponent implements OnInit {
    public games:Game[];
    public contentIsShown : boolean;
    public buttonContent : string;
    public imgUrl : string;
    public isSpecial : boolean = true;
    public myDate : Date;
    public singleGame : Object;
    public myNumber : number;
    public likes : number;
    public dislikes : number;

    constructor(){
        this.contentIsShown = false;
        this.buttonContent = 'Show Content';
        this.imgUrl = "https://images.cdn.whathifi.com/sites/whathifi.com/files/styles/big-image/public/SonyPS4v1.jpg?itok=WfWrtMYD";
        this.myDate = new Date();
        this.singleGame = undefined;
        this.myNumber = 0;
        this.likes = 0;
        this.dislikes = 0;
    }

    showContent() : void{
        if(!this.contentIsShown){
            this.contentIsShown = true;
            this.buttonContent = 'Hide Content';
        } else{
            this.contentIsShown = false;
            this.buttonContent = 'Show Content';
        }
        
    }

    callPhone(value : string) : void{
        console.log(value);
    }

    ngOnInit(): void{
        this.games = [
            new Game("Assassin's Creed", "Ubisoft", 100),
            new Game("Battlefield", "EA", 200),
            new Game("COD", "Activision", 300)
        ]
    }

    onReacted(likeOrDislike : boolean){
        likeOrDislike ? ++this.likes : ++this.dislikes;
    }
}