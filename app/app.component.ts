import { Component } from '@angular/core';
import {GithubComponent} from './components/github.component';
import {GithubService} from './services/github.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives:[GithubComponent],
    providers: [HTTP_PROVIDERS, GithubService]
})
export class AppComponent { }
