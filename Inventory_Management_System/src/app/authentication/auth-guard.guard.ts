import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const userAuthService = inject(UserAuthService);
  const router = inject(Router);

  if(userAuthService.isAuthenticated()){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }

};
