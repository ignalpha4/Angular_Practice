import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const userService = inject(UserAuthService);
  const router = inject(Router);

  const currentUser =userService.getCurrentUser();


  if(!currentUser){
    alert("Login required");
    router.navigate(['/login'])
    return false;
  }
  return true;

};
