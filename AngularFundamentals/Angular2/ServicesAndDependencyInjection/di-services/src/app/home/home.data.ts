import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {GitHubProfileInfo} from './git.hub.profile.info';
import 'rxjs/add/operator/toPromise';

const url = 'https://api.github.com/users/ivaylokenov';



@Injectable()
export class HomeData{

    constructor(private http:Http){}

    getData() : Promise<GitHubProfileInfo>{
        return this.http
            .get(url)
            .toPromise()
            .then(resp => resp.json() as GitHubProfileInfo)
            .catch(err=>{
                console.log(err);
                return new GitHubProfileInfo();
            });
    }
}