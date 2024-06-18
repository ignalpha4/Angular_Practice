import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);

  const router = inject(Router);

  //checking if currenuser is set if not will not allow the user to access he path
  if(authService.isAuthenticated()){
    return true;
  }else{
    return false;
  }

};
