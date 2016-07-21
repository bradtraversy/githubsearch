import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username='bradtraversy';
    private client_id = '573457e60aceed25f200';
    private client_secret='49ae294f862cee1b64513df6f584fb6a85f89def';
    
    constructor(private _http: Http){
        console.log('Github Service Started...');
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    updateUsername(username:any){
        this.username = username;
    }
}