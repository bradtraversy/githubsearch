import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'bradtraversy';
    private client_id = 'd9308aacf8b204d361fd';
    private client_secret='62551cc02cee983fff0bac41baf170eb5a312c1c';
    
    constructor(private _http:Http){
        console.log('Github Service Init...');
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos')
            .map(res => res.json());
    }
    
    updateUsername(username:string){
        this.username = username;
    }
}