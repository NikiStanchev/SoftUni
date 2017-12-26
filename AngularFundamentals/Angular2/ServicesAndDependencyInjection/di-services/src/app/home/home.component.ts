import {Component, OnInit} from '@angular/core';
import {HomeData} from './home.data';
import {MailService} from './mail.service';
import {GitHubProfileInfo} from './git.hub.profile.info';

@Component({
    selector:'home',
    providers:[HomeData, MailService],
    template:`
    <h1>Home - {{gitHubProfileInfo?.name}}</h1>
    `
})
export class HomeComponent implements OnInit{

    gitHubProfileInfo:GitHubProfileInfo;

    constructor(private homeData: HomeData){
    }

    ngOnInit(){
        this.homeData
            .getData()
            .then(profileInfo => {
                console.log(profileInfo);
                this.gitHubProfileInfo = profileInfo;
            })
    }
}