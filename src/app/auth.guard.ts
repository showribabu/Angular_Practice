import { CanActivateFn , ActivatedRouteSnapshot,RouterStateSnapshot,Router,UrlTree} from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (next: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable <boolean| UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {


  const  authService = inject(AuthService);
  const router= inject(Router);

  if(authService.isAuthenticated){
    return true;
  }
  else{
    return router.createUrlTree(['/test']);
  }



};
