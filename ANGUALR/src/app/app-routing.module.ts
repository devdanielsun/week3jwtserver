import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as guard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service'

// OPGAVE 1, deel 1:
// voeg een route voor 'login' en voor 'secret' toe.

// OPGAVE 4: voeg een canActivate-property toe aan de 'secret' route. Zorg ervoor
// dat de waarde van dat property de auth-guard is, die je al eerder in deze
// opgave hebt moeten vervolmaken.
const routes: Routes = [
  { path: '',
    redirectTo: 'secret',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'secret', loadChildren: './secret/secret.module#SecretModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ guard, AuthService ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
