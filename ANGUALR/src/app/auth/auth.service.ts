import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { shareReplay, tap } from 'rxjs/operators'

import * as moment from 'moment'
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  AUTH_SERVER:string = 'http://localhost:5000/';
  token:string;

    constructor(private http: HttpClient) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const apiReq = request.clone({ url: `${this.AUTH_SERVER}/${request.url}` });
      return next.handle(apiReq);
    }

    login(name:string, password:string ) {
      return this.http.post<User>(`${this.AUTH_SERVER}api/login`, {name, password})
            .pipe (
                tap (
                    res => this.setSession(res),
                    err => this.handleError(err),
                ),
                shareReplay()
            )
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }


/* OPGAVE 4, eerste deel
    Deze methode wordt aangeroepen wanneer een gebruiker correcte credentials heeft
    ingevoerd (die worden gecheckt door de server). Het JWT dat door de server wordt
    teruggestuurd bevat een expiration-moment, opgeslagen in de property 'expiresIn'.
    Je kunt gebruik maken van de library moments (die al is geïmporteerd) om deze
    expiratie op te tellen bij het huidige moment. Sla deze waarop op in de local storage.
    Behalve deze expiratie bevat het JWT ook een idToken. Sla dit ook op in de local storage.
*/
    private setSession(authResult) {
        console.log(authResult)
        localStorage.setItem("ACCESS_TOKEN", authResult.token);
        localStorage.setItem("EXPIRES_IN", authResult.expiresIn);
    }

/* OPGAVE 4: deel twee
    Deze methode moet de opgeslagen waarden die in het eerste deel van deze opgave
    zijn opgeslagen weer uit de local storage verwijderen (en daarmee effectief de
    bezoeker uitloggen).
*/
    public logout() {
        console.log("Logging out")
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("EXPIRES_IN");
    }

/* OPGAVE 4: derde deel
    Deze methode haalt het expiratie moment weer uit de local storage, parseert het als JSON
    en retourneert de waarde daarvan. Je kunt (opnieuw) gebruik maken van de library 'moments'
    om de opgeslagen waarde weer om te zetten in een moment.
*/

    public getExpiration() {
        console.log("Get experiation as json...")
        let limit = localStorage.getItem("EXPIRES_IN")
        // Do something with limit and time or something
    }

    private getToken() {
      if (!this.token) {
        this.token = localStorage.getItem("ACCESS_TOKEN");
      }
      return this.token
    }

    private handleError(error) {
        console.error("ERROR...")
        console.log(error)
    }
}

interface User {
  name:string,
  password:string,
}
