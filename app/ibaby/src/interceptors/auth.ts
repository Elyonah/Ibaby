import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable, Injector} from "@angular/core";
import {User} from "../providers/user/user";
import 'rxjs/add/operator/do';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../pages/login/login';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    token: any;
    constructor(private injector:Injector){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let userService = this.injector.get(User);
        if(userService.isloggedIn()){
            this.token = userService.token;
        }
        req = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.token
            }
        });
        return next.handle(req).do(
            (evt:HttpEvent<any>) => {},
            (err:any) => {
                if(err instanceof HttpErrorResponse){
                    if(err.status == 401){
                        let nav = this.injector.get(NavController);
                        nav.setRoot(LoginPage);
                    }
                }
            }
        );
    }
}