import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationServiceService } from '../core/services/authentication-service.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthenticationServiceService);
  const router = inject(Router);
    
  const currentUser = authService.getCurrentUser();

  if(!currentUser){
    alert("please login first")
    router.navigate(['/login']);
    return false;
  }

  const requiredRole = route.data?.['roles'];

  if(requiredRole && !requiredRole.includes(currentUser.role)){
    alert("user not authorized to access this feature");
    return false;
  }   

  return true;
};
