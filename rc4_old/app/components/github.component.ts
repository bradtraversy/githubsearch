import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'github',
    templateUrl: 'github.component.html'
})

export class GithubComponent { 
    user:any;
    repos:any;
    username:any;
    
    constructor(private _githubService:GithubService){
        this.user = false;
    }
    
    search(){
        this._githubService.updateUsername(this.username);
        
        this._githubService.getUser().subscribe(user => {
            this.user = user;
        });
        
        this._githubService.getRepos().subscribe(repos => {
            this.repos= repos;
        });
    }
}
